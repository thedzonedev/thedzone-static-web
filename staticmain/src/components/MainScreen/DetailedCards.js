import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fade, makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    fontSizeForHeading: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    fontSizeForDetail: {
        fontSize: '1.2em',
        color: 'rgba(0,0,0,0.5)'
    },
    gapBetweenComponents: {
        marginBottom: '10em'
    }
}));


export default function DetailedCards() {
    const classes = useStyles();
    return (
        <Container fluid className={classes.gapBetweenComponents}>
            <Row>
                <Col md={{ span: 4, offset: 2 }} style={{ textAlign: "left" }}>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt}
                        style={{
                            color: "#3D80E4",
                            fontSize: "40px"
                        }} /></p>
                    <p className={classes.fontSizeForHeading}>Anywhere & Anytime</p>
                    <p className={classes.fontSizeForDetail}>Appropriately reconceptualize timely convergence through resource maximizing collaboration and idea-sharing. Globally coordinate cross-platform products via interoperable models.</p>
                </Col>
                <Col md={{ span: 4, offset: 1 }} style={{ textAlign: "left" }}>
                    <p><FontAwesomeIcon icon={faCreditCard}
                        style={{
                            color: "#ef5350",
                            fontSize: "40px"
                        }} /></p>
                    <p className={classes.fontSizeForHeading}>International Transactions</p>
                    <p className={classes.fontSizeForDetail}>Rapidiously actualize wireless benefits before resource-leveling quality vectors. Dramatically innovate progressive convergence without tactical schemas. Competently unleash distributed users whereas.</p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={{ span: 4, offset: 2 }} style={{ textAlign: "left" }}>
                    <p><FontAwesomeIcon icon={faShieldAlt}
                        style={{
                            color: "yellow",
                            fontSize: "40px"
                        }} /></p>
                    <p className={classes.fontSizeForHeading}>100% Secured & Trustable</p>
                    <p className={classes.fontSizeForDetail}>Appropriately redefine market positioning leadership skills whereas client-based "outside the box" thinking. Monotonectally engage next-generation leadership skills without one-to-one testing procedures.</p>
                </Col>
                <Col md={{ span: 4, offset: 1 }} style={{ textAlign: "left" }}>
                    <p><FontAwesomeIcon icon={faAddressBook}
                        style={{
                            color: "#90caf9",
                            fontSize: "40px"
                        }} /></p>
                    <p className={classes.fontSizeForHeading}>Detailed Documentation</p>
                    <p className={classes.fontSizeForDetail}>Compellingly evisculate impactful e-services for extensible resources. Interactively grow timely e-commerce rather than optimal expertise. Uniquely optimize impactful experiences rather than cooperative.</p>
                </Col>
            </Row>
        </Container>
    )
}
