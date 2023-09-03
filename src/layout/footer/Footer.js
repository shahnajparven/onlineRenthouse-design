import React from "react";
import "./Footer.css";
import Footerform from "./Footerform.js";
import Footericon from "./Footericon.js";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box width={"100%"} backgroundColor="#272829" className="footer">
      <Box className="footer-container">
        {/* <section className="footer"> */}
        {/* <div className="footer-container"> */}
        {/* <div className="footercontent"> */}
        {/* <div className="flexcontent"> */}
        {/* <div className="leftcontent">
              <h3>Stay in Touch</h3>
              <hr />
              <p>Receive the latest news,special offers and exclusives.</p>
              <Footerform />
            </div> */}
        {/* <div className="rightcontent"> */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ lg: "row", sm: "row", xs: "column" }}
        >
          <Box>
            <h3>Stay in Touch</h3>
            <hr />
            <p>Receive the latest news,special offers and exclusives.</p>
            <Footerform />
          </Box>
          <Box>
            <Footericon />
          </Box>
        </Box>
        {/* </div> */}
        {/* </div> */}

        <div className="copyright-text">
          <hr />
          <p>
            To-Let |{" "}
            <small>Copyright © 2022 GUB. 182-batch final year project.</small>
          </p>
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* </section> */}
      </Box>
    </Box>
  );
};
export default Footer;
