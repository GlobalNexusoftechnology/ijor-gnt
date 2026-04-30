import { ListItem, List, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import ijorMenuItems from '../../data/ijorMenuItems.json'

const IjorMenu = () => {
  return (
    <Stack className="border rounded-lg" p={1}>
      <Stack>
        <Typography variant={"body1"}>IJR Menu</Typography>
      </Stack>

      <Stack mt={1}>
        <List disablePadding className="grid gap-y-1">
          {ijorMenuItems.map((menu) => (
            <ListItem key={menu.label} disablePadding>
              <Typography variant={"body2"}><Link to={menu.link}>{menu.label}</Link></Typography>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default IjorMenu;
