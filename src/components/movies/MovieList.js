import React from 'react';

export default function MovieList(props) {
  return (
    <div>MovieList

      {props.movies.map((movie, index)=>
      <div><img src ={movie.Poster} alt="movies" /> </div>
      )}
    </div>
  )
}
