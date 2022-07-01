import React from "react";

function Header() {
  return (
    <header className="header position-fixed w-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-3">
        <a className="navbar-brand fw-bolder me-5 fst-italic fs-3" href="#home">
          Hamdy
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-link active fs-4"
              aria-current="page"
              href="#head"
            >
              Home
            </a>
            <a className="nav-link fs-4" href="#about">
              About Me
            </a>
            <a className="nav-link fs-4" href="#skills">
              Skills
            </a>
            <a className="nav-link fs-4" href="#portfolio">
              Portfolio
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
