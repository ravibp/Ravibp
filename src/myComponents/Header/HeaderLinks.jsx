/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Scrollspy from "react-scrollspy";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <div className="headerLinks">
      <div className="row">
        <div className="col-6 headerLinks__profile-name">
        <Scrollspy
            items={[
              "landingPage-section",
            ]}
          >
          <li>
            <a href="#landingPage-section">Ravi BP</a>
          </li>
          </Scrollspy>
        </div>

        <div className="col-6 headerLinks__rightLinks">
          <Scrollspy
            items={[
              "aboutMe-section",
              "skills-section",
              "projects-section"
            ]}
            currentClassName="is-current"
            offset={-10}
          >
            <li>
              <a href="#aboutMe-section">About</a>
            </li>
            <li>
              <a href="#skills-section">Skills</a>
            </li>
            <li>
              <a href="#projects-section">Projects</a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </div>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
