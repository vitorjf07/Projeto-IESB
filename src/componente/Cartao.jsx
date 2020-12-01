import React from 'react';
import { Card } from 'react-bootstrap';

export default (props) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={props.foto} style={{ objectFit: 'cover', height: '220px' }} />
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>
                        {props.children}

                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    )
}