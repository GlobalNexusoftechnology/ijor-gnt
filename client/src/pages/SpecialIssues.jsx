import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";

const SpecialIssues = () => {
  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={2} align="center">
        Special Issues
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemText
            sx={{ color: theme.palette.primary.main, textAlign: "center" }}
          >
            <a href={'http://internationaljournalofresearch.co.in/wp-content/uploads/2022/06/Rizvi%20International%20Journal%20Special%20Issue%202022%20final%20copy.pdf'}>- International Journal of Research, Vol. 11 Special Issue March 2022</a>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default SpecialIssues;
