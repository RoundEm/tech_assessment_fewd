import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


class NavBar extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Assemble Books</NavbarBrand>
      </Navbar>
    );
  }
}

export default NavBar;