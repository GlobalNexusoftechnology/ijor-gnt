import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

import indexingData from "../data/indexingData.json";
import theme from "../theme";

// import impactFactorLogo from '../components/RightBar/img/scientific-journal-impact-factor.jpeg'

const Indexing = () => {
  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={2} align="center">
        Indexing
      </Typography>

      <a rel="noreferrer" href="http://www.sjifactor.com/passport.php?id=19276" target="_blank"><img style={{margin: 'auto'}} src={`https://res.cloudinary.com/drn9uxegj/image/upload/v1697545384/scientific-journal-impact-factor.0b8b12d05906cd474b97_vgv0rn.jpg`} alt={"Scientific Journal Impact Factor"} /></a>
      <Typography variant="h5" mb={2} align="center">
        Scientific Journal Impact Factor
      </Typography>

      <List>
        {indexingData.map((data) => (
          <ListItem disablePadding key={data.id}>
            <ListItemText sx={{color: theme.palette.primary.main, textAlign: 'center'}}><a href={data.link}>{data.label}</a></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Indexing;
