import React, { useEffect, useState } from "react";
import StudentReview from "../StudentReview/StudentReview.jsx";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-primary text-center my-5">Student Review</h2>
      <div className="g-5 row my-5">
        {reviews.map((review) => (
          <StudentReview key={review.id} review={review}></StudentReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
