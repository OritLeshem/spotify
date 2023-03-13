
export function GenreList() {

    const genres = [
        {
            name: 'Pop',
            bgc: 'rgb(20, 138, 8)',
            imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768'
        },
        {
            name: 'Hip-Hop',
            bgc: 'rgb(188, 89, 0)',
            imgUrl: 'https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1'
        },
        {
            name: 'Rock',
            bgc: 'rgb(233, 20, 41)',
            imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e'
        },
        {
            name: 'Latin',
            bgc: 'rgb(225, 17, 140)',
            imgUrl: 'https://i.scdn.co/image/ab67fb8200005cafa59f90c077c9f618fd0dde30'
        },
        {
            name: 'Workout',
            bgc: 'rgb(119, 119, 119)',
            imgUrl: 'https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15'
        },
    ]

    return <ul className="genre-list">
        {genres.map(genre =>
            <li className="genre-preview" style={{ backgroundColor: genre.bgc }}>
                <img src={genre.imgUrl} alt="" />
                <h2>{genre.name}</h2>
            </li>
        )}
    </ul>
}