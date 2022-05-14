import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'


export default function NavFunction() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">PopCorn Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favlist">Favorite List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
