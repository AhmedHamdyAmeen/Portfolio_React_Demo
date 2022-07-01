import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h3>GET IN TOUCH</h3>
            <div className="mail mb-3">
              <FontAwesomeIcon className="text-warning" icon={faEnvelope} />
              <a
                className="text-white ps-2"
                href="mailto:AhmedHamdy@Azhar.edu.eg"
              >
                AhmedHamdy@Azhar.edu.eg
              </a>
            </div>
            <div className="phone">
              <FontAwesomeIcon className="text-warning" icon={faSquarePhone} />
              <a className="text-white ps-2" href="tel:+717-555-1234">
                +717-555-1234
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <a
              className="btn btn-lg btn-outline-warning ts-uppercase my-5 p-3"
              href="mailto:AhmedHamdy@Azhar.edu.eg"
            >
              Contact Me
            </a>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="social my-3">
              <FontAwesomeIcon className="text-warning" icon={faLinkedin} />
              <FontAwesomeIcon
                className="text-warning mx-3"
                icon={faFacebook}
              />
              <FontAwesomeIcon className="text-warning" icon={faTwitter} />
            </div>
            copyright &copy; 2022.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
