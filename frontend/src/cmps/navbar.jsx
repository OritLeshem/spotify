import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CreatePlaylist, HomePageSvg, LibrarySvg, LikedSongs, Logo, SearchSvg } from './form'

export default function Navbar() {

  const playlists = ['My First List', 'Pop Songs List']

  return <section className="navbar">
    <Logo />
    <nav>
      <NavLink to="/"><HomePageSvg /><h3>Home</h3>
      </NavLink>
      <NavLink to="/search"><SearchSvg /><h3>Search</h3>
      </NavLink>
      <NavLink to="/library"><LibrarySvg /><h3>Your Library</h3>
      </NavLink>
    </nav>
    <div className="preferences">
      <NavLink to="/create"><CreatePlaylist /><h3>Create Playlist</h3></NavLink>
      <NavLink to="/liked"><LikedSongs /><h3>Liked Songs</h3></NavLink>
    </div>
    <div className="divider"></div>
    <div className="playlists">
      {playlists.map(playlist =>
        <button><h5>{playlist}</h5></button>
      )}
    </div>
  </section>
}
