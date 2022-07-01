import React from "react";
import resume from '../resume.pdf';



function About() {
  return (
    <section className="about bg-white text-black py-5" id="about">
      <div className="container">
        <div className="row py-5 text-center text-md-start">
          <div className="col-12 col-md-3">
            <h2 className="pb-5 p-md-0">About Me</h2>
          </div>
          <div className="col-12 col-md-9 bio ">
            <p className="lead fs-3">
              I’m a developer with experience in building websites for small and medium-sized businesses. Whether you’re
              trying to win work, list your services or even create a whole online store, I can help!
              I’m experienced in HTML5 and CSS 3, JavaScript, jQuery, WordPress and React framework.
              I’ll fully project manage your brief from start to finish
              Regular communication is really important to me, so let’s keep in touch!
            </p>
            <a className="btn btn-dark p-3 mt-4" href={resume} download="resume.pdf">Download Reasme</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;