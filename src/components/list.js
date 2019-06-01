import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class ItemsList extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Стол</h1>
                        <Image src="/table.png" rounded />
                    </Col>
                    <Col>
                        Стул
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ItemsList;