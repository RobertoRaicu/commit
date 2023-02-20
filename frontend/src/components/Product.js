import React, { useContext } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom';

import { StoreContext } from '../StoreContext'

function Product({ product }) {
    const { addToCart } = useContext(StoreContext);
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
            <Link  className="d-grid gap-2 text-decoration-none">
                <Button variant="success" size="lg" onClick={() => addToCart(product.id)}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    Add to cart
                </Button>
            </Link>
        </Card>
    );
}

export default Product;
