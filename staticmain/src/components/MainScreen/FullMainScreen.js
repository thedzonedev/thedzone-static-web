import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paddingForTitle: {
        padding: theme.spacing(1)
    },
    fontSizeForDesc: {
        fontSize: '1.2em',
        padding: theme.spacing(0, 4),
        color: 'rgba(0,0,0,0.8)'
    }
}));

export default function FullMainScreen() {
    const classes = useStyles()
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h6 style={{ fontWeight: "bold", color: "grey" }}>WHY YOU CHOOSE US?</h6>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className={classes.paddingForTitle}>
                    <p style={{ fontSize: "3em", fontWeight: "bold" }}>Powerful & Best Features for Canvas App</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className={classes.fontSizeForDesc} >
                    Dynamically underwhelm end-to-end experiences for premier methodologies. Objectively benchmark front-end bandwidth vis-a-vis flexible e-services. Globally drive business convergence without backward-compatible markets.
                </Col>
            </Row>
        </Container>
    );
}
