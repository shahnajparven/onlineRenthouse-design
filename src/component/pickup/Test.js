import React from "react";

import './Pickup.css';

import { Link } from "react-router-dom";

const Test = ({ history }) => {

    return (
        <>
            <div className="pickup">
                <div className="pickup-container">
                    <div className="piv">

                    <Link className="pickup-link" to="Notes"> <p className="pickup-button" > PICK-UP </p></Link> 

                    </div>
                </div>
            </div>
        </>
    );
};
export default Test;