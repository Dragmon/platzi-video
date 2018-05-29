/**
 * Created by dragmon on 02/05/18.
 */
import React from 'react';
import Playlist from '../../playlist/components/playlist';
import '../../playlist/css/category.css';

function Category(props) {
    return(
        <div className="Category">
            <p>{props.description}</p>
            <h2>{props.title}</h2>
            <Playlist
                handleOpenModal={props.handleOpenModal}
                playlist={props.playlist}
            />
        </div>
    )
}

export default Category;