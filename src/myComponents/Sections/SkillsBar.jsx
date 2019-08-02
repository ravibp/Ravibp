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
import AnimatedNumber from "animated-number-react";
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
import {isMobile, isMobileOnly, isTablet} from 'react-device-detect';

const skillsJson = [
  {
    skillName: "HTML5",
    skillRating: "90",
    skillId: "skill-html",
    skillTitleColor: "darkred",
    skillBarColor: "#03A9F4",
  },
  {
    skillName: "CSS3",
    skillRating: "90",
    skillId: "skill-css",
    skillTitleColor: "darkblue",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "JS",
    skillRating: "80",
    skillId: "skill-js",
    skillTitleColor: "darkgreen",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "ReactJs/ Redux",
    skillRating: "80",
    skillId: "skill-react",
    skillTitleColor: "darkyellow",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "Angular 4",
    skillRating: "60",
    skillId: "skill-angular",
    skillTitleColor: "blue",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "Bootstrap 4",
    skillRating: "80",
    skillId: "skill-bootstrap",
    skillTitleColor: "darkred",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "NodeJs",
    skillRating: "60",
    skillId: "skill-nodejs",
    skillTitleColor: "darkblue",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "MySQL/ MongoDB",
    skillRating: "70",
    skillId: "skill-database",
    skillTitleColor: "darkyellow",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "Apollo GraphQL",
    skillRating: "50",
    skillId: "skill-graphql",
    skillTitleColor: "darkgreen",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "Photoshop CC",
    skillRating: "60",
    skillId: "skill-photoshop",
    skillTitleColor: "darkred",
    skillBarColor: "#03A9F4"
  }
];
let yourArray = skillsJson;
let halfWayThough = Math.floor(yourArray.length / 2)

let skillsJson1 = yourArray.slice(0, halfWayThough);
let skillsJson2 = yourArray.slice(halfWayThough, yourArray.length);
// let numberFlag = false;
class SkillsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberFlag: false
    }
  }
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  formatValue = value => value.toFixed(0);
  componentDidMount() {
    window.addEventListener("scroll", this.headerColorChange);
    skillsJson.map(skill => {
        document.getElementById(skill.skillId + "-bar").style.width = "0";
        document.getElementById(skill.skillId + "-bar").style.background = skill.skillBarColor;
        document.getElementById(skill.skillId + "-bar").style.transition = "width 2.5s";
    });

  }
  headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 1200 && windowsScrollTop < 2000) {
      this.setState({
        numberFlag: true
      })
        skillsJson.map(skill => {
          document.getElementById(skill.skillId + "-bar").style.transitionDelay = "2s";
          document.getElementById(skill.skillId + "-bar").style.width = `${skill.skillRating}%`;
        });
    } else {
      this.setState({
        numberFlag: false
      })
        skillsJson.map(skill => {
          document.getElementById(skill.skillId + "-bar").style.transitionDelay = "0s";
          document.getElementById(skill.skillId + "-bar").style.width = "0%";
        });
    }
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerColorChange);
  }
  showNumber = (number,duration, delay) => {
    if(this.state.numberFlag) {
      return (
        <div>
            <AnimatedNumber
              value={number}
              formatValue={this.formatValue}
              duration ={duration}
              delay={delay}
            />
            <span> %</span>
          </div>
     
      )
    }
    else {
      return (
        <div className="">
            <AnimatedNumber
              value={number}
              formatValue={this.formatValue}
              duration ={duration}
              delay={delay}
            />
            <span> %</span>
          </div>
      )
    }

  }
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.numberFlag !== nextState.numberFlag) {
      console.log("aaaa", this.state.numberFlag, nextState.numberFlag)
      return true
    }
    return false
  }
  render() {
    const { classes } = this.props;
    // {console.log("skill bar render")}
    return (
      <div class="skillBar-container row no-gutters">
          {skillsJson.map(skill => (
          <div className="row col-12 no-gutters">
            <div class="skillBar-container__title col-3">{skill.skillName}</div>
            <div class="skillBar-container__progressBar col-7">
              <div id={`${skill.skillId}-bar`} class="skillBar-container__progress col-12"></div>
            </div>
            <div className="skillBar-container__progressValue col-2">
            {this.state.numberFlag && this.showNumber(skill.skillRating,2500 ,2000)}
            {!this.state.numberFlag && this.showNumber(0, 0, 0)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(sectionStyle)(SkillsBar);
