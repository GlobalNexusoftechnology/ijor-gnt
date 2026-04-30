import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import menuItemsData from '../../data/menuItems.json'

const MenuItems = () => {
  return (
    <Box p={1} className="bg-primary border border-white">
      <List className="flex" sx={{ columnGap: 2, justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        {menuItemsData.map((menu) => (
          <ListItem
            className="text-white uppercase"
            sx={{ width: "max-content" }}
            key={menu.link}
            disablePadding
          >
            <Typography variant={"body2"} sx={{ fontSize: "0.8rem" }}>
              <NavLink className="nav-link" to={menu.link}>
                {menu.label}
              </NavLink>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuItems;
