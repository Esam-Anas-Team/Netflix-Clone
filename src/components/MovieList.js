import Movie from './Movie'

export default function MovieList(props) {
  return (
    <>
      {
        props.movies.map((movie) => {
          return (
            <>
              <div>
                <Movie movie={movie} />
              </div>
            </>
          )
        })
      }
    </>
  )
}
