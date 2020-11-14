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
                <Col md={{ span: 6 }} style={{ textAlign: 'left' }}>
                    <img class="align-bottom" style={{ width: "50%", marginTop: '-20px' }}
                        src='./creditcard.png' />
                    <img className="imageHover align-bottom" style={{ width: "43%", left: '-200px' }}
                        src='./mobilescreen.png' />
                </Col>
            </Row>
        </Container>
    )
}
