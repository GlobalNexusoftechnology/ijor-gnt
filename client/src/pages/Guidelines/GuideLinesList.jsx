import React from "react";

import {List, ListItem, ListItemText, Typography} from '@mui/material'

import guideLinesData from "../../data/guidelinesData.json";

const GuideLinesList = () => {
  return (
    <List
      component="ol"
      style={{ listStyleType: "none", counterReset: "my-counter" }}
      sx={{mb: 2}}
    >
      {guideLinesData.map((data) => (
        <ListItem
        disablePadding
          key={data.id}
          sx={{ counterIncrement: "my-counter", alignItems: "flex-start" }}
        >
          <Typography align="justify" variant="body1" component="span">
            ({String.fromCharCode(96 + data.id)}){" "}
          </Typography>
          <ListItemText align="justify" primary={data.label} sx={{ marginLeft: 2 }} />
        </ListItem>
      ))}
    </List>
  );
};

export default GuideLinesList;
