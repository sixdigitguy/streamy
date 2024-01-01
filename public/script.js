document.alert('hi')

///////////////   BUTTON 1    /////////////
document.getElementById("start1").onclick = async function () {

    const clientOne = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    clientOne.setClientRole("host");
    let appId = document.getElementById("app-id").value;
    
    if (appId === '') {
        document.getElementById('error').innerHTML = 'Please enter app ID';
        return 1;
    } else document.getElementById('error').innerHTML = '';
    let channelId = document.getElementById("channel1").value;
    let token = document.getElementById("token1").value || null;
    
    const [localAudioTrack, localVideoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
    localVideoTrack.play('me');
    initStopOne(clientOne, localAudioTrack, localVideoTrack);

    clientOne.on("user-published", async (user, mediaType) => {
        await clientOne.subscribe(user, mediaType);
        if (mediaType === "video") {
            let remoteContainer = document.getElementById("remote-container1");
            addVideoContainer(String(user.uid), remoteContainer)
            user.videoTrack.play(String(user.uid));
        }
        if (mediaType === "audio") {
            user.audioTrack.play();
        }
    });
    clientOne.on("user-unpublished", async (user, mediaType) => {
        if (mediaType === "video") {
            removeVideoContainer(user.uid)
        }
    });
    const _uid = await clientOne.join(appId, channelId, token, null);
    await clientOne.publish([localAudioTrack, localVideoTrack]);
}




///////////////   BUTTON 2    /////////////
document.getElementById("start2").onclick = async function () {
    const clientTwo = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    clientTwo.setClientRole("audience");
  
    let appId = document.getElementById("app-id").value;
    if (appId === '') {
        document.getElementById('error').innerHTML = 'Please enter app ID';
        return 1;
    } else document.getElementById('error').innerHTML = '';
    let channelId2 = document.getElementById("channel2").value;
    let token2 = document.getElementById("token2").value || null;

    initStopTwo(clientTwo);

    clientTwo.on("user-published", async (user, mediaType) => {
        await clientTwo.subscribe(user, mediaType); 
        if (mediaType === "video") {
            let remoteContainer2 = document.getElementById("remote-container2");
            addVideoContainer(String(user.uid + '-c2'), remoteContainer2)
            user.videoTrack.play(String(user.uid + '-c2'));
        }
        if (mediaType === "audio") {
            user.audioTrack.play();
        }
    });
    clientTwo.on("user-unpublished", async (user, mediaType) => {
        if (mediaType === "video") {
            removeVideoContainer(user.uid+ '-c2');
        }
    });
    const _uid2 = await clientTwo.join(appId, channelId2, token2, null);
};



///////////////   STOP 1    /////////////
function initStopOne(client, localAudioTrack, localVideoTrack) {
    const stopBtn = document.getElementById('stop1');
    stopBtn.disabled = false;
    document.getElementById("start1").disabled = true;
    stopBtn.onclick = function () {
        client.unpublish(); 
        localVideoTrack.stop();
        localVideoTrack.close();
        localAudioTrack.stop();  
        localAudioTrack.close(); 
        client.remoteUsers.forEach(user => {
            if (user.hasVideo) {
                removeVideoContainer(user.uid) 
            }
            client.unsubscribe(user); 
        });
        client.removeAllListeners(); 
        stopBtn.disabled = true;
        document.getElementById("start1").disabled = false;
    }
}

///////////////   STOP 2    /////////////
function initStopTwo(client) {
    const stopBtn = document.getElementById('stop2');
    stopBtn.disabled = false;
    document.getElementById("start2").disabled = true;
    stopBtn.onclick = function () {
        client.remoteUsers.forEach(user => {
            if (user.hasVideo) {
                removeVideoContainer(user.uid + '-c2')
            }
            client.unsubscribe(user);
        });
        client.removeAllListeners();
        stopBtn.disabled = true;
        document.getElementById("start2").disabled = false;
    }
}


function addVideoContainer(uid, container) {
    let streamDiv = document.createElement("div"); 
    streamDiv.id = uid;                      
    streamDiv.style.transform = "rotateY(180deg)"; 
    container.appendChild(streamDiv);      
}

function removeVideoContainer(uid) {
    let remDiv = document.getElementById(uid);
    remDiv && remDiv.parentNode.removeChild(remDiv);
}