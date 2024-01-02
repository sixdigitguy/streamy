const APP_ID = "d05bfb2e3fd4471395f6cbed95c45fd6"
const TOKEN = "007eJxTYDjmw3yt9S3/mzknjs/NfOmw/WKwVt6bg4vTjf8xv/uts6VdgSHFwDQpLcko1TgtxcTE3NDY0jTNLDkpNcXSNNnENC3FbH3/pNSGQEYGmZnbGRihEMTnYChJzS0ISS0uYWAAAOYiJKQ="
const CHANNEL = "tempTest"

const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})
let streamTrack = []


async function startAndDisplayStream(){
    let UID = await client.join(APP_ID, CHANNEL, TOKEN, null)       ///create UID
    streamTrack = await AgoraRTC.createMicrophoneAndCameraTracks()      ///create track (stream)

    /// create and store stream (video player) ///
    let player = `<div class="video-container" id="user-container-${UID}">
                        <div class="video-player" id="user-${UID}"></div>
                  </div>`
    document.getElementById('video-stream').insertAdjacentHTML('beforeend', player)

    streamTrack[1].play(`user-${UID}`)
    await client.publish([streamTrack[0], streamTrack[1]])

    alert("hi")
}

