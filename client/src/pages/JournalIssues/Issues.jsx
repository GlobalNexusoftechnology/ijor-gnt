import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

import theme from '../../theme'

const Issues = ({ data }) => {
  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={2} align="center">
        Journal Issues
      </Typography>

      <List>
        {data.map((d, i) => (
          <ListItem key={i} disablePadding>
            <ListItemText sx={{color: theme.palette.primary.main}}><a href={d.link}>- {d.title}</a></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Issues;
