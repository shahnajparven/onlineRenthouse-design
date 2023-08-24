import React, {Fragment } from "react";
import pic1 from '../../project-pic/guest5.png';
import $ from 'jquery';
import './Banner.css';
import '../../Main.css';
import { NavLink} from 'react-router-dom';


const Bannerr = ({ history }) => {



    //for scrolled jquery
    $(window).scroll(function () {
        $('.searchbarbanner').toggleClass('scrolled', $(this).scrollTop() > 80)
    });


    return (
        <>
            <div className="bannerr">
                <div className="bannerr-text">
                {/* <img src={pic} /> */}
                    <h2>Find your dream home here...</h2>
              
                  <NavLink className="navlink" to="Search"><button className="search-btn">SEARCH</button></NavLink>
                </div>
                <div className="bannerr-pic">
                  <img src={pic1} /> 
                </div>
            </div>
        </>
    );
};

export default Bannerr;