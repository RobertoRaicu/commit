import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Roberto Raicu Meer | <Link to="/terms">Terms</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
