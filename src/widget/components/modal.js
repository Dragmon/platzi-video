/**
 * Created by dragmon on 15/05/18.
 */
import React from 'react';
import '../../playlist/css/modal.css'

function Modal(props) {
    return(
        <div className="cont-modal">
            {props.children}
            <button onClick={props.handleClick}>cerrar</button>
        </div>
    )
}

export default Modal;