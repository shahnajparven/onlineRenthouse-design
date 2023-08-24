import React from 'react';
import pic1 from '../../project-pic/h.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Navigation.css';
import '../../Main.css';
import $ from 'jquery';
import {NavLink} from 'react-router-dom';




const Navigation = () => {
  

//for modal
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const [showModal1,setShowModal1] = useState(false);
// const openModal1 = () =>{
//     setShowModal1(prev => !prev);
// };


//for scrolled jquery
$(window).scroll(function () {
  $('.navbar,.navitms,.searchbarnav').toggleClass('scrolled', $(this).scrollTop() > 80)
});



return (
 

  <Navbar bg="white" expand="lg" className="navbar">
    <Container fluid>
    <NavLink to="/" >
      <img
        className="d-block w-5" src={pic1}
        alt="Second slide" height="20px"
      />
      </NavLink>
      <NavLink to="/" className="logo_name">  TO-LET</NavLink>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">

        <Nav className="me-auto my-2 my-lg-0 navitms">
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="Category">Category</NavLink>
          <NavLink className="navlink" to="Products">Broadcast</NavLink>
          <NavLink className="navlink" to="Productttt">Guesthouse</NavLink>
          <NavLink className="navlink" to="Pickup">Pick-up</NavLink>
          <NavLink className= "navlink account" to="LoginSignup">SignUp</NavLink>
          {/* <NavLink className= "navlink" to="Search">SEARCH</NavLink> */}
        
        </Nav>
      </Navbar.Collapse>

     
     
      
      {/* <NavLink to="LoginSignup" className='navlink'>
      <Button className="d-flex login" >
     <img src={pic1} className="img-fluid" alt=' ' />
      
      </Button>
      </NavLink> */}
    
    </Container>
  </Navbar>

  );

};
export default Navigation;