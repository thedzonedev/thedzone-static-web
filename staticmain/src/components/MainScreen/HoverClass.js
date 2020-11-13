import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Style.css'
import logo from './iphone.png'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    fontSizeForTitle: {
        fontSize: '4.3em',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left'
    },
    fontSizeForDesc: {
        fontSize: '1.2em',
        color: 'white',
        textAlign: 'left'
    },
    gapBetweenComponents: {
        marginBottom: '10em'
    }
}));

export default function HoverClass() {
    const classes = useStyles()
    return (
        <Container fluid className={classes.gapBetweenComponents}>
            <hr style={{ margin: 0, padding: 0, height: '0.1vh' }} />
            <Row style={{ backgroundColor: "#3D80E4", height: '70vh' }}>
                <Col md={{ span: 5, offset: 1 }} style={{ height: '100%', display: 'table' }}>
                    <Row className="align-middle" style={{ display: "table-cell" }}>
                        <Col>
                            <p className={classes.fontSizeForTitle}>Our Design<br />Your Business.</p>
                            <p className={classes.fontSizeForDesc}>Best Wallet App for your upcoming Projects.</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={{ span: 4 }}>
                    <img className="imageHover" style={{ width: "80%" }}
                        src='https://i.pinimg.com/originals/54/b9/72/54b972c504b660f6e7905ff1242245c9.png' />
                </Col>
            </Row>
        </Container>
    )
}
