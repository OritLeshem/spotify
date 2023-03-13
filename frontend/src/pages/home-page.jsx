import React, { useEffect, useState } from 'react'
import { GreenBtn } from '../cmps/form'
import { youtubeService } from '../services/youtube.service'

export function HomePage() {

    youtubeService.getVideoReasults("pink")
        .then(res => {
            console.log('res:', res)
        })

    return <section className="main-page home-page">
        <h1>hello from home page!</h1>
        <section className="entity-list">
            <section className="entity-preview">
                <div className="img-container">
                    <img src="https://i.scdn.co/image/ab67616d0000485185c7af5b879dc405b14856f3" alt="" />
                    <GreenBtn />
                </div>
                <div>
                    <span>Scars To Your Beautiful</span>
                    <h5>Alessia Cara</h5>
                </div>
            </section>
        </section>
    </section >
}