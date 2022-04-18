import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import './Banner.css'
import BannerHeader from '../BannerHeader/BannerHeader.jsx';
const Banner = () => {
    return (
      <>
        <Container>
          <Row className="d-flex align-items-center my-5 ">
            <Col md={6} xs={12}>
              <h1 className="text-content">
                <Typewriter
                  options={{
                    strings: [
                      "<strong>READY TO CREATE </strong>",
                      "& SELL YOUR ONLINE",
                      "COURSE OR COACHING?",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="banner-text">
                ToSafeDrive, located in the Paris area, provides a luxurious car
                service with chauffeur for each of your private and professional
                travels, in Paris and its area, but also in France and abroad as
                part of specific missions.
              </p>
              {/* <Link to="/about">
                <button className="button-style">More....</button>
              </Link> */}
              <Link to="/about">
                <button className="button-style-2">More....</button>
              </Link>
            </Col>
            <Col md={6} xs={12}>
              <BannerHeader></BannerHeader>
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default Banner;