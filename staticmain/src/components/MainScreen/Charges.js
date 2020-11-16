import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core';
import './Style.css'
import FAQS from './FAQS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    fontSizeForTitle: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left'
    },
    fontSizeForDesc1: {
        fontSize: '1.2em',
        color: 'rgba(255,255,255,1)',
        textAlign: 'left'
    },
    fontSizeForDesc: {
        fontSize: '1.2em',
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'left'
    },
    padding5: {
        padding: '2.5px'
    },
    backgroundColorChange: {
        backgroundColor: '#3D80E4',
        marginBottom: '10em'
    }
}));
function handleScroll(state) {
    console.log(state)
    if (window.pageYOffset > 0) {
        console.log("here")
    } else {

    }
    return state;
}


export default function Charges(props) {
    const classes = useStyles();
    return (
        <div className={classes.backgroundColorChange} onScroll={() => handleScroll(classes.backgroundColorChange)}>
            <Container fluid style={{ height: '48em', display: "table" }}>
                <div className="align-middle" style={{ display: "table-cell", overflowX: 'hidden' }}>
                    <Row>
                        <Col md={{ span: 4, offset: 1 }} style={{ padding: 0 }}>
                            <p className={classes.fontSizeForTitle}>No Hidden Charges.</p>
                            <p className={classes.fontSizeForTitle}>Choose Your Best Plan.</p>
                            <br />
                            <p className={classes.fontSizeForDesc1}>
                                Credibly target highly effecient niche markets whereas end-to-end results.
                    </p>
                            <br />
                            <p className={classes.fontSizeForDesc}>During Free trail you won't be charge and you can freely use this app without <a href="#" style={{ color: 'white' }}>Terms and Conditions</a></p>
                        </Col>
                        <Col md={{ span: 3, offset: 1 }} style={{ padding: 0 }}>
                            <form style={{
                                backgroundColor: 'white',
                                padding: '2em',
                                borderRadius: "20px "
                            }}>
                                <table style={{ textAlign: 'left' }}>
                                    <tbody>
                                        <tr style={{
                                            fontWeight: 'bold',
                                            fontSize: '14px',
                                        }}>
                                            <td>STARTUP</td>
                                        </tr>
                                        <tr style={{
                                            fontWeight: 'bold',
                                            fontSize: '3em'
                                        }}>
                                            <td>Free</td>
                                        </tr><br />
                                        <tr style={{
                                            color: 'rgba(0,0,0,0.5)',
                                            fontSize: '0.9em'
                                        }}>
                                            <td>Phosfluorescently negotiate alternative human capital with fully tested leadership skills. Quickly enable.</td>
                                        </tr>
                                        <br /><br />
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />7 Days Free Trail</td>
                                        </tr>
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />App-In-Purchase</td>
                                        </tr>
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />100% Safe & Secure</td>
                                        </tr>
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />Liecenced Company</td>
                                        </tr>
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />No Hidden Charges</td>
                                        </tr><br />
                                        <tr style={{ textAlign: 'center' }}>
                                            <td><button className="btn btn-primary btn-block" style={{ height: "3em" }} >DOWNLOAD FREE</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </Col>
                        <Col md={{ span: 3, offset: 0 }}>
                            <form className="backgroundclass" style={{
                                borderRadius: "20px",
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}>
                                <table style={{ textAlign: 'left' }}>
                                    <tbody>
                                        <tr style={{
                                            fontWeight: 'bold',
                                            color: 'rgba(255, 255, 255, 0.3)',
                                            fontSize: '14px'
                                        }}>
                                            <td>PRO</td>
                                        </tr>
                                        <tr style={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            fontSize: '3em'
                                        }}>
                                            <td>$29</td>
                                        </tr><br /><br />
                                        <tr style={{
                                            color: 'rgba(0,0,0,0.5)',
                                            fontSize: '0.9em'
                                        }}>
                                            <td>Holisticly disintermediate viral results rather than next-generation action items vertical metrics rather than parallel growth strategies.</td>
                                        </tr>
                                        <br /><br />
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />One Time Purchase</td>
                                        </tr>
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />All Bundle Included</td>
                                        </tr>
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />100% Safe & Secure</td>
                                        </tr>
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />Liecenced Company</td>
                                        </tr>
                                        <tr style={{
                                            color: 'grey',
                                            fontSize: '1em'
                                        }}>
                                            <td className={classes.padding5}><FontAwesomeIcon className="text-primary" icon={faCheckCircle}
                                                style={{
                                                    marginRight: '5px'
                                                }} />No Hidden Charges</td>
                                        </tr><br />
                                        <tr style={{ textAlign: 'center' }}>
                                            <td><button className="btn btn-primary btn-block" style={{ height: "3em" }} >PURCHASE PRO</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
            <FAQS className="align-middle" style={{ display: "table-cell", overflowX: 'hidden' }} /></div>
    )
}
