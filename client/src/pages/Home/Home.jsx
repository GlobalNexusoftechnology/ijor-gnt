import React from "react";
import { Box } from "@mui/material";


import "swiper/css";
import "swiper/css/pagination";

import HomeSlider from "./HomeSlider";
import IntroductionContent from "./IntroductionContent";

const Home = () => {

  return (
    <Box mx={2} my={2}>
      <HomeSlider/>
      <IntroductionContent/>
    </Box>
  );
};

export default Home;
