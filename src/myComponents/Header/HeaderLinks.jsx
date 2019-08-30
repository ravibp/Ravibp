import Scrollspy from "react-scrollspy";
import { isMobileOnly } from "react-device-detect";
import React, { Component } from "react";


class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  render() {
    if (isMobileOnly) {
    return(
      <div>aaa</div>
    )
    } else {
      return (
        <div className="headerLinks">
          <div className="row">
            <div className="col-6 headerLinks__profile-name">
              <Scrollspy items={["landingPage-section"]}>
                <li>
                  <a href="#landingPage-section">Ravi BP</a>
                </li>
              </Scrollspy>
            </div>

            <div className="col-6 headerLinks__rightLinks">
              <Scrollspy
                items={[
                  "aboutMe-section",
                  "skills-section",
                  "projects-section",
                  "hobbies-section"
                ]}
                currentClassName="is-current"
                offset={-10}
              >
                <li>
                  <a href="#aboutMe-section">About</a>
                </li>
                <li>
                  <a href="#skills-section">Skills</a>
                </li>
                <li>
                  <a href="#projects-section">Projects</a>
                </li>
                <li>
                  <a href="#hobbies-section">Gallery</a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default HeaderLinks;
