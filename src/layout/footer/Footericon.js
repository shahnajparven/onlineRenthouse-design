import React from "react";
import { IconContext } from "react-icons";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from "@mui/icons-material/Email";

const Form = () => {
  return (
    <>
      <IconContext.Provider value={{ className: "fa", size: "2rem" }}>
        <div class="icon">
          <a href="mailto:shahnajritu21@gmail.com">
            <IconButton sx={{ color: "white" }}>
              <EmailIcon />
            </IconButton>
          </a>
          <a target="blank" href="https://twitter.com/ShahnajRitu">
            <IconButton sx={{ color: "white" }}>
              <PinterestIcon />
            </IconButton>
          </a>
          <a target="blank" href="https://www.facebook.com/shahnaj.ritu.5">
            <IconButton sx={{ color: "white" }}>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a target="blank" href="https://www.facebook.com/shahnaj.ritu.5">
            <IconButton sx={{ color: "white" }}>
              <YouTubeIcon />
            </IconButton>
          </a>
        </div>
      </IconContext.Provider>
    </>
  );
};
export default Form;
