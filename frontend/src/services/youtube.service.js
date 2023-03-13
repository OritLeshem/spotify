import axios from "axios"

const API_KEY = 'AIzaSyDbYtw99FWbtr4RCHxS0dxtj3--vXfSp4E'

export const youtubeService = {
    getVideoReasults,
}

async function getVideoReasults(val) {
    const results = []
    try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&maxResults=20&type=video&key=${API_KEY}&q=${val}`)
        const videos = res.data.items
        videos.map(video => {
            if (video.snippet.title.includes('Trailer') || !video.snippet.title) return
            const song = {
                id: video.id.videoId,
                title: video.snippet.title,
                imgUrl: video.snippet.thumbnails.high.url,
            }
            results.push(song)
        })
        return results
    } catch (err) {
        return err
    }
}
