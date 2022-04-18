import React from 'react';
import img from "../../assets/img/86644043 (1).jpg";
import Fade from "react-reveal/Fade";
const About = () => {
    return (
      <div className="container my-5">
        <Fade left>
          <div className="row shadow-lg p-3 mb-5 bg-body rounded justify-content-center align-items-center">
            <div className="g-5 col-sm-12 col-md-6 ">
              <img style={{ width: "500", height: "400px", borderRadius:'5px' }} src={img} alt="" />
            </div>
            <div className="g-5 col-sm-12 col-md-6 ">
              <h3 className="text-center text-primary">About Me</h3>
              <div className="ms-5">
                <p>Name: Shipon</p>
                <p>Institute: shah sharif govt.collage</p>
                <p>Home Town : Cumilla,Bangladesh</p>
              </div>
              <div className="ms-5">
                <h3>My Target flan</h3>
                <p>
                  Assalamulaikum Thanks for giving me this golden opportunity to
                  introduce myself before this panel. I’m a front-end web
                  developer working in the web development sector for the last
                  6month and I still trying to improve my skills I always try to
                  learn as many things as possible, And My Future Goal is to
                  Become a Full Stack Web Developer and inner future I want to
                  work with Ai And I'm Interested in App Development But my next
                  6month Goals is become Front-End Web Developer And Explore
                  Little Bit Back-End
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
};

export default About;