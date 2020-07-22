import React from "react";
import SideBar from "./sidebar";
import "./webScrape.css";

function WebScrape() {
  function Content() {
    return (
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="300"
      >
        <div>
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-offset="200">
            My reflections on this internship
          </h1>
          <div>
            <div className="text">
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-offset="300"
              >
                Nalagenetics is a mordern Bio-Technological company that
                provides genetic tests to patients through physicians,
                determining the best course of medication for them through
                Pharmacogenomics. As the company strives to improve their
                Bio-Informatics algorithms and its outreach to more customers,
                the software engineers in the company are here to streamline and
                improve this experience to both its customers and the company.
              </div>
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-offset="300"
              >
                When I first entered the company, I had minimal coding and
                development experience. I was tasked to write testcases for the
                API Server code to increase the testing coverage of the
                codebase. It allowed me to be exposed to the codebase at a
                comfortable pace. It was a good place to start learning about
                the fundementals of software engineering and how software is
                used for the business.
              </div>
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-offset="300"
              >
                I moved on to help the Business Development team with web
                scraping for physicians's informations, and writing testcases
                for the Frontend webportal. This exposed me to using
                technologies such as Selenium for scraping, Jest and Cypress for
                Frontend testing.
              </div>
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-offset="300"
              >
                For my final project I embarked on creating the Medication
                Management feature for the patient portal. I got to use the
                Angular framework to develop this feature, and this had me
                needing to learn various features of frontend development like
                state and lifecycle hooks.
              </div>
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-offset="300"
              >
                Although this pandemic has forced everyone to work from home,
                this experience of interning at Nalagenetics did not fall short.
                From the upper management sending welfare items, and my manager
                keeping up to date with me and the team, I was glad to be part
                of this close knit family. I had a fruitful time learning at a
                fast pace to meet deadlines, and seeing the fruits of my labour
                being deployed.
              </div>
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-offset="300"
              >
                Scroll further to see the technologies I have employed in the internship.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="background">
      
      <Content />
    </div>
  );
}

export default WebScrape;
