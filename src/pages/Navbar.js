import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import logo from'./assets/logo-artis-2023.png';


const Navbar = () => {
  return (
    <div>
      {/* Upper Bar */}
      <BootstrapNavbar bg="light" expand="lg">
        <BootstrapNavbar.Brand href="#home"> <img src={logo} alt="logo"   style={{ width: '10%', height:"5%" , marginLeft:'20%'}} /></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto ">
          <Nav.Link href="/">HOME</Nav.Link>        
          <Nav.Link href="/Aboutus">ABOUT US</Nav.Link>
          <Nav.Link href="/Product">PRODUCT</Nav.Link>  
          <Nav.Link href="/Customsynthesis">CUSTOM SYNTHESIS</Nav.Link>         
          <Nav.Link href="/Customanalysis">CUSTOM ANALYSIS</Nav.Link>   
          <Nav.Link href="/Contactus">CONTACT US</Nav.Link>               
          {/* <Nav.Link href="#search">Search</Nav.Link> */}
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>

     
    </div>
  );
};

export default Navbar;
