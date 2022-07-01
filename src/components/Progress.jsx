import React from "react";

function Progress(props) {
  const { title, score } = props.data;
  return (
    <div className="skill row align-items-center mb-3">
      <div className=" col-2 title">{title}</div>
      <div className="col-10 progress ps-0">
        <div className="progress-bar" role="progressbar" style={{ width: score }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  )
}


export default Progress;