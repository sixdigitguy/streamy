const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})
const APP_ID = "d05bfb2e3fd4471395f6cbed95c45fd6"
const TOKEN = "007eJxTYDjmw3yt9S3/mzknjs/NfOmw/WKwVt6bg4vTjf8xv/uts6VdgSHFwDQpLcko1TgtxcTE3NDY0jTNLDkpNcXSNNnENC3FbH3/pNSGQEYGmZnbGRihEMTnYChJzS0ISS0uYWAAAOYiJKQ="
const CHANNEL = "tempTest"

document.addEventListener('load', joinStream)

let joinAndDisplayLocalStream = async () => {

    client.on('user-published', handleUserJoined)
    
    client.on('user-left', handleUserLeft)
    
    let UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks() 

    let player = `<div class="video-container" id="user-container-${UID}">
                        <div class="video-player" id="user-${UID}"></div>
                  </div>`
    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

    localTracks[1].play(`user-${UID}`)
    
    await client.publish([localTracks[0], localTracks[1]])
}

let joinStream = async () => {
    await joinAndDisplayLocalStream()
    document.getElementById('join-btn').style.display = 'none'
    document.getElementById('stream-controls').style.display = 'flex'
}

alert("hi")