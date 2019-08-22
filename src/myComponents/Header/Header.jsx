import React from "react";
import "./Header.scss";
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
        <div className="col-12 header-headerLinks">
          <HeaderLinks />
        </div>
        <hr className="c" />
      </div>
    );
  }
}


export default Header;
