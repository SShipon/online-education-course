import React from 'react';
import'./StudentReview.css'

const StudentReview = ({review}) => {
    const { img, name, description, rating } = review;
    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card review" style={{ width: "100%" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="text-bold">Rating:{rating}</p>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default StudentReview;