import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fade, makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'

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
        <Container fluid style={{ backgroundColor: "#3D80E4", height: "9.6em" }}>
            <Row style={{
                transform: 'translateY(100%)'
            }}>
                <Col className={classes.fontSizeForDetail} md={{ span: 3, offset: 1 }}>Copyrights © 2021 All Rights Reserved by Canvas Inc.
                <br />
                    <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms of Use</a> / <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</a>
                </Col>
                <Col md={{ span: 4, offset: 4 }} >
                    <a href="#" class="btn mt-2 bg-white rounded-lg px-3 py-2  ls0 shadow-sm" style={{ textAlign: 'left', color: "#3D80E4" }}>
                        <i class="fa fa-apple" style={{ padding: "5px", color: "#3D80E4" }}></i>App Store
                            </a>
                    <a href="#" class="btn mt-2 bg-white rounded-lg px-3 py-2  ls0 shadow-sm" style={{ marginLeft: "1em", color: "#3D80E4" }}>
                        <FontAwesomeIcon icon={faGooglePlay} style={{ marginRight: "5px", color: "#3D80E4" }} />Play Store
                            </a>
                </Col>
            </Row>
        </Container >
    )
}
