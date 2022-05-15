import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from './ModalMovie'

export default function Movie(props) {
  const [show, setShow] = useState(false);
  const [chosenMovie, setChosenMovie] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setChosenMovie(props.movie);
    // console.log(props.movie);
    setShow(true);
  }

  return (
    <>
      <Card style={{ width: '30rem', margin: '5px', backgroundColor: '#61A4BC' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <Card.Body style={{ height: '400px' }}>
          <Card.Title>{props.movie.title || ' No Title Found '}</Card.Title>
          <Card.Text style={{ overflowX: 'hidden', scrollBehavior: 'smooth', height: '200px' }}>
            {props.movie.overview}
          </Card.Text>
          <Card.Text>
            {props.movie.release_date || 'No Release Date Found'}
          </Card.Text>
          <Button variant="danger" onClick={handleShow}>Add To Favorite</Button>
        </Card.Body>
      </Card>
      {
        chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie}  updateMovie={props.updateMovie}/>
      }
    </>
  )
}
