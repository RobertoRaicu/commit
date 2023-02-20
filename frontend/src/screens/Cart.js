import React, { useContext } from 'react'

import { StoreContext } from '../StoreContext'
import CartItem from '../components/CartItem'
import Checkout from '../components/Checkout'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cart({products}) {
    const { cartItems } = useContext(StoreContext);
    return (
        <div>
            <h1>Cart</h1>
            <Row className='py-3'>
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return (
                            <Col key={product.id} sm={12} md={6} lg={4} xl={3} className='my-3'>
                                <CartItem product={product} />
                            </Col>
                    )};
                })}
            </Row>
            <Checkout />
        </div>
    )
}

export default Cart