import React, { useContext } from 'react'

import { StoreContext } from '../StoreContext'

import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CartItem({product}) {
    const { cartItems, addToCart, removeFromCart, updateCartInput } = useContext(StoreContext);
    return (
        <Card className="my-3 p-3 h-100 rounded">
            <Card.Img src={product.image} />
            <Card.Body>
                <Card.Title as="div">
                    <h4><strong>{product.name}</strong></h4>
                </Card.Title>
                <Card.Text as="div">
                    <div className="my-3">
                        {product.description}
                    </div>
                </Card.Text>
            </Card.Body>
            <InputGroup className="w-75 mx-auto">
                <Button style={{color: "white",fontSize: "30px"}} variant="success" onClick={() => removeFromCart(product.id)}>-</Button>
                <Form.Control value={cartItems[product.id]} className='border border-success text-center' onChange={(e) => updateCartInput(Number(e.target.value), product.id)}/>
                <Button style={{color: "white",fontSize: "30px"}} variant="success" onClick={() => addToCart(product.id)}>+</Button>
            </InputGroup>
        </Card>
    )
}

export default CartItem