import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import sectionStyle from "assets/jss/material-kit-react/views/landingPageSections/sectionStyle.jsx";
import "./ResumeBuild.scss";
import * as ResumeData from "./ResumeBuildData.json";
console.log("ResumeData", ResumeData.default.data);

const resumeDataObj = ResumeData.default.data;
class ResumeBuild extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="resumeBuild-container">
        <div className="resumeBuild">
          <h1 className="resumeBuild__heading">{resumeDataObj.profileName}</h1>
          <h2 className="resumeBuild__title">
            {resumeDataObj.currentJobTitle}
          </h2>
          <div class="resumeBuild__introduction">
            <p>{resumeDataObj.introduction}</p>
          </div>
          <div className="resumeBuild__sections">
            <div className="left-sections">
              <div className="experience">
                <h3>
                  <span> </span>Experience
                </h3>
                {resumeDataObj.experience.projects.map(project => {
                  let projectDivision = (
                    <div className="experience__division">
                      <div className="experience__year">
                        <p>{project.dateFrom} to</p> 
                        <p>{project.dateTo}</p>
                      </div>
                      <div className="experience__project">
                        <h5 className="experience__project__jobTitle">
                          {project.jobTitle}
                        </h5>
                        <h6 className="experience__project__companyName">
                          {project.companyName}
                        </h6>
                        <p className="experience__project__technologyTitle">
                          {project.technologyTitle}
                        </p>
                        <p className="experience__project__projectDescription">
                          {project.projectDescription}
                        </p>
                        <p className="experience__project__responsibilities">
                          Responsibilities:
                        </p>
                        <ul className="experience__project__responsibilityList">
                          {project.projectResponsibilites.map(
                            responsibility => (
                              <li>{responsibility}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  );
                  return projectDivision;
                })}
              </div>

              <div className="education">
                <h3>
                  <span> </span>Education
                </h3>
                {resumeDataObj.education.map((educationObj) => {
                  let educationDivision = (
                    <div className="education__division">
                      <div className="education__year">
                        <p>{educationObj.dateFrom} to</p>
                        <p>{educationObj.dateTo}</p>
                      </div>
                      <div className="education__project">
                        <h5 className="education__project__jobTitle">
                          {educationObj.collegeName}
                        </h5>
                        <p className="education__project__companyName">
                          {educationObj.courseName}
                        </p>
                      </div>
                    </div>
                  );
                  return educationDivision;
                })}
              </div>

              <div className="hackathon">
                <h3>
                  <span> </span>Hackathon
                </h3>
                {resumeDataObj.hackathon.map((hakathonObj) => {
                  let hackathonDivision = (
                    <div className="hackathon__division">
                      <div className="hackathon__project">
                        <h5 className="hackathon__project__jobTitle">
                          {hakathonObj.title}
                        </h5>
                        <p className="hackathon__description">
                          {hakathonObj.description}
                        </p>
                      </div>
                    </div>
                  );
                  return hackathonDivision;
                })}
              </div>

              <div className="certificates">
                <h3>
                  <span> </span>Certificates
                </h3>
                {resumeDataObj.certificates.map((cerfiticateObj) => {
                  let certificatesDivision = (
                    <div className="certificates__division">
                      <div className="certificates__year">
                        <p>{cerfiticateObj.year}</p>
                      </div>
                      <div className="certificates__project">
                        <p className="certificates__title">
                          {cerfiticateObj.title}
                        </p>
                      </div>
                    </div>
                  );
                  return certificatesDivision;
                })}
              </div>
            </div>
            <div className="right-sections"></div>
          </div>
        </div>
      </div>
    );
  }
}

ResumeBuild.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionStyle)(ResumeBuild);
