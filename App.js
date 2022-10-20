import React, { useEffect, useState } from 'react'
import Moviecard from './component/Moviecard.js'
import Topsec from './component/Navbar'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';


const App = () => {
  const [moviesData,setMoviesData]= useState([]);
  function getData(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ef6ba6cd9amsh8b3e86d915b925dp1087e4jsn055b84b5306f',
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
      }
    };
    
    fetch('https://movies-app1.p.rapidapi.com/api/movies', options)
      .then(response => response.json())
      .then(response => setMoviesData(response.results))
      .catch(err => console.error(err));
    
  }
  
  useEffect(()=>{
      getData();
  },[])
  return (
    <div>
      <Topsec />
      <Container  >
      <Row >
      {moviesData.map((movie)=>(<Col sm={4} key={movie._id} className="mt-3 mb-3"><Moviecard  image={movie.image} title={movie.titleOriginal} 
      rating={movie.rating} release={movie.release} /></Col>))}
      </Row>
      </Container>
    </div>
  )
}

export default App