import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div><Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHa6WiFfp8i03pultacCnD6vcvfpFzth6ow&usqp=CAU"
            width="150"
            height="150"
            className="d-inline-block align-top"
          />{' '}
      THE PERMIAN
        </Navbar.Brand>
      </Container>
    </Navbar></div>
  )
}

export default Header

