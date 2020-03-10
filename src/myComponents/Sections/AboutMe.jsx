import React from "react";

import "myComponents/Sections/AboutMe.scss";

class AboutMe extends React.Component {
  handleScrollToDiv = (id) => {
    const offset = document.getElementById("profile-section").clientHeight - 50;
    const sectionPosition = document.getElementById(id).offsetTop;
    window.scrollTo(0, sectionPosition + offset)
  }
  render() {
    const { handleAos } = this.props;
    return (
      <div id="aboutMe-section">
        <div className="row no-gutters aboutMe-container">
          <div {...handleAos("fade-up", 0, 500, -250)} className="col-12 aboutMe__heading">
            <h1>ABOUT ME</h1>
          </div>
          <div {...handleAos("flip-right", 0, 500, 0)} className="col-12 col-md-3 col-lg-4 ">
            <div className="aboutMe__profImg">
              <img
                src={this.props.images.sections.aboutMe.aboutMeImg}
                alt=""
                ref="profImg-ref"
                className="profImg"
              />
            </div>
          </div>
          <div {...handleAos("zoom-in", 0, 500, 0)} className="col-12 col-md-9 col-lg-8 aboutMe__details">
            <h4 className="col-12">Hi! I'm Ravi,</h4>
            <p className="col-12">
              <span> Web Designer / Developer </span> focused on crafting
              great web experiences.
              </p>
            <p className="col-12">
              I've been in the field of web development for 2+ years and I
              love what I do. I take complex problems and turn them into
              simple and beautiful interface designs. I strive to write
              efficient and elegant code, whether be it HTML, CSS or
              JavaScript. I want to make things that make a difference!
              </p>
            <p className="col-12">Feel free to take a look at my most recent projects on my <span className="projects-anchor"
              onClick={() => this.handleScrollToDiv("projects-section")}>Projects page.</span></p>
            <div {...handleAos("flip-right", 0, 500, -200)} className="col-12 aboutMe__cv">
              <a href={"https://drive.google.com/open?id=1WCkPHzQ7FD-Wvekf1SPa5VVWXL-pXLmc"} target="_blank" rel="noopener noreferrer">
                Get My CV
              </a>
            </div>
            <div {...handleAos("fade-up", 0, 500, -200)} className="col-12 aboutMe__socialMediaLinks">
              <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/ravibp95"><i className="fab fa-facebook"></i></a>
              <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/ravibp"><i className="fab fa-linkedin"></i></a>
              <a target="_blank" rel='noopener noreferrer' href="https://github.com/ravibp"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
