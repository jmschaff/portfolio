import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HOMEPAGE_URL, ABOUT_URL } from "../../constants/Constants";

function Header() {
  return (
    <Navbar>
      <Navbar.Brand as={Link} to={HOMEPAGE_URL}>
        Jack Schaffer
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to={ABOUT_URL}>
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
