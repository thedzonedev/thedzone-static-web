import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Style.css'
import logo from './iphone.png'
import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
    fontSizeForTitle: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '4.3em',
        },
        fontSize: '2em',
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
    },
    heightOfBackground: {
        [theme.breakpoints.up('sm')]: {
            height: '30em'
        }
    }
}));

export default function HoverClass() {
    const classes = useStyles()
    return (
        <Container fluid className={classes.gapBetweenComponents}>
            <hr style={{ margin: 0, padding: 0, height: '0.05em' }} />
            <Row style={{ backgroundColor: "#3D80E4" }} className={classes.heightOfBackground}>
                <Col md={{ span: 5, offset: 1 }} sm={{ span: 12 }} style={{ height: '30em', display: 'table' }}>
                    <Row className="align-middle" style={{ display: "table-cell" }}>
                        <Col style={{ textAlign: 'left' }}>
                            <p className={classes.fontSizeForTitle}>Our Design<br />Your Business.</p>
                            <p className={classes.fontSizeForDesc}>Best Wallet App for your upcoming Projects.</p>
                            <a href="#" class="btn mt-2 text-dark bg-white rounded-lg px-4 py-3 nott ls0 shadow-sm " style={{ textAlign: 'left' }}>
                                <i class="fa fa-apple" style={{ padding: "5px" }}></i>Get it on the App Store
                            </a>
                            <a href="#" className="btn mt-2 text-dark bg-white rounded-lg px-4 py-3 nott ls0 shadow-sm conditionalMarginLeft" >
                                <FontAwesomeIcon icon={faGooglePlay} style={{ marginRight: "5px" }} />Get it on Play Store
                            </a>
                            <p style={{
                                fontSize: "0.8em",
                                color: "rgba(255,255,255,0.5)",
                                marginTop: '1em'
                            }}>SIGN UP & GET 30 DAYS FREE TRAIL</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={{ span: 6 }} sm={{ span: 12 }} style={{ textAlign: 'left', marginBottom: '10px' }}>
                    <img class="align-bottom" style={{ width: "50%", marginTop: '-20px' }}
                        src='./creditcard.png' />
                    <img className="imageHover align-bottom" style={{ width: "43%", left: '-27%' }}
                        src='./mobilescreen.png' />
                </Col>
            </Row>
            <Row style={{ transform: 'translateY(100%)' }}>
                <Col md={{ span: 2 }} xs={{ span: 3 }} style={{ textAlign: 'center', height: '2em' }}><img style={{
                    height: "100%"
                }} src="./amazon.svg" /></Col>
                <Col md={{ span: 1 }} xs={{ span: 3 }} style={{ textAlign: 'left', height: '2em' }}><img style={{
                    height: "100%"
                }} src="./netflix.svg" /></Col>
                <Col md={{ span: 2 }} xs={{ span: 3 }} style={{ textAlign: 'center', height: '3em' }}><img style={{
                    height: "100%"
                }} src="./google.svg" /></Col>
                <Col md={{ span: 1 }} xs={{ span: 3 }} style={{ textAlign: 'left', height: '2em' }}><img style={{
                    height: "100%"
                }} src="./linkedin.svg" /></Col>
            </Row>
        </Container>
    )
}
