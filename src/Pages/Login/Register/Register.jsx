import React, { useState } from 'react';
import './Register.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import RegisterAnimation from '../RegisterAnimation/RegisterAnimation.jsx';
import GoogleSign from '../GoogleSign/GoogleSign.jsx';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init.jsx';
import Loading from '../../Shared/Loading/Loading.jsx';

const Register = () => {
  //const[(agree, setAgree)] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate()
  const navigateLogin = () => {
      navigate('/login')
  }

   if (loading || updating) {
     return <Loading></Loading>;
   }

   if (user) {
     console.log("user", user);
   }

const handleRegister = event => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
   createUserWithEmailAndPassword(email,password)
};



    return (
      <div className="container">
        <Container>
          <Row className="d-flex align-items-center my-5 ">
            <Col md={6} xs={12}>
              <div className="mx-auto w-75">
                <h1 className="text-primary mt-5">Please Register</h1>
                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
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

                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </Form>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary pe-auto text-decoration-none"
                    onClick={navigateLogin}
                  >
                    Please Login
                  </Link>{" "}
                </p>
                <div>
                  <GoogleSign></GoogleSign>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12} className="">
              <RegisterAnimation></RegisterAnimation>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Register;