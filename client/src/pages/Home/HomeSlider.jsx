import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import homeSliderData from "../../data/homeSlider.json";

const HomeSlider = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      direction={"vertical"}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {homeSliderData.map((data) => (
        <SwiperSlide
          key={data.id}
          style={{
            backgroundSize: "cover !important",
            backgroundPosition: "center",
            background: `url(${data.imgSrc})`,
          }}
        >
          <Box>
            <Typography
              align="left"
              color={"#fff"}
              variant="h3"
              className="uppercase"
            >
              {data.title}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
