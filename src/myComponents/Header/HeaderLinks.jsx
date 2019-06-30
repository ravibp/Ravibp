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

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        /> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#aboutMe-section"
          target="_self"
          color="transparent"
          className={classes.navLink}
        >
          About Me
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#resume-section"
          target="_self"
          color="transparent"
          className={classes.navLink}
        >
          Resume
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#projects-section"
          color="transparent"
          className={classes.navLink}
        >
          Projects
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#projects-section"
          color="transparent"
          className={classes.navLink}
        >
          Contact
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
