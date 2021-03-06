import { useEffect, useState } from 'react';
import MovieList from './MovieList'
export default function Home() {
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    let url = 'https://movie-js-1.herokuapp.com/trending'
    let response = await fetch(url);
    let moviesData = await response.json();
    setMovies(moviesData);
  }
  function updateMovie(newMovie, id) {
    let updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        movie.comment = newMovie.userComment;
        return movie;
      } else {
        return movie;
      }
    })
    setMovies(updatedMovies);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(18rem, 1fr))', backgroundColor: '#1A132F' }}>
        {
          (movies.length > 0) && <MovieList movies={movies} updateMovie={updateMovie} />
        }
      </div>
    </>
  )
}
