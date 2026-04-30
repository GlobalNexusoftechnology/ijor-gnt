import {
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import fetchMenuData from '../../data/menuItems.json'
import fetchIjorMenuData from '../../data/ijorMenuItems.json'
import fetchDownloadsData from '../../data/downloadMenuItems.json'

const Footer = ({ style }) => {
  return (
    <Stack className="bg-white">
      <Container className="bg-primary">
        <Stack direction={"row"} justifyContent={"space-evenly"} p={6}>
          {/* Quick Links */}
          <Stack>
            <Typography color="white">Quick Links</Typography>
            <List>
              {fetchMenuData.map((menu) => (
                <ListItem key={menu.label} disablePadding>
                  <Typography variant="body2" color="white">
                    <Link to={menu.link}>{menu.label}</Link>
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Stack>

          {/* Quick Links */}
          <Stack>
            <Typography color="white">IJR Menu</Typography>
            <List>
              {fetchIjorMenuData.map((menu) => (
                <ListItem key={menu.label} disablePadding>
                  <Typography variant="body2" color="white">
                    <Link to={menu.link}>{menu.label}</Link>
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Stack>

          {/* Quick Links */}
          <Stack>
            <Typography color="white">Downloads</Typography>
            <List>
              {fetchDownloadsData.map(menu => (
              <ListItem key={menu.label} disablePadding>
                <Typography variant="body2" color="white">
                  <Link to={menu.link}>{menu.label}</Link>
                </Typography>
              </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
