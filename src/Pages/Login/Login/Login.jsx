import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  return (
    <div className="container">
      <Container>
        <Row className="d-flex align-items-center my-5 ">
          <Col md={6} xs={12}>
            
          </Col>
          <Col md={6} xs={12} className="">
            <div className="mx-auto w-75">
              <h1 className="text-primary mt-5">Please Login</h1>
              <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                   
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <p>
                New to learner{" "}
                <Link
                  to="/register"
                  className="text-danger pe-auto text-decoration-none"
                >
                  Please Register
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
