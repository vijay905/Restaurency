import React from 'react'

import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap';


const SignUp = () => {
  return (
    <>

      <Container className="justify-content-md-center mt-3" style={{ width: '700px' }}>
        <Row className="mb-3"><Card.Title style={{ fontSize: '30px' }}>Sign Up</Card.Title></Row>
        <Row>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
              <Col>
                <Form.Control type="text" placeholder="Name" />
              </Col>
            </Form.Group>
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

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalcPassword">
              <Col>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Col>
            </Form.Group>



            <Form.Group as={Row} className="mb-3">
              <Col>
                <Button className="btn custom-btn" type="submit">Sign Up</Button>
              </Col>
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </>
  )
}


export default SignUp;
