import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react';

export default function ModalMovie(props) {
  let commentRef = useRef();


  function handleComment(e) {
    e.preventDefault();
    let userComment = commentRef.current.value;
    console.log({ userComment });
    // let newMovie = { ...props.chosenMovie, userComment };
    props.updateMovie(userComment, props.chosenMovie.id);
  }

  async function handleAddFav(e, movie) {
    e.preventDefault();
    console.log("movie", movie);
    let url = 'https://movie-js-1.herokuapp.com/addMovie'
    let data = {
      poster_path: movie.poster_path,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      comment: movie.comment,
    }
    console.log("data", data);
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    let addedMovie = await response.json();
    console.log("addedMovie", addedMovie);
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: '#7F8487', color: "white" }}>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#61A4BC' }}>
          <img src={`https://image.tmdb.org/t/p/w400/${props.chosenMovie.poster_path}`} alt="Movie poster" />
          <br />
          <br></br>
          {props.chosenMovie.comment ? props.chosenMovie.comment : "No comment is added"}
          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={3} ref={commentRef} type="text" placeholder="Entre your comment" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e) => handleComment(e)}>
              Submit Comment
            </Button>
            <Button variant="primary" type="submit" onClick={(e) => { handleAddFav(e, props.chosenMovie) }}>
              Add to favorites
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#7F8487' }}>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={props.handleClose}>
            Add To Favorite
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
