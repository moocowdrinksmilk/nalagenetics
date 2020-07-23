import React from "react";

function BugFix() {
  return (
    <div className="background">
      <div className="container">
        <h1
          id="bugfix"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="300"
        >
          Bug Fixing on Angular and Node.js
        </h1>
        <p>
          Finally, what do you call a software engineer that doesn't debug code?
          <br></br>
          Nothing, because there isn't one
        </p>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="300">
          Debugging of the code gave me an insight into the difference between
          'perfect code' they teach in tutorials, and code in the real world and
          industry. When deadlines have to be met, the product team does not
          care how efficient or clean the code is. Features that need to be
          developed, need to be developed within the given requirements and
          deadline.
        </p>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="300">
          By debugging on the Node.js codebase, I was able to understand how
          Express.js is used as a framework to provide middlewares to enhance
          the capabilities of the Node.js server.
        </p>
      </div>
    </div>
  );
}

export default BugFix;
