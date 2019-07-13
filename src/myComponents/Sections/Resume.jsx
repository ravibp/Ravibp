import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import sectionStyle from "assets/jss/material-kit-react/views/landingPageSections/sectionStyle.jsx";
import "./Resume.scss";
import resumeImage from "assets/img/resumeImage.jpg";

class Resume extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="resume-container">
        <h2 className ="resume-heading">My Resume</h2>
        <div className="resume-img">
            <img src={resumeImage} alt="ravi's resume" />
        </div>
      </div>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionStyle)(Resume);
