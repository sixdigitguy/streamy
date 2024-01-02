const APP_ID = "d05bfb2e3fd4471395f6cbed95c45fd6"
const TOKEN = "007eJxTYDjmw3yt9S3/mzknjs/NfOmw/WKwVt6bg4vTjf8xv/uts6VdgSHFwDQpLcko1TgtxcTE3NDY0jTNLDkpNcXSNNnENC3FbH3/pNSGQEYGmZnbGRihEMTnYChJzS0ISS0uYWAAAOYiJKQ="
const CHANNEL = "tempTest"

const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})
let streamTrack = []


async function joinAndDisplayStream(){
    let UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    alert("hi")
}

