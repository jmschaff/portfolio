import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BASE_URL, ABOUT_URL } from "../../constants/Constants";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <Navbar bg="light" varaint="light">
      <Navbar.Brand href={BASE_URL}>Jack Schaffer</Navbar.Brand>
      <Nav>
        <Nav.Link activeStyle={activeStyle} href={ABOUT_URL}>
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
