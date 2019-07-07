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
import "./Skills.scss"

import { ReactComponent as IconReact } from "assets/icons/IconReact.svg";
import { ReactComponent as IconAngular } from "assets/icons/IconAngular.svg";
import { ReactComponent as IconBoostrap } from "assets/icons/IconBootstrap.svg";
import { ReactComponent as IconPhotoshop } from "assets/icons/IconPhotoshop.svg";
import { ReactComponent as IconMySQL } from "assets/icons/IconMySQL.svg";
import { ReactComponent as IconNodeJS } from "assets/icons/IconNodeJS.svg";
import { ReactComponent as IconHTML } from "assets/icons/IconHTML.svg";
import { ReactComponent as IconCSS } from "assets/icons/IconCSS.svg";
import { ReactComponent as IconMongoDB } from "assets/icons/IconMongoDB.svg";
import { ReactComponent as IconGraphQL } from "assets/icons/IconGraphQL.svg";

class Skills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="skills-section" className={classes.section + " skills-container"}>
        <div className="row">
          <div className="col-12">
            <h2>Skills</h2>
          </div>
            <div className="col-12 skills-diagram">
              <div className="circle-wrapper">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="icons">
                <span>
                  <a href="" className="circle-1"><IconHTML/></a>
                  <a href="" className="circle-1"><IconCSS/></a>
                </span>
                <span>
                  <a href="" className="circle-2"><IconMongoDB/></a>
                  <a href="" className="circle-2"><IconMySQL/></a>
                  <a href="" className="circle-2"><IconNodeJS/></a>
                </span>
                <span>
                  <a href="" className="circle-3"><IconGraphQL/></a>
                  <a href="" className="circle-3"><IconPhotoshop/></a>
                  <a href="" className="circle-3"><IconBoostrap/></a>
                  <a href="" className="circle-3"><IconReact/></a>
                  <a href="" className="circle-3"><IconAngular/></a>
                </span>
              </div>
              </div>
             
            </div>
        </div>
      
      </div>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionStyle)(Skills);
