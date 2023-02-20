import React, { useContext } from 'react'
import { StoreContext } from '../StoreContext'

import Button from 'react-bootstrap/esm/Button';

import { Link } from 'react-router-dom';

function Checkout() {
    const { cartItems } = useContext(StoreContext);
    for (let i = 1; i < Object.keys(cartItems).length; i++) {
        if (cartItems[i] !== 0) {
            return (
                <div>
                    <Link className="d-grid gap-2 text-decoration-none">
                        <Button variant="success" size="lg">
                            <i className="fa-solid fa-cart-shopping"></i>
                            checkout
                        </Button>
                    </Link>
                </div>
            );
        };
    };
};


export default Checkout