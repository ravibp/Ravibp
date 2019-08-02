import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// Sections for this page
// import ProductSection from "views/LandingPage/Sections/ProductSection.jsx";
import TeamSection from "views/LandingPage/Sections/TeamSection.jsx";
import WorkSection from "views/LandingPage/Sections/WorkSection.jsx";

// my components
import Parallax from "myComponents/Parallax.jsx";
import Header from "myComponents/Header/Header.jsx";
import AboutMe from "myComponents/Sections/AboutMe.jsx";
import Resume from "myComponents/Sections/Resume.jsx";
import Projects from "myComponents/Sections/Projects.jsx";
import Skills from "myComponents/Sections/Skills.jsx";
import Footer from "myComponents/Footer/Footer.jsx";
import "./LandingPage.scss";
import backgroundVideo from "assets/video/backgroundVideo.mp4";
import profilePic1 from "assets/img/profile-img-1.jpg";
import profilePic4 from "assets/img/profile-img-4.jpg";
import {isMobile, isMobileOnly, isTablet} from 'react-device-detect';

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes, ...rest } = this.props;
    const profileImg = [
      profilePic4,
      profilePic1
    ];
    return (
      <div id="landingPage-section" className="landingPage-container">
        <Header />
        <div className="profile">
          <Parallax filter backgroundVideo={backgroundVideo}>
            <div className={classes.container}>
              <div className="row">

               <div className="col-12 col-md-12">
                  <a href="#aboutMe-section">
                  <div className="profile__image">
                    <div id="f1_container">
                      <div id="f1_card" class="shadow">
                        <div class="front face">
                          <img src={profileImg[0]} alt="ravi bp's photo" />
                        </div>
                        <div class="back face center">
                          <img src={profileImg[1]} alt="ravi bp's photo 2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="col-12 col-md-12">
                  <div className="profile__title">
                    {isMobileOnly &&
                      <h1 className={"col-12"}>Ravi BP</h1>
                    }
                    <h1 className={"col-12"}>MERN STACK</h1>
                    <h1 className={"col-12"}>DEVELOPER</h1>
                  </div>
                  <p className="profile__description">
                    Creative web developer dedicated to building fast and
                    responsive websites with quality code.
                  </p>
                </div>
              
              </div>
            </div>
          </Parallax>
        </div>

        <div className={classNames(classes.main, classes.mainRaised + "  ml-0 mr-0 pl-0 pr-0")}>
          <div className="landingPage-container__sections-container">
            <AboutMe id="aboutMe-div" />
            <Skills id="skills-div" />
            <Projects id="projects-div" />
            <TeamSection />
            {/* <WorkSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(LandingPage);
