import React, { useState } from "react";
import { Box} from "@mui/material";
import "../banner/Banner.css";

const Bannerr = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      window.location.replace("/products/" + keyword);
    } else {
      history.push("/products");
    }
  };


  return (
    <Box pt="25vh">
      <Box className="search" px={10}>
        <Box>
          <form onSubmit={searchSubmitHandler} className="searchFrom">
      
            <input
              className="inputArea"
              type="text"
              placeholder="Enter Your Address..."
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input className="searchBtn" type="submit" value="Search" />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Bannerr;
