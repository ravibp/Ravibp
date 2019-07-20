import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import SkillsBar from "myComponents/Sections/SkillsBar.jsx";
import sectionStyle from "assets/jss/material-kit-react/views/landingPageSections/sectionStyle.jsx";
import "./Skills.scss";

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
import { ReactComponent as Icon1 } from "assets/icons/Icon1.svg";
import { ReactComponent as Icon2 } from "assets/icons/Icon2.svg";
import { ReactComponent as Icon3 } from "assets/icons/Icon3.svg";
import ReactTooltip from "react-tooltip";
import resumeImage from "assets/img/profile-bg.jpg";
import bk_1080_compressed from "assets/video/bk_1080_compressed.mp4";
import bk_720_compressed from "assets/video/bk_720_compressed.mp4";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";
import ScrollAnimation from "react-animate-on-scroll";

let globalFlag = false;
class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillBGVideo: null
    };
    this.handleSkillDetails = this.handleSkillDetails.bind(this);
  }
  componentWillMount() {
    if (isMobile) {
      this.setState({
        skillBGVideo: bk_1080_compressed
      });
    } else {
      this.setState({
        skillBGVideo: bk_1080_compressed
      });
    }
  }
  handleSkillDetails1() {
    globalFlag = false;
    this.refs["circle-wrapper-ref"].classList.remove("circle-wrapper--clicked");
    this.refs["circle-wrapper-ref"].classList.add("circle-wrapper--unClicked");
    // this.refs["skills-diagram-ref"].classList.remove(
    //   "skills-diagram-col-6"
    // );
    // this.refs["skills-details-ref"].classList.remove(
    //   "skills-details-col-6"
    // );
    this.refs["skills-bar-ref"].classList.remove("skills-bar-col-6");
  }
  handleSkillDetails() {
    globalFlag = true;
    this.refs["circle-wrapper-ref"].classList.add("circle-wrapper--clicked");
    // this.refs["skills-diagram-ref"].classList.add("skills-diagram-col-6");
    // this.refs["skills-details-ref"].classList.add("skills-details-col-6");
    this.refs["skills-bar-ref"].classList.add("skills-bar-col-6");
  }
  headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    console.log("windowsScrollTop", windowsScrollTop);
    if (windowsScrollTop > 1200 && windowsScrollTop < 2000) {
      setTimeout(() => {
        this.handleSkillDetails();
      }, 1000);
    } else {
      setTimeout(() => {
        this.handleSkillDetails1();
      }, 1000);
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.headerColorChange);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerColorChange);
  }
  render() {
    const { classes } = this.props;
    return (
      <div id="skills-section" className={" "}>
        <div className="skills-bgImg">
          {/* <video className="" autoPlay muted loop>
            <source src={this.state.skillBGVideo} type="video/mp4" />
          </video> */}
        </div>

        <div className="row no-gutters skills-container">
          <div className="col-12 skills-heading">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h1 onClick={this.handleSkillDetails}>Skills</h1>
            </ScrollAnimation>
          </div>
          <div className="col-3 skills-category">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay="1"
            >
              <h3>What I can do</h3>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              duration="3"
              delay="2"
            >
              <ul>
                <li>
                  <Icon1 />
                  <p>UI/ UX Design</p>
                </li>
                <li>
                  <Icon2 />
                  <p>MEAN/ MERN Stack Development</p>
                </li>
                <li>
                  <Icon3 />
                  <p>Photo/ Video Editing</p>
                </li>
              </ul>
            </ScrollAnimation>
          </div>
          <div className="col-4 skills-diagram" ref="skills-diagram-ref">
            <ScrollAnimation
              animateIn="flipInY"
              animateOut="flipOutY"
              delay="1"
              duration="3"
            >
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                // delay=""
                duration="5"
              >
                <div className="circle-wrapper" ref="circle-wrapper-ref">
                  <div className="circle circle-1"></div>
                  <div className="circle circle-2"></div>
                  <div className="circle circle-3"></div>
                  <div className="icons">
                    <span>
                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="HTML5"
                        className="circle-1"
                      >
                        <IconHTML />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="CSS3"
                        className="circle-1"
                      >
                        <IconCSS />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />
                    </span>
                    <span>
                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="MongoDB"
                        className="circle-2"
                      >
                        <IconMongoDB />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="MySQL"
                        className="circle-2"
                      >
                        <IconMySQL />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="NodeJS"
                        className="circle-2"
                      >
                        <IconNodeJS />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />
                    </span>

                    <span>
                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="Apollo GraphQL"
                        className="circle-3"
                      >
                        <IconGraphQL />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="Photoshop"
                        className="circle-3"
                      >
                        <IconPhotoshop />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="Bootstrap 4"
                        className="circle-3"
                      >
                        <IconBoostrap />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="ReactJS / Redux"
                        className="circle-3"
                      >
                        <IconReact className="icon-react" />
                      </a>
                      <a
                        onClick={this.handleSkillDetails}
                        data-tip="Angular 5"
                        className="circle-3"
                      >
                        <IconAngular />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
            </ScrollAnimation>
          </div>

          <div className="col-5 skills-bar" ref="skills-bar-ref">
            <ScrollAnimation
              delay={4000}
              animateIn="tada"
              initiallyVisible={true}
            >
              <SkillsBar globalFlag={globalFlag} />
            </ScrollAnimation>
          </div>

          <div
            className="col-12 col-md-12 skills-details"
            ref="skills-details-ref"
          >
            <div className="skills-details__division">
              <span class="label label-default">JavaScript</span>
            </div>
            <div className="skills-details__division">
              <span class="label label-primary">ReactJs/ Redux</span>
            </div>

            <div className="skills-details__division">
              <span class="label label-info" background-color="yellow">
                Angular 5
              </span>
            </div>

            <div className="skills-details__division">
              <span class="label label-warning">Bootstrap</span>
            </div>

            <div className="skills-details__division">
              <span class="label label-primary">Node JS</span>
            </div>

            <div className="skills-details__division">
              <span class="label label-default">HTML5</span>
            </div>

            <div className="skills-details__division">
              <span class="label label-success">CSS3/ SASS</span>
            </div>

            <div className="skills-details__division">
              <span class="label label-info">MySQL</span>
            </div>

            <div className="skills-details__division">
              <span class="label label-info">MySQL</span>
            </div>

            <div className="skills-details__division">
              <span class="label label-warning">MongoDB</span>
            </div>

            <div className="skills-details__division">
              <span class="label label-default">GraphQL</span>
            </div>

            <div className="skills-details__division">
              <span class="label label-primary">Photoshop</span>
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
