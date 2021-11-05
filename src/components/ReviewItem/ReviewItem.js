import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ReviewItem = (props) => {
    const cartItem = props.cartItem;
    const{img, name, orderedQuantity, price} = cartItem;
    const totalPrice = price*orderedQuantity;
    return (
        <Card style={{ width: '90%', margin: 'auto'}} className="p-4 mt-2">
        <Row>
        <Col md={3}>
        <Card.Img variant="top" src={img} />
        </Col>
        <Col md={9}  className="text-start">
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Unit Price : ${price}
            <br />
            Quantity: {orderedQuantity}
            <br />
            Total Price: ${totalPrice}

            </Card.Text>
        
        </Card.Body>
        </Col>
        </Row>
        </Card>
    );
};

export default ReviewItem;