import React from 'react'
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap';



const SignIn = () => {
    return (
        <>
            <Container className="justify-content-md-center mt-3" style={{ width: '700px' }}>
                <Row className="mb-3"><Card.Title style={{ fontSize: '30px' }}>Sign In</Card.Title></Row>

                <Row>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Col>
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Col>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col>
                                <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Button className="btn custom-btn" type="submit">Sign In</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </>
    )
}



export default SignIn;
