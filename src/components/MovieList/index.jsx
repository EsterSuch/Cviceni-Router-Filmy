import React from 'react';
import movies from './../../movies.js';
import { Link } from 'react-router-dom';

const MovieList = () => {
  return (
    <nav className="movie-list">
      <ul>
        {
          movies.map(movie => (
            //<p key={movie.id}>{movie.title}</p>
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))

        }
      </ul>
    </nav>



  )

}

export default MovieList;