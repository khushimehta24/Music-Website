import React from 'react'
// import dua from './assets/duaAlbum.png'
import './assets/CSS/Album.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function Albums(props) {
    return (
        <div className="albumbox">
            <div className="BgOfAlbum">
                <img src={props.ArtistImgInAlbum} className="Album" />
                <div className="albumHover"> </div>
            </div>
            <div className="musicCard">
                <div className="ImgAndText">
                    <div className="col-3">
                        <img src={props.ArtistImgInAlbum} className="CardImg" />
                    </div>
                    <div className="col-9">
                        <p className="cardText">{props.songName}</p>
                        <p className="artistNameInAlbum">{props.artistNameInAlbum}</p>
                    </div>
                </div>
                <div class="musicicons">
                    <i class="fas fa-backward fa-customise"></i>
                    <i class="fas fa-play fa-customise"></i>
                    <i class="fas fa-forward fa-customise"></i>
                </div>
            </div>
        </div>
    )
}

export default Albums
