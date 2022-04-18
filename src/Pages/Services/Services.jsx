import React from 'react';
import { useService } from '../../Hooks/useService.jsx';
import ServiceMain from '../ServiceMain/ServiceMain.jsx';
const Services = () => {
    const [services] = useService()
    return (
      <div className="my-5 container">
        <h1 className="text-primary text-center mt-5">My Education services</h1>
        <div className="g-5 row">
          {services.map((service) => (
            <ServiceMain key={service.id} service={service}></ServiceMain>
          ))}
        </div>
      </div>
    );
};

export default Services;