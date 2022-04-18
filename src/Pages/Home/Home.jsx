import React from 'react';
import Banner from './Banner/Banner.jsx';
import Experience from './Experience/Experience.jsx';
import Review from './Review/Review.jsx';
import Service from './Service/Service.jsx';

const Home = () => {
    return (
      <div>
        <Banner />
        <Service />
        <Experience />
        <Review />
      </div>
    );
};

export default Home;