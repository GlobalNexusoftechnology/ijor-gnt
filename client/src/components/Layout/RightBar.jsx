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
        <Typography align="center" fontWeight={600}>
          Beware of the Following <br />
          "Cloned and Fraud Journal with False ISSN and Wrong UGC approved
          number"
        </Typography>
        <Typography align="center" fontWeight={600}>
          https://ijrpublisher.net
        </Typography>
      </Stack>

      <Stack color={"black"} mt={4}>
        <Typography align="center" fontWeight={600}>
          (The said UGC approved Journal Serial No. 63072 belongs to Rizvi College Journal and not this journal mentioned on this said link)
        </Typography>
      </Stack>
    </Box>
  );
};

export default RightBar;
