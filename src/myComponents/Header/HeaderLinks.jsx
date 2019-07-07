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

// let headerLinkBS = (
//   <nav id="mainNavBar" class="navbar navbar-inverse navbar-fixed-top">
//     <div class="container">
//       <div class="navbar-header">
//         <button
//           type="button"
//           class="navbar-toggle"
//           data-toggle="collapse"
//           data-target=".navbar-collapse"
//         >
//           <span class="icon-bar"></span>
//           <span class="icon-bar"></span>
//           <span class="icon-bar"></span>
//         </button>
//       </div>
//       <div class="navbar-collapse collapse">
//         <ul class="nav navbar-nav">
//           <li class="active">
//             <a href="#aboutMe-section">Desert</a>
//           </li>
//           <li>
//             <a href="#divLighthouse">Lighthouse</a>
//           </li>
//           <li>
//             <a href="#divTulips">Tulips</a>
//           </li>
//           <li class="dropdown">
//             <a href="#" data-toggle="dropdown" class="dropdown-toggle">
//               Animals <span class="caret"></span>
//             </a>
//             <ul class="dropdown-menu">
//               <li>
//                 <a href="#divJellyfish">Jellyfish</a>
//               </li>
//               <li>
//                 <a href="#divPenguins">Penguins</a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );
function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <div className="headerLinks">
      <div className="row">
        <div className="col-6 headerLinks__profile-name" >
          <li>
            <a href="#landingPage-section" >Ravi BP</a>
          </li>
        </div>
        <div className="col-6 headerLinks__rightLinks">
          <Scrollspy
            items={["aboutMe-section", "skills-section", "projects-section"]}
            currentClassName="is-current"
            offset={ -70 }
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
