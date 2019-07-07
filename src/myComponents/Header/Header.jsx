import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";
import "./Header.scss";
import { red } from "@material-ui/core/colors";
import HeaderLinks from "./HeaderLinks.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 600) {
      this.refs["headerNavBar-ref"].classList.add("scrolledHeader-style");
      this.refs["headerNavBar-ref"].classList.remove("transparentHeader-style");
    } else {
      this.refs["headerNavBar-ref"].classList.remove("scrolledHeader-style");
      this.refs["headerNavBar-ref"].classList.add("transparentHeader-style");
    }
  };
  componentDidMount() {
    this.refs["headerNavBar-ref"].classList.add("header-initialStyles")
    window.addEventListener("scroll", this.headerColorChange);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerColorChange);
  }
  render() {
    return (
      <div
        id="headerNavBar"
        className="header-container row no-gutters w-100 header-commonStyles"
        ref="headerNavBar-ref"
      >
        <div className="col-12">
          <HeaderLinks />
        </div>
      </div>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  // classes: PropTypes.object.isRequired,
  // color: PropTypes.oneOf([
  //   "primary",
  //   "info",
  //   "success",
  //   "warning",
  //   "danger",
  //   "transparent",
  //   "white",
  //   "rose",
  //   "dark"
  // ]),
  // rightLinks: PropTypes.node,
  // leftLinks: PropTypes.node,
  // profileName: PropTypes.string,
  // fixed: PropTypes.bool,
  // absolute: PropTypes.bool
  // // this will cause the sidebar to change the color from
  // // this.props.color (see above) to changeColorOnScroll.color
  // // when the window.pageYOffset is heigher or equal to
  // // changeColorOnScroll.height and then when it is smaller than
  // // changeColorOnScroll.height change it back to
  // // this.props.color (see above)
  // // changeColorOnScroll: PropTypes.shape({
  // //   height: PropTypes.number.isRequired,
  // //   color: PropTypes.oneOf([
  // //     "primary",
  // //     "info",
  // //     "success",
  // //     "warning",
  // //     "danger",
  // //     "transparent",
  // //     "white",
  // //     "rose",
  // //     "dark"
  // //   ]).isRequired
  // // })
};

export default withStyles(headerStyle)(Header);
