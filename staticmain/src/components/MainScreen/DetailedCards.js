import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fontSizeForHeading: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    fontSizeForDetail: {
        fontSize: '1.2em',
        color: 'rgba(0,0,0,0.5)'
    }
}));


export default function DetailedCards() {
    const classes = useStyles();
    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 4, offset: 2 }} style={{ textAlign: "left" }}>
                    <p className={classes.fontSizeForHeading}>Anywhere & Anytime</p>
                    <p className={classes.fontSizeForDetail}>Appropriately reconceptualize timely convergence through resource maximizing collaboration and idea-sharing. Globally coordinate cross-platform products via interoperable models.</p>
                </Col>
                <Col md={{ span: 4, offset: 1 }} style={{ textAlign: "left" }}>
                    <p className={classes.fontSizeForHeading}>International Transactions</p>
                    <p className={classes.fontSizeForDetail}>Rapidiously actualize wireless benefits before resource-leveling quality vectors. Dramatically innovate progressive convergence without tactical schemas. Competently unleash distributed users whereas.</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 2 }} style={{ textAlign: "left" }}>
                    <p className={classes.fontSizeForHeading}>100% Secured & Trustable</p>
                    <p className={classes.fontSizeForDetail}>Appropriately redefine market positioning leadership skills whereas client-based "outside the box" thinking. Monotonectally engage next-generation leadership skills without one-to-one testing procedures.</p>
                </Col>
                <Col md={{ span: 4, offset: 1 }} style={{ textAlign: "left" }}>
                    <p className={classes.fontSizeForHeading}>Detailed Documentation</p>
                    <p className={classes.fontSizeForDetail}>Compellingly evisculate impactful e-services for extensible resources. Interactively grow timely e-commerce rather than optimal expertise. Uniquely optimize impactful experiences rather than cooperative.</p>
                </Col>
            </Row>
        </Container>
    )
}
