/**
 * Created by dragmon on 14/05/18.
 */
import React, {Component} from 'react';
import {createPortal} from 'react-dom';

class ModalContainer extends Component{
    render(){
        return createPortal(
            this.props.children,
            document.getElementById('modal-container')
        )
    }
}

export default ModalContainer;