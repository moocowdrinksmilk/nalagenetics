import React from "react";

function FrontendDev() {
  return (
    <div className="background">
      <div className="container">
        <h1
          id="frontend-dev"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="500"
        >
          Frontend Development with Angular
        </h1>

        <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="500">
          I worked on creating the Medication Management feature on the patient
          portal, which entailed learning a new language Typescript. I had get
          up to speed with the object oriented framework of Angular. I had to
          learn how classes and methods work in conjunction with each other, and
          other intricasies like access modifiers, constructors and lifecycle
          hooks.
        </p>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="500">
          As for working with Angular, I was able to employ many of the features
          the framwork provides. I was introduced to structural directives
          '(ngif/ngfor)', in the HTML code which honestly excited me quite abit
          as it allowed you to put logic in HTML!
        </p>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="500">
          I got to work with reactive forms as well, where I worked with the
          ng-template tag, use validators to sync inputs from the user to the
          Typescript code at a given event change. This allowed me to solve an
          issue where I had to give a certain response to the user in real time
          based on the input.
        </p>
      </div>
    </div>
  );
}

export default FrontendDev;
