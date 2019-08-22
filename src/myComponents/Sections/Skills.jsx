import React from "react";
import SkillsBar from "myComponents/Sections/SkillsBar.jsx";
import "./Skills.scss";
import "bootstrap/dist/css/bootstrap.min.css";
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
import ScrollAnimation from "react-animate-on-scroll";

let globalFlag = false;
class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillBGVideo: null
    };
    this.animationBackward = this.animationBackward.bind(this);
  }
  animationBackward() {
    globalFlag = false;
    this.refs["circle-wrapper-ref"].classList.remove("circle-wrapper--clicked");
    this.refs["circle-wrapper-ref"].classList.add("circle-wrapper--unClicked");
    this.refs["skills-bar-ref"].classList.remove("skills-bar--clicked");
  }
  animationForward() {
    globalFlag = true;
    this.refs["circle-wrapper-ref"].classList.add("circle-wrapper--clicked");
    this.refs["skills-bar-ref"].classList.add("skills-bar--clicked");
  }
  animateSkills = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 1200 && windowsScrollTop < 2000) {
      this.animationForward();
      window.removeEventListener("scroll", this.animateSkills);
    } else {
      // this.animationBackward();
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.animateSkills);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.animateSkills);
  }
  displaySkillsCategory = () => {
    return (
      <div>
        <ScrollAnimation animateOnce="true" animateIn="bounceInRight" delay="1">
          <h3>What I can do</h3>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce="true"
          animateIn="bounceInRight"
          duration="3"
          delay="1"
        >
          <ul>
            <li>
              <div>
                <Icon1 />
              </div>
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
    );
  };
  render() {
 
    return (
      <div id="skills-section" className={" "}>
        {/* <div className="skills-bgImg"> */}
        {/* <video className="" autoPlay muted loop>
            <source src={this.state.skillBGVideo} type="video/mp4" />
          </video> */}
        {/* </div> */}
        <div className="row no-gutters skills-container">
          <div className="col-12 skills-heading">
            <ScrollAnimation
              animateOnce="true"
              offset="0"
              delay="1"
              animateIn="tada"
              initiallyVisible={true}
            >
              <h1>
                <div>SKILLS</div>
              </h1>
            </ScrollAnimation>
          </div>
          <div className="d-none d-lg-block col-lg-3 skills-category">
            {this.displaySkillsCategory()}
          </div>
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-4 skills-diagram"
            ref="skills-diagram-ref"
          >
            <ScrollAnimation
              animateOnce="true"
              animateIn="flipInY"
              duration="5"
            >
              <ScrollAnimation
                animateOnce="true"
                animateIn="bounceInRight"
                duration="3"
              >
                <div className="circle-wrapper" ref="circle-wrapper-ref">
                  <div className="circle circle-1"></div>
                  <div className="circle circle-2"></div>
                  <div className="circle circle-3"></div>
                  <div className="icons">
                    {/* eslint-disable */}  
                    <span>
                      <a href="" data-tip="HTML5" className="circle-1">
                        <IconHTML />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a href="" data-tip="CSS3" className="circle-1">
                        <IconCSS />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />
                    </span>
                    <span>
                      <a href="" data-tip="MongoDB" className="circle-2">
                        <IconMongoDB />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a href="" data-tip="MySQL" className="circle-2">
                        <IconMySQL />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a href="" data-tip="NodeJS" className="circle-2">
                        <IconNodeJS />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />
                    </span>

                    <span>
                      <a href="" data-tip="Apollo GraphQL" className="circle-3">
                        <IconGraphQL />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a href="" data-tip="Photoshop" className="circle-3">
                        <IconPhotoshop />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a href="" data-tip="Bootstrap 4" className="circle-3">
                        <IconBoostrap />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />

                      <a href="" data-tip="ReactJS / Redux" className="circle-3">
                        <IconReact className="icon-react" />
                      </a>
                      <a href="" data-tip="Angular 5" className="circle-3">
                        <IconAngular />
                      </a>
                      <ReactTooltip place="top" type="dark" effect="solid" />
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
            </ScrollAnimation>
          </div>

          <div
            className="col-12 col-sm-6 col-md-6 col-lg-5 skills-bar"
            ref="skills-bar-ref"
          >
            <ScrollAnimation
              animateOnce="true"
              animateIn="flipInX"
              initiallyVisible={true}
              duration="3"
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

          <div className="d-block d-lg-none col-12 skills-category">
            {this.displaySkillsCategory()}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
