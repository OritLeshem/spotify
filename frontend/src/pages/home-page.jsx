import React, { useEffect, useState } from 'react'
import { EntityList } from '../cmps/entity-list'
import { EntityPreview } from '../cmps/entity-preview'
import { GreenBtn, LibrarySvg } from '../cmps/form'
import { entityService } from '../services/entity.service.local'
import { youtubeService } from '../services/youtube.service'

export function HomePage() {
    const [pop, setPop] = useState()
    const [latin, setLatin] = useState()
    const [hiphop, setHiphop] = useState()

    useEffect(() => {

        const latin = entityService.latin()
        console.log("latin", latin.songs)
        setLatin(latin)
        const hiphop = entityService.hiphop()
        console.log("hiphop", hiphop.songs)
        setHiphop(hiphop)
        const pop = entityService.pop()
        console.log("pop", pop.songs)
        setPop(pop)
    }, [])

    youtubeService.getVideoReasults("pink")
        .then(res => {
            // console.log('res:', res)
        })

    if (!pop) return
    return <section className="main-page home-page">
        <h2>POP</h2>
        <EntityList entitys={pop.songs} />
    </section >
}