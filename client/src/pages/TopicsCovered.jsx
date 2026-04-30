import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const TopicsCovered = () => {
  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={2} align="center">
        Topics Covered
      </Typography>

      <Typography>
        The Journal accepts original research papers on any of the following
        broad topics
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="- Commerce, Management & Accountancy" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Economics & Business Economics" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Science & Technology (Pure or Applied Sciences)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Social Sciences" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Hospitality Studies" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Literature ( English, Hindi & Urdu)" />
        </ListItem>
      </List>

      <Typography>
        Empirical Research papers are preferred in our journal
      </Typography>

      <Typography>
        Any topic related to the above major themes are welcomed in our journal
      </Typography>
    </Box>
  );
};

export default TopicsCovered;
