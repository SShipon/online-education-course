import React from 'react';
import { Button } from 'react-bootstrap';
import Flip from "react-reveal/Flip";
import { useNavigate } from 'react-router-dom';

const ServiceMain = ({service}) => {
  const {section,  img, name, description, price, id } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <Flip left>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card" style={{ width: "100%" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p> Class: {section}</p>
            <p className="text-bold">Price: ${price}</p>
            <p className="card-text">{description}</p>
            <Button onClick={() => navigateToServiceDetail(id)}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default ServiceMain;