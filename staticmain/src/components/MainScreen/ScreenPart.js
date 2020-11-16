import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fontSizeForHeading: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'white'
    },
    fontSizeForDetail: {
        fontSize: '0.9em',
        textAlign: 'left',
        color: 'white',
        lineHeight: '1.8'
    },
    gapBetweenComponents: {
        marginBottom: '10em'
    }

}));

export default function ScreenPart() {
    const classes = useStyles();
    return (
        <Container fluid className={classes.gapBetweenComponents}>
            <Row style={{ height: '49em' }}>
                <Col md={{ span: 6 }} style={{ height: '100%', backgroundColor: '#3D80E4', display: "table" }}>
                    <div className="align-middle" style={{ display: "table-cell" }}>
                        <Row>
                            <Col md={{ span: 9, offset: 2 }} >
                                <p className={classes.fontSizeForHeading}>Intrinsicly synergistic benefits.</p>
                                <p className={classes.fontSizeForDetail}>Enthusiastically morph unique web-readiness via impactful platforms. Intrinsicly matrix premium expertise for diverse expertise. Intrinsicly drive collaborative bandwidth for accurate testing.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 9, offset: 2 }} >
                                <p className={classes.fontSizeForHeading}>Appropriately target customers.</p>
                                <p className={classes.fontSizeForDetail}>Energistically incentivize front-end web services via enabled collaboration and idea-sharing. Conveniently whiteboard effective niche markets before flexible ROI.</p>
                                <p className={classes.fontSizeForDetail}>Phosfluorescently build turnkey convergence without goal-oriented systems.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 9, offset: 2 }} >
                                <p className={classes.fontSizeForHeading}>Completely exploit focused.</p>
                                <p className={classes.fontSizeForDetail}>Continually enable leveraged users after functional web-readiness.</p>
                                <p className={classes.fontSizeForDetail}>Interactively conceptualize accurate resources whereas distinctive e-markets.</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={{ span: 6 }} style={{ height: '100%', padding: 0, overflowY: 'hidden' }} >
                    <img style={{ width: '100%' }} src="./section.jpg" />
                </Col>
            </Row>
        </Container>
    )
}
