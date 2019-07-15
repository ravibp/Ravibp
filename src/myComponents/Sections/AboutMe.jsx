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
import "./AboutMe.scss"
import profilePic3 from "assets/img/profile-img-3.png";
import bgImg from "assets/img/bk-img-triangle.jpg";
import aboutMe_image from "assets/img/aboutMe_image.jpg";

// style={{backgroundImage:`url("${profilePic2}")`}}
import { ReactComponent as IconEducation } from "assets/icons/IconEducation.svg";
import { ReactComponent as IconWork } from "assets/icons/IconWork.svg";
class AboutMe extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="aboutMe-section">
        <div className="aboutMe-bgImg">

            <img src={bgImg} alt=""/>
        </div>
        <div className="row no-gutters aboutMe-container" >
     
          <div className="col-12 aboutMe__content">
            <h1 className="col-12">About Me</h1>
            <div className="col-3 col-lg-4 ">
              <div className="aboutMe__profImg">
                <img src={aboutMe_image} alt=""/>
              </div>
             
            </div>
            <div className="col-9 col-lg-8 row no-gutters aboutMe__details">
              <p className="col-12">Hi! I'm Ravi,<span> a web designer / developer (MEAN/ MERN Stack) </span> focused on crafting great web experiences. </p>
              {/* <p className="col-12">
                I like to think out of the box!
              </p> */}
              <p>
                 I've been in the field for 2+ years and I love what I do.
                 I take complex problems and turn them into simple and beautiful interface designs.
                 I strive to write efficient and elegant code, whether be it HTML, CSS or JavaScript. I want to make things that make a difference!
              </p>
              <p>A picture is worth a thousand words...</p>
              <p>
                 As the picture says creating digital art is one of my favorite hobbies.
                 You can find more of my digital art in the hobbies section.
              </p>
              <div className="col-12">
                <a href="/resume" target="_blank">Get My CV</a>
              </div>
              {/* <div className="col-12 row no-gutters aboutMe__education">
                <div className="col-2"> <IconEducation /></div>
                <div className="col-10">
                  <h6>Bangalore Institute of Technology</h6> 
                  <p>B.E | Electronics & Communications Engineering | 2013 - 2017</p>
                </div>
              </div>
              <div className="col-12 row no-gutters aboutMe__work">
                <div className="col-2"> <IconWork /></div>
                <div className="col-10">
                  <h6>Web Application Developer</h6> 
                  <p>Infosys Ltd | Systems Engineer | 2017 - present</p>
                  
                </div>
              </div> */}
            </div>
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
