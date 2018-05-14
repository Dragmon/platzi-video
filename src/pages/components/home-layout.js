/**
 * Created by dragmon on 02/05/18.
 */

import React from 'react';
import '../../playlist/css/home-layout.css';

function HomeLayout(props) {
    return(
        <section>
            {props.children}
        </section>
    )
}

export default HomeLayout;