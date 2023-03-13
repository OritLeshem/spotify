import React from 'react'
import { GreenBtn } from '../cmps/form'
import { youtubeService } from '../services/youtube.service'

export function HomePage() {

    youtubeService.getVideoReasults("pink")
        .then(res => console.log(res))

    return <section className="main-page home-page">
        <h1>hello from home page!</h1>
        <GreenBtn />
    </section >
}