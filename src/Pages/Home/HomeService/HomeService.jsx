import React from 'react';
import { Button } from 'react-bootstrap';
import Roll from "react-reveal/Roll";
import { useNavigate } from 'react-router-dom';
const HomeService = ({ service }) => {
  const { img, name, description, section, price, id } = service;
  const navigate = useNavigate()
  const navigateToServiceDetail = id => {
    navigate(`/service/${id}`)
    
  }
  return (
    <Roll left>
      <div className=" col-sm-12 col-md-6 col-lg-4">
        <div className="card" style={{ width: "100%" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>Class: {section}</p>
            <p className="text-bold">Price: $ {price}</p>
            <p className="card-text">{description}</p>
            <Button onClick={() => navigateToServiceDetail(id)}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Roll>
  );
};

export default HomeService;