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
import HeaderLinks, { navbarItems } from "myComponents/Header/HeaderLinks.jsx";
import Footer from "myComponents/Footer/Footer.jsx";
import "./LandingPage.scss";
import { transition } from "assets/jss/material-kit-react";
import backgroundVideo from "assets/video/backgroundVideo.mp4";
const dashboardRoutes = [];

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes, ...rest } = this.props;
    const profileImg = [
      "https://scontent.fcok5-1.fna.fbcdn.net/v/t31.0-8/12493574_709398639197765_7027678491994594283_o.jpg?_nc_cat=106&_nc_oc=AQnnhYmHDOo22IOydlDufWAvOfOC-wo_sK0VpBQfJCK7Axa30Cdyt2NeocGfrudNdbU&_nc_ht=scontent.fcok5-1.fna&oh=f9c92d61d8847e4e7a2ac8970f103125&oe=5D855F96",
      "https://scontent.fcok5-1.fna.fbcdn.net/v/t1.0-9/22528262_1094912563979702_3917861323370192151_n.jpg?_nc_cat=110&_nc_oc=AQnRABN6WtDoJeexkb0yl7R2kLZBC7q81I7cZJRMXDdHeLHEAHU7eRo6s2zHV9PtyGw&_nc_ht=scontent.fcok5-1.fna&oh=e0daacdc48c6f79a977ebe87747a9d3d&oe=5DC1E42A"
    ];
    return (
      <div id="landingPage-section" className="landingPage-container">
        <Header
          color="transparent"
          routes={dashboardRoutes}
          profileName="Ravi BP"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "blue",
            transition: "1s backgroundColor"
          }}
          {...rest}
        />
        <div className="profile">
          <Parallax filter backgroundVideo={backgroundVideo}>
            <div className={classes.container}>
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="profile__title">
                    <h1 className={"col-12"}>FULL STACK</h1>
                    <h1 className={"col-12"}>WEB DEVELOPER</h1>
                  </div>
                  <p className="profile__description">
                    Creative web developer dedicated to building fast and
                    responsive websites with quality code.
                  </p>
                </div>
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
              </div>
            </div>
          </Parallax>
        </div>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className="landingPage-container__sections-container">
            <AboutMe id="aboutMe-div" />
            <Skills id="skills-div" />
            <Projects id="projects-div" />
            <TeamSection />
            <WorkSection />
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
