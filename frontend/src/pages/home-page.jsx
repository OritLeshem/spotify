import React from 'react'
import { GreenBtn } from '../cmps/form'
import { YoutubeService } from '../services/youtube.service'

export function HomePage() {

    // home page
    return <section className="home-page">
        <h1>hello from home page!</h1>
        <GreenBtn />
    </section >
}