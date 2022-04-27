import React, {useState} from 'react'
import MovieList from './MovieList'

export default function Movies() {

  const [movies, setMovies] =  useState([
    {
      "Title": "Tom and Jerry",
      "Year": "1965",
      "imdbID": "tt0274294",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjA3NzUwNjQwOF5BMl5BanBnXkFtZTcwMTcwNTYyMQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Tom and Jerry: The Great Escape",
      "Year": "1992",
      "imdbID": "tt0105616",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxYjU0NmUtOTg0NC00ZGQ5LWEwZjEtZTU4OTgwMzAwYjk5XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
  },
  {
      "Title": "Tom and Jerry: The Magic Ring",
      "Year": "2001",
      "imdbID": "tt0303151",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWVhOTY3ZWEtZDBlZC00ZGI4LWE5MjUtYWMzYzM5NzQ0YWJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
  },
  {
      "Title": "Tom and Jerry Tales",
      "Year": "2006–2008",
      "imdbID": "tt0780438",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGQ5YjJjOWYtNWVlZS00YWIwLTlkMWItY2I5MjY5MWQxY2FjXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_SX300.jpg"
  },
  {
      "Title": "Tom and Jerry",
      "Year": "1940–",
      "imdbID": "tt12158994",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTBhZmVlZWItMWRmNS00ZGRkLWE0MTgtNmIzZDc2MjJmYjEzXkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg"
  },
  {
      "Title": "The Tom and Jerry Comedy Show",
      "Year": "1980–1982",
      "imdbID": "tt0282315",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTA3MmM1MzgtYTJlYS00NDI2LTkxMDQtZTZlYzJkNGZmMmM3XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
  },
  {
      "Title": "The Tom and Jerry Show",
      "Year": "2014–2022",
      "imdbID": "tt3559124",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTdlY2NjZGQtM2E4Zi00MDMxLTllYTktNzIxODUwOTM3NTdlXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg"
  },
  {
      "Title": "Tom and Jerry: The Fast and the Furry",
      "Year": "2005",
      "imdbID": "tt0487176",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGU4YTZkODEtODIyNi00ZWJkLWE4M2MtMjQxMWNhYmNmYjU2XkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
  },
  {
      "Title": "Jerry and Tom",
      "Year": "1998",
      "imdbID": "tt0120867",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjA1NTc5NTc5N15BMl5BanBnXkFtZTcwOTI2NjEzMQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Tom and Jerry Blast Off to Mars!",
      "Year": "2005",
      "imdbID": "tt0433696",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODdjZGNhNzEtMGNhYi00NGE1LThlOTAtODQ2MDYyZmI0YjQ5XkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
  }

  ])
  return (
    <div>
        <MovieList movies ={movies} />
    </div>
  )
}
