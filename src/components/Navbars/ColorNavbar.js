import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class ColorNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };
  render() {
    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/" tag={Link} id="tooltip6619950104">
                <span>Web Developer</span> | Consulting
              </NavbarBrand>
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ColorNavbar;
