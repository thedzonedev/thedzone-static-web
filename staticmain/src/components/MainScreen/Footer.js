import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fontSizeForHeading: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    fontSizeForDetail: {
        fontSize: '0.9em',
        textAlign: "left",
        color: 'rgba(255,255,255,0.5)',
        padding: '0'
    },
    gapBetweenComponents: {
        marginBottom: '10em'
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <Container fluid style={{ backgroundColor: "#3D80E4", height: "9.6em", display: 'table' }}>
            <Row className="align-middle" style={{ display: 'table-cell' }}>
                <Col className={classes.fontSizeForDetail} md={{ span: 3, offset: 1 }}>Copyrights © 2021 All Rights Reserved by Canvas Inc.
                <br />
                    <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms of Use</a> / <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</a>
                </Col>
                <Col md={{ span: 4, offset: 4 }}>

                </Col>
            </Row>
        </Container>
    )
}
