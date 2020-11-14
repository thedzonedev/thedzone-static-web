import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fade, makeStyles } from '@material-ui/core/styles';
import './Style.css'

const useStyles = makeStyles((theme) => ({
    fontSizeForHeading: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'white',
        padding: '0.5em'
    },
    fontSizeForDetail: {
        fontSize: '1.2em',
        color: 'white'
    },
    gapBetweenComponents: {
        marginBottom: '10em',
        paddingTop: '5em',
        height: "120vh"
    },
    inputStyling: {
        height: '3em',
        width: '100%',
        border: "1px solid lightgrey",
        borderRadius: "5px",
        padding: '1em'
    },
    ptagstyling: {
        textAlign: "left",
        fontWeight: 'bold',
        marginTop: "2em",
        color: "rgba(0,0,0,0.6)",
        fontSize: "13px"
    }
}));

export default function Helpform() {
    const classes = useStyles();
    return (
        <Container className={classes.gapBetweenComponents} fluid style={{ backgroundColor: "#3D80E4" }}>
            <Row>
                <Col className={classes.fontSizeForHeading}>Need Help?</Col>
            </Row>
            <Row>
                <Col className={classes.fontSizeForDetail}>Enthusiastically morph unique web-readiness via impactful platforms.</Col>
            </Row><br />
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <form className={classes.gapBetweenComponents} style={{
                        height: 800, backgroundColor: 'white',
                        lineHeight: '1.5', borderRadius: '10px', boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175)", padding: "3rem"
                    }}>
                        <p className={classes.ptagstyling}>NAME:</p>
                        <input className={classes.inputStyling} type='text' placeholder='THEDZONE' />
                        <p className={classes.ptagstyling}>EMAIL:</p>
                        <input className={classes.inputStyling} type="text" placeholder='thedzonedev@gmail.com' />
                        <p className={classes.ptagstyling}>PHONE:</p>
                        <input className={classes.inputStyling} type="number" />
                        <p className={classes.ptagstyling}>MESSAGE:</p>
                        <input id="move" className={classes.inputStyling} type="text" style={{ height: "10em", marginBottom: "2em" }}
                            placeholder="Please let us know how we can help you..." />
                        <button className="btn btn-primary btn-block" style={{ height: "3em" }}>Contact Us</button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
