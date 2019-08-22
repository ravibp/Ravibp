import React from "react";

import "./Projects.scss";
import ScrollAnimation from "react-animate-on-scroll";

class Projects extends React.Component {
  render() {
    return (
      <div id="projects-section">
        <div className="row projects-container">
        <div className="col-12 projects-heading">
            <ScrollAnimation
              animateOnce="true"
              offset="0"
              delay="1"
              animateIn="tada"
              initiallyVisible={true}
            >
              <h1>
                <div>PROJECTS</div>
              </h1>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
