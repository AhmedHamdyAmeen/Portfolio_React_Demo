import React from "react";
import Progress from "./Progress";

function Skills() {
  return (
    <section className="skills py-5" id="skills">
      <div className="container">
        <div className="head text-center">
          <h2 className="fs-1 pb-4">Skills</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit deleniti excepturi eveniet
            nesciunt dolorem assumenda eligendi, vero esse. Et.
          </p>
        </div>
        <div className="skillsContent py-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 focus text-center">
              <h3 className="fw-bolder fs-1 py-4">My Focus</h3>
              <hr className="w-50 m-auto text-warning" />
              <ul>
                <li className="my-3 fw-bold">UI/UX Design</li>
                <li className="my-3 fw-bold">Responsive Design</li>
                <li className="my-3 fw-bold">React & Angular</li>
                <li className="my-3 fw-bold">Node & Express & MongoDB</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 skillScore my-5">
              <Progress data={{ title: "HTML", score: "95%" }} />
              <Progress data={{ title: "CSS", score: "90%" }} />
              <Progress data={{ title: "JS", score: "95%" }} />
              <Progress data={{ title: "BS", score: "95%" }} />
              <Progress data={{ title: "Unit Teas", score: "90%" }} />
              <Progress data={{ title: "React", score: "70%" }} />
              <Progress data={{ title: "Angular", score: "30%" }} />
              <Progress data={{ title: "Nodejs", score: "75%" }} />
              <Progress data={{ title: "MongoDB", score: "80%" }} />
            </div>

          </div>
        </div>
      </div>
    </section >
  )
};

export default Skills;