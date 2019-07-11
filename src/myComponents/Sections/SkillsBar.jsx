import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import sectionStyle from "assets/jss/material-kit-react/views/landingPageSections/sectionStyle.jsx";

import "./SkillsBar.scss";

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
import ReactTooltip from "react-tooltip";
import { width } from "@material-ui/system";

let globalFlag = false;
const skillsJson = [
  {
    skillName: "HTML5",
    skillRating: "90%",
    skillId: "skill-html",
    skillBarColor: "red",
    skillTitleColor: "black"
  },
  {
    skillName: "CSS3",
    skillRating: "90%",
    skillId: "skill-css",
    skillTitleColor: "black",
    skillBarColor: "blue"
  },
  {
    skillName: "JS",
    skillRating: "80%",
    skillId: "skill-js",
    skillTitleColor: "black",
    skillBarColor: "green"
  }
];
class SkillsBar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    skillsJson.map(skill => {
        document.getElementById(skill.skillId + "-bar").style.width = "0%";
		document.getElementById(skill.skillId).style.width = "0%";
        document.getElementById(skill.skillId).style.background = skill.skillTitleColor;
        document.getElementById(skill.skillId + "-bar").style.background = skill.skillBarColor;
        document.getElementById(skill.skillId).style.transition = "width 2s";
        document.getElementById(skill.skillId + "-bar").style.transition = "width 2s";
    });
  }
  componentDidUpdate() {
    console.log("did mount,", this.props);
    if (this.props.globalFlag) {
      skillsJson.map(skill => {
		document.getElementById(skill.skillId).style.width = "20%";
        document.getElementById(skill.skillId + "-bar").style.width = skill.skillRating;
      });
    } else {
      skillsJson.map(skill => {
		document.getElementById(skill.skillId).style.width = "0%";
        // document.getElementById(skill.skillId).style.transition = "width 2s";
        // document.getElementById(skill.skillId + "-bar").style.transition = "width 2s";
        document.getElementById(skill.skillId + "-bar").style.width = "0%";
      });
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div class="main">
        {skillsJson.map(skill => (
          <div class="progressBar">
            <div  id={skill.skillId} class="title">{skill.skillName}</div>
            <div id={`${skill.skillId}-bar`} class="progress"></div>
            <div className="progress_value">{skill.skillRating}</div>
          </div>
        ))}

        {/* <div class="progressBar">
          <div class="title cssColor">CSS3</div>
          <div id="skill-css" class="progress css"></div>
          <div class="progress_value">90%</div>
        </div>
        <div class="progressBar">
          <div class="title jsColor">JavaScript</div>
          <div id="skill-js" class="progress js"></div>
          <div class="progress_value">70%</div>
        </div>
        <div class="progressBar">
          <div class="title phpColor">React JS/ Redux</div>
          <div id="skill-react" class="progress php"></div>
          <div class="progress_value">80%</div>
        </div>
        <div class="progressBar">
          <div class="title ajaxColor">Angular 5</div>
          <div id="skill-angular" class="progress ajax"></div>
          <div class="progress_value">60%</div>
        </div>
        <div class="progressBar">
          <div class="title htmlColor">Node JS</div>
          <div id="skill-html" class="progress html"></div>
          <div class="progress_value">65%</div>
        </div> */}
      </div>
    );
  }
}

export default withStyles(sectionStyle)(SkillsBar);
