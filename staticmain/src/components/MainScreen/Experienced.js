import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core';
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faLifeRing } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    fontSizeForTitle: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        padding: 0
    },
    fontSizeForDesc: {
        fontSize: '1em',
        color: 'rgba(0,0,0,0.5)',
        textAlign: 'left',
        padding: 0

    },
    secDescWithoutBold: {
        fontSize: '1em',
        color: 'rgba(0,0,0,0.5)',
        textAlign: 'left',
        padding: 0
    },
    secDescWithBold: {
        fontSize: '1em',
        textAlign: 'left',
        fontWeight: 'bold',
        padding: 0
    },
    gapBetweenComponents: {
        marginBottom: '10em'
    }

}));

export default function Experienced() {
    const classes = useStyles();
    return (
        <Container fluid >
            <Row>
                <Col md={{ span: 6 }} style={{ textAlign: 'center' }}>
                    <Row>
                        <Col className={classes.fontSizeForTitle} md={{ span: 10, offset: 2 }} style={{ textAlign: 'left' }}>Experienced by <span
                            style={{ color: "#3D80E4" }}>46,000+</span> People.</Col>
                    </Row><br />
                    <Row>
                        <Col className={classes.fontSizeForDesc} md={{ span: 10, offset: 2 }} >Enthusiastically morph unique web-readiness via impactful platforms. Intrinsicly matrix premium expertise for diverse expertise. Intrinsicly drive collaborative bandwidth for accurate testing.</Col>
                    </Row><br /><br />
                    <Row>
                        <Col md={{ span: 1, offset: 2 }} >
                            <Row>
                                <p><FontAwesomeIcon icon={faDesktop} className="text-primary" style={{
                                    fontSize: "30px"
                                }} /></p>
                            </Row>
                        </Col><br />
                        <Col md={{ span: 7, offset: 0 }} >
                            <Row>
                                <Col className={classes.secDescWithBold}>RESPONSIVE LAYOUT</Col>
                            </Row>
                            <Row>
                                <Col className={classes.secDescWithoutBold}>Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</Col>
                            </Row>
                        </Col>
                    </Row><br /><br />
                    <Row>
                        <Col md={{ span: 1, offset: 2 }}>
                            <Row>
                                <p><FontAwesomeIcon icon={faLightbulb} className="text-warning" style={{
                                    fontSize: "30px"
                                }} /></p>
                            </Row>
                        </Col><br />
                        <Col md={{ span: 7, offset: 0 }} >
                            <Row>
                                <Col className={classes.secDescWithBold}>LIGHT & DARK COLOR SCHEME</Col>
                            </Row>
                            <Row>
                                <Col className={classes.secDescWithoutBold} >Change your Website's Primary Scheme instantly by simply adding the dark class to the body.</Col>
                            </Row>
                        </Col>
                    </Row><br /><br />
                    <Row>
                        <Col md={{ span: 1, offset: 2 }} >
                            <Row>
                                <p><FontAwesomeIcon icon={faLifeRing} className="text-danger" style={{
                                    fontSize: "30px"
                                }} /></p>
                            </Row>
                        </Col><br />
                        <Col md={{ span: 7, offset: 0 }} >
                            <Row>
                                <Col className={classes.secDescWithBold}>EXTENSIVE DOCUMENTATION</Col>
                            </Row>
                            <Row>
                                <Col className={classes.secDescWithoutBold}>We have covered each & everything in our Documentation including Videos & Screenshots.</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={{ span: 6 }}>
                    <img src="./iphone-hand.png" />
                </Col>
            </Row>
        </Container>
    )
}
