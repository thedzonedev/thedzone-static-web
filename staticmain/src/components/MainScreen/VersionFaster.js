import { Container } from '@material-ui/core'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    fontSizeForTitle: {
        fontSize: '2em',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    fontSizeForDesc: {
        fontSize: '1.2em',
        textAlign: 'left'
    },
    gapBetweenComponents: {
        marginBottom: '10em'
    }
}));
export default function VersionFaster() {
    const classes = useStyles()
    return (
        <Container fluid className={classes.gapBetweenComponents}  style={{ height: '90vh'  }}>
            <Row style={{ height: '100%' }}>
                <Col md={{span:6}} style={{textAlign:'left',padding:0}}>
                <img style={{
                    height: '90vh'
                }}src="./section2.jpg"/>
                </Col>
                <Col md={{span:6}}  style={{ height: '100%', display: 'table' }} >
                    <div className="align-middle" style={{ display: "table-cell" }}>
                    <p className={classes.fontSizeForTitle}>Version 6 is now 2x Faster.</p>
                    <p className={classes.fontSizeForDesc}>Enthusiastically morph unique web-readiness via impactful platforms. Intrinsicly matrix premium expertise for diverse expertise. Intrinsicly drive collaborative bandwidth for accurate testing.</p>
                    <p  className={classes.fontSizeForDesc}>Version 6.0
                        
                    </p>
                    <p>
                        <button className="btn btn-primary">
                            Learn More
                        </button>
                    </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
