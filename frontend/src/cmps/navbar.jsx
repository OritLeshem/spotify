import React from 'react'
import { Logo, CreatePlaylist, HomepageBtn, LibraryBtn, LikedSongs, SearchBtn, } from './form'
import { GreenBtn } from './form'


export default function Navbar() {
  return (<section className='main-nav'>
    <Logo />
    <nav className='top-links'>
      <ul>
        <li> <HomepageBtn /> Home</li>
        <li> <SearchBtn />Search</li>
        <li><LibraryBtn />Your Library</li>
        <li> <CreatePlaylist />Create Playlist</li>
        <li><LikedSongs />Liked Songs</li>
      </ul>
    </nav>
    <hr style={{ color: "red" }} />

    <nav>
      <ul>
        <li>My Playlist1</li>
        <li>My Playlist2</li>
        <li>My Playlist3</li>

      </ul>
    </nav>
  </section>
  )
}
