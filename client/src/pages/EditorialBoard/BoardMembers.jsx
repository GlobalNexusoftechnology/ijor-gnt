import { List, ListItem, Typography } from "@mui/material";
import React from "react";

const BoardMembers = () => {
  return (
    <>
      <List>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Chief Patrons
          </Typography>
          <Typography align="center">
            Dr. Akhtar Hasan Rizvi: President, Rizvi Education Society
          </Typography>
          <Typography align="center">
            Adv. (Mrs.) Rubina A. H. Rizvi: Director, Rizvi Education Society
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Editor-in-Chief
          </Typography>
          <Typography align="center">
            {/* Dr. Ashfaq Ahmad Khan: Principal, Rizvi College of Arts, Science
            &amp; Commerce, Bandra (West), Mumbai - 400050. */}
            Dr. Arunachalam S : Incharge Principal & Professor, Rizvi College of Arts, Science & Commerce, Bandra (West), Mumbai 400050
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Executive Editor
          </Typography>
          <Typography align="center">
            Dr. (Mrs.) Anjum Ara M. K. Ahmad: Professor, Department of
            Mathematics and Statistics, Rizvi College of Arts, Science &amp;
            Commerce, Bandra (West), Mumbai - 400050.
            <br />
            Email: executiveeditor.ijr@rizvicollege.edu.in
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Members
          </Typography>
          <Typography align="center">
            Dr. Rana Ansariya
            <br />
            {/* Dr. Masooma Sayed */}
            Mrs. Shweta Dubey
            <br />
            {/* Ms. Aiman Peerzade */}
            Mr. Subhash Gupta
            <br />
            Ms. Mehvash Shaikh
            <br />
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Technical Support
          </Typography>
          <Typography align="center">Mr. Masoom Ali</Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="h6" fontWeight={600}>
            Administrative Support
          </Typography>
          <Typography align="center">Mr. Akshay N</Typography>
        </ListItem>
      </List>
    </>
  );
};

export default BoardMembers;
