import React from 'react';

function Cover() {
  return (
    <section className="cover d-flex align-items-center py-5">
      <div className='container'>
        <div className="infos">
          <h1 className="h1 text-warning fs-1 py-5">Ahmed Hamdy</h1>
          <p className="lead fs-3">
            Full Stack Web Developer & Software Engineer
          </p>
          <a className="btn btn-lg btn-outline-warning ts-uppercase my-5 p-3" href="mailto:AhmedHamdy@Azhar.edu.eg">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Cover;