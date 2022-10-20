import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Moviecard(props) {
  return (
    <Container>
    
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>        
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating : {props.rating}</small>
        </Card.Footer>
        <Card.Footer><small className="text-muted">Release Date : {props.release}</small></Card.Footer>
      </Card>     
    </Container>
    
      
   
  );
}

export default Moviecard;