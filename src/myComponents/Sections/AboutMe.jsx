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
import "./AboutMe.scss";
import bgImg from "assets/img/bk-img-triangle.jpg";
import bgImgMobile from "assets/img/bk-img-triangle-mobile.jpg";
import aboutMe_image from "assets/img/aboutMe_image.jpg";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";
import { ReactComponent as IconEducation } from "assets/icons/IconEducation.svg";
import { ReactComponent as IconWork } from "assets/icons/IconWork.svg";
import ScrollAnimation from "react-animate-on-scroll";
// style={{backgroundImage:`url("${profilePic2}")`}}

class AboutMe extends React.Component {
  render() {
    let items = [
      "bounceInRight",
      "flipInY",
      "flipInX",
      "bounceInLeft",
      "fadeIn",
      "wobble"
    ];
    const { classes } = this.props;
    return (
      <div id="aboutMe-section">
        {/* <div className="aboutMe-bgImg">
          <ScrollAnimation animateOnce ="true"
            animateIn="flipInY"
            delay="1"
            duration="2"
          >
            {!isMobileOnly && <img src={bgImg} alt="" />}
            {isMobileOnly && <img src={bgImgMobile} alt="" />}
          </ScrollAnimation>
        </div> */}
        <div className="row no-gutters aboutMe-container">
        <div className="col-12 aboutMe__heading">
            <ScrollAnimation
              animateOnce="true"
              offset="0"
              delay="1"
              animateIn="tada"
              initiallyVisible={true}
            >
              <h1>
                <div>ABOUT ME</div>
              </h1>
            </ScrollAnimation>
          </div>

          <div className="col-12 col-md-3 col-lg-4 ">
            <div className="aboutMe__profImg">
              <ScrollAnimation
                animateOnce="true"
                animateIn="bounceInRight"
                delay="1"
                duration="2"
              >
                <img
                  src={aboutMe_image}
                  alt=""
                  ref="profImg-ref"
                  className="profImg"
                />
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-12 col-md-9 col-lg-8 aboutMe__details">
            <ScrollAnimation
              animateOnce="true"
              animateIn="bounceInRight"
              delay="1"
              duration="3"
            >
              <h4 className="col-12">Hi! I'm Ravi,</h4>
              <p className="col-12">
                <span> Web Designer / Developer </span> focused on crafting
                great web experiences.
              </p>
              <p className="col-12">
                I've been in the field of web development for 2+ years and I
                love what I do. I take complex problems and turn them into
                simple and beautiful interface designs. I strive to write
                efficient and elegant code, whether be it HTML, CSS or
                JavaScript. I want to make things that make a difference!
              </p>
              <p className="col-12">A picture is worth a thousand words...</p>
              <p className="col-12">
                As the picture says creating digital art is one of my favorite
                hobbies. You can find more of my digital art in the hobbies
                section.
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce="true"
              animateIn="bounceInRight"
              delay="1"
              duration="3"
            >
              <div className="col-12 aboutMe__cv">
                <a href="/resume" target="_blank">
                  Get My CV
                </a>
              </div>
              <div className="col-12 aboutMe__socialMediaLinks">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-github"></i>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

AboutMe.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionStyle)(AboutMe);
