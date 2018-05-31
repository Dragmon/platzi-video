/**
 * Created by dragmon on 29/05/18.
 */
import React from 'react';
import '../../playlist/css/search.css';

/*
function Search(props) {
    return(
        <form action =""></form>
    )
}
*/

const Search = (props) => (
    <form
        className="Form-search"
        onSubmit={props.handleSubmit}
    >
        <input
            ref={props.setRef}
            type="text"
            placeholder="Busca tu videos favorito"
            className="Input-search"
            name="search"
            onChange={props.handleChange}
            value = {props.value}
            //defaultValue = "Mi cancion favorita"
        />
    </form>
)

export default Search;