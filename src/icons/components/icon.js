/**
 * Created by dragmon on 24/04/18.
 */
import React from 'react';

function Icon(props) {
    // Indicas los elementos a utilizar
    const {
        color,
        size
    } = props
    return(
        <svg
            fill={color} /* asigna un color al svg */
            height={size}
            width={size}
            viewBox="0 0 32 32" /* delimita y acota la parte del svg que semostrara */ 
        >
            {props.children}
        </svg>
    )

}

export default Icon;