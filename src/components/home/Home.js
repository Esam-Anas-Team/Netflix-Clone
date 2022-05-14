import React, { useEffect, useState } from 'react';
import MovieList from '../movieList/MovieList'


export default function Home() {
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    let url = 'https://movie-js-1.herokuapp.com/trending'
    let response = await fetch(url);
    let moviesData = await response.json();
    setMovies(moviesData);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      
      <div>
        {
          (movies.length > 0) && <MovieList movies={movies} />
        }
      </div>
    </>
  )
}
