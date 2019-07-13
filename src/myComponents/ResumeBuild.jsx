import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import sectionStyle from "assets/jss/material-kit-react/views/landingPageSections/sectionStyle.jsx";
import "./ResumeBuild.scss";
import * as ResumeData from "./ResumeBuildData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Logo } from "assets/img/resume/coding.svg";
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
              <div className="experience sectionsGlobal">
                <div className="icon icon-experience">
                  <Logo />
                  <h3 className="sectionHeadingGlobal">Experience</h3>
                </div>
                {resumeDataObj.experience.projects.map(project => {
                  let projectDivision = (
                    <div className="sectionsGlobal__divisionsGlobal">
                      <div className="experience__year yearGlobal">
                        <p>{project.dateFrom} to</p>
                        <p>{project.dateTo}</p>
                      </div>
                      <div className="experience__project divisionDetailsGlobal">
                        <h5 className="experience__project__jobTitle mainHeadingGlobal">
                          {project.jobTitle}
                        </h5>
                        <h6 className="experience__project__companyName">
                          {project.companyName}
                        </h6>
                        <p className="experience__project__technologyTitle subHeadingGlobal headingUnderlineGlobal">
                          {project.technologyTitle}
                        </p>
                        <p className="experience__project__projectDescription descriptionGlobal">
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

              <div className="education sectionsGlobal">
                <div className="icon icon-experience">
                  <Logo />
                  <h3 className="sectionHeadingGlobal">Education</h3>
                </div>
                {resumeDataObj.education.map(educationObj => {
                  let educationDivision = (
                    <div className="sectionsGlobal__divisionsGlobal">
                      <div className="education__year yearGlobal">
                        <p>{educationObj.dateFrom} to</p>
                        <p>{educationObj.dateTo}</p>
                      </div>
                      <div className="education__project divisionDetailsGlobal">
                        <h5 className="education__project__jobTitle mainHeadingGlobal">
                          {educationObj.collegeName}
                        </h5>
                        <p className="education__project__companyName descriptionGlobal">
                          {educationObj.courseName}
                        </p>
                      </div>
                    </div>
                  );
                  return educationDivision;
                })}
              </div>

              <div className="hackathon sectionsGlobal">
                <div className="icon icon-experience">
                  <Logo />
                  <h3 className="sectionHeadingGlobal">Hackathon Experience</h3>
                </div>
                {resumeDataObj.hackathon.map(hakathonObj => {
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

              <div className="certificates sectionsGlobal">
                <div className="icon icon-experience">
                  <Logo />
                  <h3 className="sectionHeadingGlobal">Certificates</h3>
                </div>
                {resumeDataObj.certificates.map(cerfiticateObj => {
                  let certificatesDiv = (
                    <div className="certificates__division sectionsGlobal__divisionsGlobal">
                      <div className="certificates__year yearGlobal">
                        <p>{cerfiticateObj.year}</p>
                      </div>
                      <div className="certificates__project divisionDetailsGlobal">
                        <p className="certificates__title divisionDetailsGlobal__descriptionGlobal">
                          {cerfiticateObj.title}
                        </p>
                      </div>
                    </div>
                  );
                  return certificatesDiv;
                })}
              </div>
            </div>
            <div className="right-sections">
              <div className="personalInfo sectionsGlobal">
                <div className="icon icon-experience">
                  <Logo />
                  <h3 className="sectionHeadingGlobal">Personal Info</h3>
                </div>
                {resumeDataObj.personalInformation.map(personalInfo => {
                  var personalInfoDiv = (
                    <div>
                      <p className="personalInfo__heading subHeadingGlobal">
                        {personalInfo.infoHeading}
                      </p>
                      <p className="personalInfo__description descriptionGlobal">
                        {personalInfo.infoDescription}
                      </p>
                    </div>
                  );
                  return personalInfoDiv;
                })}
              </div>

              <div className="skills sectionsGlobal">
                <div className="icon icon-experience">
                  <Logo />
                  <h3 className="sectionHeadingGlobal">Skills</h3>
                </div>
                {resumeDataObj.skills.map(skill => {
                  var skillsDiv = (
                    <div className="skills__division">
                      <div className="skills__heading descriptionGlobal">
                        {skill.skillName}
                      </div>
                      <div className="skills__rating">
                        <div className="skills__ratingBar">
                          <div
                            className="skills__ratingBarFill"
                            style={{ width: `${skill.rating * 10}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="skills__description descriptionGlobal">
                        {skill.skillDetails}
                      </div>
                    </div>
                  );
                  return skillsDiv;
                })}
              </div>

              <div className="languages sectionsGlobal">
                <div className="icon icon-experience">
                  <Logo />
                  <h3 className="sectionHeadingGlobal">Languages</h3>
                </div>
                {resumeDataObj.languages.map(language => {
                  var languagesDiv = (
                    <div>
                      <p className="languages descriptionGlobal">{language}</p>
                    </div>
                  );
                  return languagesDiv;
                })}
              </div>
            </div>
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
