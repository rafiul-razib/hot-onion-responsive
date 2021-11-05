import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SingleFood = (props) => {
    const {img, name, price} = props.clickedFood;


    const[count, setCount] = useState(1);

    const handleIncrease = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleDecrease = () =>{
        if(count > 1){
            const newCount = count - 1;
            setCount(newCount)
        }
        else{
            return
        }
    }

    const totalPrice = props.clickedFood.price * count;

    const orderedQuantity = count;

    props.clickedFood.orderedQuantity =orderedQuantity;

    return (
   
        <Card style={{ width: '60%', margin: 'auto'}} className="p-4 mt-2">
        <Row>
        <Col md={7}>
        <Card.Img variant="top" src={img} />
        </Col>
        <Col md={5}  className="text-start">
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Unit Price : ${price}
            <br />
            Quantity: <Button className="me-2" variant="danger" onClick={handleIncrease}>+</Button>
            {count}
            <Button className="ms-2" variant="danger" onClick={handleDecrease}> - </Button>
            <br />
            Total Price: {totalPrice}

            </Card.Text>
            <Link to='/cart'>
            <Button variant="primary" onClick={()=>props.handleAddToCart(props.clickedFood)}>Add to cart</Button>
            </Link>
        </Card.Body>
        </Col>
        </Row>
        </Card>
    );
};

export default SingleFood;