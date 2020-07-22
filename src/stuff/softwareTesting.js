import React from "react";
import "./softwareTesting.css";
import SideBar from './sidebar'


function SoftwareTesting() {
  function Content() {
    return (
      <div className="container background">
        <div>
          <div className="inner">
            <h1>Software testing</h1>
          </div>
          <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="500">
            I started off the internship by developing a full testing suite for
            the Nalagenetics Webportal and API Servers.
            <br></br>I used Jest as the testing framework for both the
            integration tests and the unit tests, and I used Cypress for writing
            end to end tests.
          </p>

          <img
            src="mMtKIMax.jpg"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-offset="500"
          ></img>
          <img
            src="Unknown.png"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-offset="450"
          ></img>
          <p data-aos="fade-up" data-aos-delay="700" data-aos-offset="500"></p>
        </div>
      </div>
    );
  }

  return (
      <div className='background'>
    <SideBar/>
    <Content/>
    </div>
  );
}

export default SoftwareTesting;
