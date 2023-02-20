import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";

function HomeScreen({products}) {
    
    return (
        <div>
            <h1>Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3} className='my-3'>
                        <Product product={product} />
                    </Col>
                    
                ))}
            </Row>
        </div>
    );
}

export default HomeScreen;