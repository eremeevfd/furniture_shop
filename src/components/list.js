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
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';


class ItemsList extends Component {
    constructor(props) {
        super(props);
    };
    

    render() {
        var items = [
            {"name": "Стол крутой", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 2", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 3", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 4", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 5", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 6", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 7", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 8", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 9", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 9", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стол крутой 9", "description": "Покупай скорее", "image": "table.png"},
            {"name": "Стул крутой", "description": "Покупай скорее", "image": "chair.png"},
        ];

        console.log(items);
        return (
            // {
            //     items.map((res, idx) => 
            //       <div key={idx}>
            //         {this.processResult(action.id, res)}
            //         {(idx < action.result.length - 1) &&
            //           <hr className="col-xs-12" style={{"borderTop": "1.5px solid #c6cad1"}}></hr>
            //         }
            //       </div>
            //     )
            //   }
            <Container className="container-fluid" md={12}>
                <CardColumns md={12}>
                        {
                            items && items.map((item, idx) => 
                                <Card md={3} key={idx} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                        {item.description}
                                        </Card.Text>
                                        <Button variant="primary">Купить</Button>
                                    </Card.Body>
                                </Card>
                            )
                        }
                </CardColumns>
            </Container>
        );
    }
}

export default ItemsList;