import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navigation.css";
import "../../Main.css";
import { NavLink } from "react-router-dom";
import { Box, Divider, IconButton } from "@mui/material";
import $ from "jquery";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import logo from "../../assets/company.png";

const Navigation = ({ isAuthenticated }) => {
  const [state, setState] = useState(true);
  useEffect(() => {
    if (isAuthenticated) {
      setState(false);
    } else setState(true);
  }, [isAuthenticated]);

  //for scrolled jquery
  $(window).scroll(function () {
    $(".navarea,.firstNavArea,.secondNavArea .speedDial").toggleClass(
      "scrolled",
      $(this).scrollTop() > 80
    );
  });
  return (
    <Box className="navarea">
      <Box
        className="firstNavArea"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={10}
        color="white"
      >
        <Box display={"flex"} gap={2} color="white">
          <IconButton size="small">
            <LocationOnIcon
              sx={{
                color: "#FD8D14",
                mx: 1,
              }}
            />
            <Box color='white'>Uttara Sector 11,Dhaka</Box>
          </IconButton>

          <IconButton size="small">
            <CallIcon
              sx={{
                color: "#FD8D14",
                mx: 1,
              }}
            />
            <Box color='white'> +880 1745001556</Box>
          </IconButton>
          <IconButton size="small">
            <EmailIcon
              sx={{
                color: "#FD8D14",
                mx: 1,
              }}
            />
            <Box color='white'>shahnajparven21@gmail.com</Box>
          </IconButton>
        </Box>
        <Box display={"flex"} justifyContent={"right"} gap={2}>
          <IconButton sx={{color:'white'}}>
            <TwitterIcon />
          </IconButton>

          <IconButton sx={{color:'white'}}>
            <FacebookOutlinedIcon />
          </IconButton>

          <IconButton sx={{color:'white'}}>
            <InstagramIcon />
          </IconButton>
          
        </Box>
      </Box>
      <Divider sx={{ background: "gray" }} />
      <Navbar className="mainNavArea">
        <Container fluid>
          <NavLink to="/" className="logo_name">
            <Box display={"flex"}>
              <img src={logo} alt="logo" height={40} width={40} />
              <Box variant="span" lineHeight={2} mx={1}>
                TO-LET
              </Box>
            </Box>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 navitms">
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
              <NavLink className="navlink" to="Category">
                Category
              </NavLink>
              <NavLink className="navlink" to="Products">
                Products
              </NavLink>
              <NavLink className="navlink" to="Productttt">
                Guesthouse
              </NavLink>
              <NavLink className="navlink" to="Pickup">
                Pick-up
              </NavLink>
              <NavLink className="navlink" to="search">
               search
              </NavLink>
            </Nav>
            {state ? (
              <Link to="LoginSignup" style={{ textDecoration: "none" }}>
                <Box className="account"> SignUp | SignIn</Box>
              </Link>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Divider sx={{ background: "gray" }} />
      {/* <Box className="secondNavArea">last</Box> */}
    </Box>
  );
};
export default Navigation;
