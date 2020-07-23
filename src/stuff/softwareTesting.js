import React from "react";
import "./softwareTesting.css";
import SideBar from "./sidebar";

function SoftwareTesting() {
  function Content() {
    return (
      <div  className="background">
        <div className='container'>
          <h1 id="software-testing" data-aos="fade-up" data-aos-delay="200" data-aos-offset="500">Software testing</h1>

          <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="500">
            I wrote a fullsuite of testcases which covers both the API server
            code and the Frontend webportal code. I wrote the unit and
            integrations tests using Jest as a framework. By building unit and
            integration tests. I learnt how to use assertions, spys and mocks to
            test the functions and classes of the code, ensuring that errors
            will be flagged out to the developer before deployment.
          </p>

          <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="500">
            I used Cypress for the end to end testcases. By learning how to
            write these testcases, I exposed myself to research on good testing
            methodology. Furthermore as a bonus, my knowledge of CSS selectors
            has broadened which will help with future web development projects
            of mine.
          </p>

          <img
            src="cypress.gif"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-offset="500"
          ></img>
          {/* <img
            src="Unknown.png"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-offset="450"
          ></img> */}
          <p data-aos="fade-up" data-aos-delay="700" data-aos-offset="500"></p>
        </div>
      </div>
    );
  }

  return (
    
      <Content />
  );
}

export default SoftwareTesting;
