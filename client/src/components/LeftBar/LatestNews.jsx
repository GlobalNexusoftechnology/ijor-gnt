import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./LatestNews.css";

import newsData from '../../data/news.json'

import { Pagination, Autoplay } from "swiper/modules";

const Downloads = () => {
  return (
    <Stack className="border rounded-lg" p={1}>
      <Stack>
        <Typography variant={"body1"}>Latest News</Typography>
      </Stack>

      <Stack mt={1}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          direction={"vertical"}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {newsData.map(news => (

            <SwiperSlide key={news.id}>
            <Box>
              <Typography align='left' variant='body1'>{news.title}</Typography>
              {/* <Typography className="truncate-lines" align='left' variant='body2'>
                IJR Publication have various tie ups with many
                Conference/Seminar Organozers and Independent or Institutional
                Conferences to Present Paper required for the fulfilment of the
                reserach work.
              </Typography> */}
              <Button href={news.link} target="_blank" sx={{p: 0}}>Read More...</Button>
            </Box>
          </SwiperSlide>
            ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default Downloads;
