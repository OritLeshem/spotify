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
    return <section className="main-page home-page">
        <h2>POP</h2>
        <div className="entity-list">

            {pop && pop.songs.map(song => <section className="entity-preview">
                <div className="img-container">
                    <img src={song.imgUrl} alt="" />
                    <GreenBtn />
                </div>
                <div>
                    <span>{song.name}</span>
                    <h5>{song.description}</h5>
                </div>
            </section>)}

        </div>

    </section >
}

 // {/* <h1>hello from home page!</h1>
        // <section className="entity-list">
        //     <section className="entity-preview">
        //         <div className="img-container">
        //             <img src="https://i.scdn.co/image/ab67616d0000485185c7af5b879dc405b14856f3" alt="" />
        //             <GreenBtn />
        //         </div>
        //         <div>
        //             <span>Scars To Your Beautiful</span>
        //             <h5>Alessia Cara</h5>
        //         </div>
        //     </section>
        // </section> */}