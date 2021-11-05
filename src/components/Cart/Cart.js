
import React from 'react';
import { Row, Col, Card, Button} from 'react-bootstrap';
import ReviewItem from '../ReviewItem/ReviewItem';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    for(const item of cart){
        totalPrice = totalPrice + item.price*item.orderedQuantity
    }
    return (
        <>
        <Row>
            <Col md={8}>
                {
                    cart.map(food => <ReviewItem cartItem={food}></ReviewItem>)
                }
            </Col>
            <Col md={4}>
            <Card border="danger" className="bg-warning text-start mt-2 mx-5" style={{ width: '80%' }}>
                <Card.Header>Your Cart is here</Card.Header>
                <Card.Body>
                <Card.Title>Items Ordered : {cart.length}</Card.Title>
                <Card.Text>
                    <h3>Total price: ${totalPrice.toFixed(2)}</h3>
                </Card.Text>
                    <Button variant='light'>Check out</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
            
        </>
    );
};

export default Cart;