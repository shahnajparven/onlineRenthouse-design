import React from "react";
import pic1 from "../../assets/img1.jpg";
import pic2 from "../../assets/img2.jpg";
import pic3 from "../../assets/img4.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import "../../Main.css";
import { Box } from "@mui/material";

const Banner = () => {

  return (
    <Box>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  banner-img"
            src={pic1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={pic2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={pic3}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default Banner;
