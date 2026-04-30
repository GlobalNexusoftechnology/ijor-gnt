import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import MainContent from "./MainContent";
import RightBar from "./RightBar";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";
import CopyrightFooter from "./CopyrightFooter";

const Layout = () => {
  return (
    <Box className="bg-accent">
      <div style={styles.container}>
        <div style={styles.header}>
          <Header />
        </div>
        <Container disableGutters>
          <div style={styles.mainContent}>
            <div style={styles.leftBar}>
              <LeftBar />
            </div>
            <div style={styles.main}>
              <MainContent />
            </div>
            <div style={styles.rightBar}>
              <RightBar />
            </div>
          </div>
        </Container>
        <div style={styles.footer}>
          <Footer />
          <CopyrightFooter/>
        </div>
      </div>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  header: {},
  mainContent: {
    display: "flex",
    flex: 1,
  },
  leftBar: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    flex: 3,
    backgroundColor: "#fff",
  },
  rightBar: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    // backgroundColor: "#999",
  },
};

export default Layout;
