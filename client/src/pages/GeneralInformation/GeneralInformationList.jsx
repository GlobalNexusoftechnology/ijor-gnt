import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

import generalInformation from "../../data/generalInformation.json";
import { FiberManualRecord } from "@mui/icons-material";

const GeneralInformationList = () => {
  return (
    <List component={'ul'}>
      {generalInformation.map((data) => (
        <ListItem key={data.id} alignItems="flex-start" disablePadding>
            <ListItemIcon><FiberManualRecord style={{fontSize: 20, color: '#000'}} /></ListItemIcon>
          <ListItemText align="justify">{data.content}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default GeneralInformationList;
