import React from 'react'
// import Arina from './assets/ariArtist.jpg'
import './assets/CSS/Artists.css'
function Artists(props) {
    console.log(props);
    return (
            <div className="artistbox">
                <div className="BgOfArtist">
                    <img src={props.Artistimg} className="Artist" />
                
                <div className="artistHover">
                    <div className="ArtistName">{props.ArtistName}</div>
                    <div className="CateArtist">artist</div>
                </div>
                </div>
            </div>
        
    )
}

export default Artists
