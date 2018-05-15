import React, {Component} from 'react';
import Media from './media.js';
import '../css/playlist.css';
/*
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import Fullscreen from '../../icons/components/fullscreen';
*/
/*
import Buttonsvideo from '../../icons/components/buttonsvideo';

class Playlist extends Component{
    render(){
        const categories = this.props.data.categories;
        const playlist = this.props.data.categories[0].playlist;
        console.log(this.props.data);
        console.log(categories);
        return(
            <div className="cont-principal">

                <Buttonsvideo.Play
                    size={50}
                    color="red"
                />
                <Buttonsvideo.Pause
                    size={50}
                    color="blue"
                />
                <Buttonsvideo.Volume
                    size={50}
                    color="black"
                />
                <Buttonsvideo.Fullscreen
                    size={50}
                    color="green"
                />
                {
                    categories.map((item)=>{
                        return (
                            <div className="Playlist" key={item.id}>
                                <div className="Header-categorie">
                                    <p className="Categorie-description">
                                        {item.description}
                                    </p>
                                    <h2 className="Categorie-title">
                                        {item.title}
                                    </h2>
                                </div>
                                {
                                    item.playlist.map((item)=>{
                                        return <Media {...item} key={item.id}/>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
*/

function Playlist(props) {
    console.log(props.data);
    return(
        <div className="Playlist">
            {
                props.playlist.map((item)=>{
                    return(
                        <Media handleClick={props.handleOpenModal} {...item} key={item.id}/>
                        )
                })
            }
        </div>
    )
}


export default Playlist;