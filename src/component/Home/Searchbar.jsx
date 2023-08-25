import { Box } from "@mui/material";
import React from "react";

const Searchbar = ({ setKeyword,searchSubmitHandler }) => {
  return (
    <Box>
      <form onSubmit={searchSubmitHandler} className="searchFrom">
        <Searchbar setKeyword={setKeyword} />
        {/* <input
              className="inputArea"
              type="text"
              placeholder="Enter Your Address..."
              onChange={(e) => setKeyword(e.target.value)}
            /> */}
        <input className="searchBtn" type="submit" value="Search" />
      </form>
    </Box>
  );
};

export default Searchbar;
