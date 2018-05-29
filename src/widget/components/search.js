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

const Search = () => (
    <form className="Form-search">
        <input
            type="text"
            placeholder="Busca tu videos favorito"
            className="Input-search"
        />
    </form>
)

export default Search;