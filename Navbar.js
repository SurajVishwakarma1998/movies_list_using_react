import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Topsec = () => {
const [info,setInfo]=useState([]);

  function getInfo(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ef6ba6cd9amsh8b3e86d915b925dp1087e4jsn055b84b5306f',
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
      }
    };
    
    fetch('https://movies-app1.p.rapidapi.com/api/genres', options)
      .then(response => response.json())
      .then(response => setInfo(response.results))
      .catch(err => console.error(err));
  }

useEffect(()=>{
  getInfo();
},[])

  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">🐱‍🏍</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          {info.map((type)=> <Nav.Link key={type.uuid} href="/">{type.name}</Nav.Link>)}
           
            {/* <Nav.Link href="/">Action</Nav.Link>
            <Nav.Link href="/">Animation</Nav.Link>
            <Nav.Link href="/">Comedy</Nav.Link>
            <Nav.Link href="/">Triller</Nav.Link>
            <Nav.Link href="/">Science Fiction</Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Topsec