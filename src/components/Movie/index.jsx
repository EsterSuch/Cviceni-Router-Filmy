import React from 'react';
import movies from './../../movies.js';
import { useParams } from 'react-router-dom';

const Movie = () => {
  // naimportuj useParams z react-router-dom
  // pomocí useParams získej id filmu předané jako parametr v adrese, která zobrazila tuto komponentu
  // podle id najdi film v poli movies (už ho máš naimportované)
  // místo komentáře dole zobraz detaily nalezeného filmu

  const { id } = useParams();

  return (
    <div className="movie">
      {/*
				Sem doplnit:
				- obrázek (jsou ve složce assets)
				- název filmu
				- popis
				- případně další detaily
			*/}
    </div>
  )
}

export default Movie;