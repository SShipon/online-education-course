import React from 'react';
import { useService } from '../../../Hooks/useService.jsx';
import HomeService from '../HomeService/HomeService.jsx';

const Service = () => {
    const [services] = useService()
    return (
      <div className="my-5 container">
        <h1 className="text-primary text-center my-5">
         My Education Service
        </h1>
        <div className="g-5 row">
          {services.slice(0, 3).map((service) => (
            <HomeService key={service.id} service={service}></HomeService>
          ))}
        </div>
      </div>
    );
};

export default Service;