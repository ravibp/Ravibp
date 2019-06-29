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
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
// import ProductSection from "views/LandingPage/Sections/ProductSection.jsx";
import TeamSection from "views/LandingPage/Sections/TeamSection.jsx";
import WorkSection from "views/LandingPage/Sections/WorkSection.jsx";

// my components
import Header from "myComponents/Header/Header.jsx";
import AboutMe from "myComponents/Sections/AboutMe.jsx";
import Resume from "myComponents/Sections/Resume.jsx";
import Projects from "myComponents/Sections/Projects.jsx";
import HeaderLinks from "myComponents/Header/HeaderLinks.jsx";
import Footer from "myComponents/Footer/Footer.jsx";
import "./LandingPage.scss";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const profileImg = [
      "https://scontent.fcok5-1.fna.fbcdn.net/v/t31.0-8/12493574_709398639197765_7027678491994594283_o.jpg?_nc_cat=106&_nc_oc=AQnnhYmHDOo22IOydlDufWAvOfOC-wo_sK0VpBQfJCK7Axa30Cdyt2NeocGfrudNdbU&_nc_ht=scontent.fcok5-1.fna&oh=f9c92d61d8847e4e7a2ac8970f103125&oe=5D855F96",
      "https://scontent.fcok5-1.fna.fbcdn.net/v/t1.0-9/22528262_1094912563979702_3917861323370192151_n.jpg?_nc_cat=110&_nc_oc=AQnRABN6WtDoJeexkb0yl7R2kLZBC7q81I7cZJRMXDdHeLHEAHU7eRo6s2zHV9PtyGw&_nc_ht=scontent.fcok5-1.fna&oh=e0daacdc48c6f79a977ebe87747a9d3d&oe=5DC1E42A"
    ]

    return (
      <div className="landingPage-container">
        <Header
          color="transparent"
          routes={dashboardRoutes}
          profileName="Ravi BP"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />

        <Parallax filter image={require("assets/img/landingPage-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>FULL STACK WEB DEVELOPER.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that{"'"}s why we added this text here. Add here
                  all the information that can make you or your product create
                  the first impression.
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <div className="landingpage__profile-img">
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
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <AboutMe />
            <Resume />
            <Projects />

            {/* <TeamSection /> */}
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
