import React from 'react';
import {render} from 'react-dom';
//import Playlist from '../playlist/components/playlist';
import Home from '../pages/containers/home';
import data from '../api.json';

//obteniendo el elemnto donde se va a renderizar
const homeContainer = document.getElementById('home-container');

//elemento a renderizar
const holaMundo = <h1>Hola mundo desde react :)</h1>;
//ReactDOM.render(que voy a renderizar, donde lo renderiza)
//render(<Playlist data={data}/>, app);
render ( <Home data={data}/>, homeContainer);
