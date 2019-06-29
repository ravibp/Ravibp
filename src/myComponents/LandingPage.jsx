import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import "./LandingPage.scss";

// Sections for this page
import ProductSection from "views/LandingPage/Sections/ProductSection.jsx";
import TeamSection from "views/LandingPage/Sections/TeamSection.jsx";
import WorkSection from "views/LandingPage/Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const profileImg =
      "https://scontent.fcok5-1.fna.fbcdn.net/v/t31.0-8/12493574_709398639197765_7027678491994594283_o.jpg?_nc_cat=106&_nc_oc=AQnnhYmHDOo22IOydlDufWAvOfOC-wo_sK0VpBQfJCK7Axa30Cdyt2NeocGfrudNdbU&_nc_ht=scontent.fcok5-1.fna&oh=f9c92d61d8847e4e7a2ac8970f103125&oe=5D855F96";

    return (
      <div className="landingPage-container">
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Ravi BP"
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
                  <img src={profileImg} alt="ravi bp's photo" />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
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
