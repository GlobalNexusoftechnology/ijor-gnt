import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import GuideLinesList from "./GuideLinesList";

const Guidelines = () => {
  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={2} align="center">
        Guidelines to the Contributors
      </Typography>

      <GuideLinesList />

      <Typography>Examples are given below</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText>
            <strong>For Journal Article:</strong> Ahmad, A. (2011), Estimating
            discrete parameters: An application to integration and unit roots,
            International Journal of Research, 1 (1), l-6.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>
            <strong>For Books:</strong> Montgomery, D. C. and Peck, E. A.
            (1982), Linear Regression Analysis, John Wiley, New York
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>
            <strong>For Online Document:</strong> Kelkar V. (2009), Towards a New Natural Gas Policy, Economic and Political Weekly, http://epw.in/epw/user/view abstract, viewed on February 17, 2011.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>
            <strong>For Edited Volume:</strong> Safilios-Rothschild and Constantina B.F. (1982), Female power autonomy and demographic change in the Third World, In Richard Anker et al. (198l) (Ed), Women’s Roles and Population Trends in the Third World, Peterson and Company, London, 117-I32.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>
            <strong>Conference papers:</strong> Chandel K.S. (2009), Ethics in Commerce Education, Paper presented at the Annual International Conference for the All India Management Association in June, New Delhi, India, 19-22.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>
            <strong>Unpublished dissertations and theses:</strong> Kumar S. (2006), Customer Value: A Comparative Study of Rural and Urban Customers, Thesis, Kurukshetra University, Kurukshetra.
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Guidelines;
