import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core';
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    fontSizeForTitle: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: '1em'
    },
    fontSizeForDesc: {
        fontSize: '1em',
        color: 'rgba(255,255,255,1)',
        textAlign: 'left',
        padding: '1.4em',
        border: '1px solid white',
        borderBottom: 'none'
    }
}));
export default function FAQS() {
    const classes = useStyles();
    return (
        <Container fluid style={{ height: '40em' }}>
            <Row>
                <Col className={classes.fontSizeForTitle}>Frequently Asked Questions</Col>
            </Row>

            <Row>
                <Col
                    style={{
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px'
                    }} className={classes.fontSizeForDesc} md={{ span: 6, offset: 3 }}><FontAwesomeIcon icon={faAngleRight}
                        style={{
                            marginRight: '5px',
                            color: "white"
                        }} />How do I become an author?</Col>
            </Row>
            <Row>
                <Col className={classes.fontSizeForDesc} md={{ span: 6, offset: 3 }}><FontAwesomeIcon icon={faAngleRight}
                    style={{
                        marginRight: '5px',
                        color: "white"
                    }} />Helpful Resources for Authors</Col>
            </Row>
            <Row>
                <Col className={classes.fontSizeForDesc} md={{ span: 6, offset: 3 }}><FontAwesomeIcon icon={faAngleRight}
                    style={{
                        marginRight: '5px',
                        color: "white"
                    }} />How much money can I make?</Col>
            </Row>
            <Row>
                <Col className={classes.fontSizeForDesc} md={{ span: 6, offset: 3 }}><FontAwesomeIcon icon={faAngleRight}
                    style={{
                        marginRight: '5px',
                        color: "white"
                    }} />Can I offer my items for free on a promotional basis?</Col>
            </Row>
            <Row>
                <Col className={classes.fontSizeForDesc} style={{
                    border: '1px solid white', borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px'
                }} md={{ span: 6, offset: 3 }}><FontAwesomeIcon icon={faAngleRight}
                    style={{
                        marginRight: '5px',
                        color: "white"
                    }} />An Introduction to the Marketplaces for Authors</Col>
            </Row>
            <Row>
                <Col style={{ color: 'white' }}>Didn't find what you were after? <a href="#" style={{ color: 'white' }}>Visit the FAQ Page</a></Col>
            </Row>
        </Container >
    )
}
