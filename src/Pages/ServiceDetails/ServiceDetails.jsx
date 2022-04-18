import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <>
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <img
              style={{ width: "450px", height: "400px" }}
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </Col>
          <br></br>
          <Col md={6} xs={12}>
            <form className="row g-3 ">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  First Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Last Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Second Name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Your Phone"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Present address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="present address"
                  required
                />
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label">
                  permanent address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="permanent address"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="City"
                  required
                />
              </div>
              <div className="col-md-4">
                <label for="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-2">
                <label for="inputZip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  required
                />
              </div>
              <div className="col-12"></div>
              <Button>Submit</Button>
            </form>
          </Col>
        </Row>
      </Container>
      <Link to="/home">
        <Button className="my-5 mx-auto">Proceed Checkout</Button>
      </Link>
    </>
  );
};

export default ServiceDetails;
