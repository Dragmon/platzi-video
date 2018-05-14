/**
 * Created by dragmon on 07/05/18.
 */
import React from 'react';
import logo from '../../../images/logo.png';
import '../../playlist/css/related.css';


function Related(props) {
    return(
        <div className="Related">
            <img src={logo} width={250}/>
        </div>
    )
}

export default Related;