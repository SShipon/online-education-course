import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate,} from "react-router-dom"
import auth from "../../../firebase.init.jsx";
import LoginAnimation from "../LoginAnimation/LoginAnimation.jsx";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const  navigate = useNavigate()
  
  const handleEmailBlur = event => {
    setEmail(event.target.value)

  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }
  if (user) {
     navigate('/checkout')
  }

  const handleUserSignIn = event => {
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className="container">
      <Container>
        <Row className="d-flex align-items-center my-5 ">
          <Col md={6} xs={12}>
            <LoginAnimation></LoginAnimation>
          </Col>
          <Col md={6} xs={12} className="">
            <div className="mx-auto w-75">
              <h1 className="text-primary mt-5">Please Login</h1>
              <Form onSubmit={handleUserSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onBlur={handleEmailBlur}
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
                    onBlur={handlePasswordBlur}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                  loading && <p>Loading .....</p>
                }
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
