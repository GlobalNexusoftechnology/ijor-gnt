import { ImageList, ImageListItem, Stack } from "@mui/material";
import React from "react";
// import UgcImg from "./img/ugc_approved.png";
// import SJIF from "./img/scientific-journal-impact-factor.jpeg";
// import IssnImg from "./img/issn-2.png";

const ListStyle = {
  display: "grid !important",
  alignItems: "center !important",
};

const RightBarImages = () => {
  return (
    <Stack>
      <ImageList>
        <ImageListItem style={ListStyle}>
          <a href="https://drive.google.com/file/d/1tkpekP1hDqAN0CLElY5Zw2cRKJNS929S/view?usp=sharing">
            <img src={`https://res.cloudinary.com/drn9uxegj/image/upload/v1697545366/ugc_approved.77dde03136feeeb00e78_irpvrr.png`} alt="UGC Approved" />
          </a>
        </ImageListItem>
        <ImageListItem
          sx={[{ m: "auto", height: "100% !important" }, ListStyle]}
        >
          <a href="assets/docs/ISSNCertificate.pdf">
            <img
              src={`https://res.cloudinary.com/drn9uxegj/image/upload/v1697545375/e7937b5i3jgw3es4dztz.png`}
              style={{ objectFit: "contain" }}
              alt="UGC Approved"
            />
          </a>
        </ImageListItem>
        <ImageListItem sx={[{ gridColumnEnd: "span 2 !important" }, ListStyle]}>
          <a href="http://www.sjifactor.com/passport.php?id=19276">
            <img
              width={"100%"}
              src={`https://res.cloudinary.com/drn9uxegj/image/upload/v1697545384/scientific-journal-impact-factor.0b8b12d05906cd474b97_vgv0rn.jpg`}
              alt="scientific-journal-impact-factor"
            />
          </a>
        </ImageListItem>
      </ImageList>
    </Stack>
  );
};

export default RightBarImages;
