import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const meal = props.meal;
    const{name, img, id} = meal;
  
    return (
     
            <Col>
            <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" className="w-75 m-auto p-3" src={img} />
            <Card.Body >
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to={`/details/${id}`}>
                <Button onClick={()=> props.handleClickedFood(props.meal)} variant="primary">See details</Button>
                </Link>
            </Card.Body>
            </Card>
            </Col>

    );
};

export default Meal;