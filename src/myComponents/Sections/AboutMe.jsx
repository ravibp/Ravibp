import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import sectionStyle from "assets/jss/material-kit-react/views/landingPageSections/sectionStyle.jsx";
import "./AboutMe.scss"

class AboutMe extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="aboutMe-section">
        <div className="div-offset"/>
        <div className="row aboutMe-container"></div>
        <h1>About Me</h1>
      
      </div>
    );
  }
}

AboutMe.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionStyle)(AboutMe);
