import React from "react";

function Card(props) {
  const { title, bg } = props.data;
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="card p-3 text-center" style={{ backgroundColor: bg, color: "#fff" }}>
        <div className="card-body d-flex justify-content-center flex-column">
          <h5 className="card-title fw-bold mb-3 fs-3">{title}</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, totam
          </p>
        </div>
      </div>
    </div>
  )
};

export default Card;