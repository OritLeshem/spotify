import { useEffect } from "react"
import { useState } from "react"
import { youtubeService } from "../services/youtube.service"
import { LikeBtn } from "./form"

export function AppFooter() {

    return <footer className="app-footer">
        <main>
            <div className="song-details">
            <img src="https://i.scdn.co/image/ab67616d0000485185c7af5b879dc405b14856f3" alt="" />
                <div>
                    <h5>Scars To Your Beautiful</h5>
                    <small>Alessia Cara</small>
                </div>
                <LikeBtn />
            </div>
            <div className="player"></div>
            <div className="options"></div>
        </main>
    </footer>
}