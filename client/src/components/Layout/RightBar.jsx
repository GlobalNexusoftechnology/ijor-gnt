import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import RightBarImages from "../RightBar/RightBarImages";
import { East } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RightBar = ({ style }) => {
  return (
    <Box sx={[style, { display: "grid", rowGap: 3 }]} p={1}>
      <RightBarImages />

      <Button
        variant={"contained"}
        color="secondary"
        size="small"
        endIcon={<East />}
      >
        <Link to={"online-submission"}>Submit Your Paper Now</Link>
      </Button>


      <Stack color={"red"} mt={4}>
      <Typography align="center" fontWeight={600}>Beware of the Following Cloned Journal</Typography>
      <Typography align="center" fontWeight={600}>https://ijrpublisher.com/</Typography>
      </Stack>
    </Box>
  );
};

export default RightBar;
