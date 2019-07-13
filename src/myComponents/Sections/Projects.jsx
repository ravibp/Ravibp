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
import "./Projects.scss";

class Projects extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="projects-section">
        <div className="div-offset"/>
        <div className="row projects-container">

        </div>
        <h1>Projects</h1>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionStyle)(Projects);
