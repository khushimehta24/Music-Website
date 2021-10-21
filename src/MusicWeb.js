import React from 'react'
import Albums from './Components/Albums';
import Artists from './Components/Artists';
import './Components/assets/CSS/Navbar.css'
import Tab1 from './Components/Tab1';
function MusicWeb() {
    return (
        <>
            <div className="buttonContainer">
                <div className="mainButton">
                    <button>Top Artists</button>
                    <button>New Releases</button>
                    <button>Top Albums</button>
                    <button>Playlists</button>
                </div>
                <div className="searchButton">
                    <input type="text" placeholder='Heard a song? Find it here' />
                    <button>Search</button>
                </div>
            </div>
            <Tab1 />
            <div className="artist-d-flex">
                <Artists ArtistName={"Drake"} Artistimg={require('./Components/assets/drakeArtist.jpg').default} />
                <Artists ArtistName={"Ariana Grande"} Artistimg={require('./Components/assets/ariArtist.jpg').default} />
            </div>
            <div className="artist-d-flex">
                <Albums songName={"Future Nostalgia"} artistNameInAlbum={"dua lipa"} ArtistImgInAlbum={require('./Components/assets/duaAlbum.png').default} />
                <Albums songName={"Happier then ever"} artistNameInAlbum={"Billie Eilish"} ArtistImgInAlbum={require('./Components/assets/billieAlbums.jpg').default} />
            </div>

        </>
    )
}

export default MusicWeb
