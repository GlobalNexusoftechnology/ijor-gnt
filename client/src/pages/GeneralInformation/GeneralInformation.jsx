import { Box, Table, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import GeneralInformationList from "./GeneralInformationList";

const GeneralInformation = () => {
  return (
    <Box mx={2} my={2}>
      <Typography align="center" variant="h6" mb={2}>
        General Information
      </Typography>

      <GeneralInformationList />

      <Table sx={{mt: 4}}>
        <TableHead>
            <TableRow>
                <TableCell><strong>Published by</strong></TableCell>
                <TableCell>Rizvi Education Society’s, Rizvi College of Arts, Science &amp; Commerce</TableCell>
            </TableRow>
            <TableRow>
                <TableCell><strong>Office</strong></TableCell>
                <TableCell>Carter Road, Bandra (W), Mumbai - 400050, India.</TableCell>
            </TableRow>
            <TableRow>
                <TableCell><strong>Tel</strong></TableCell>
                <TableCell>+91 90048 34583, +91-8451046220</TableCell>
            </TableRow>
            <TableRow>
                <TableCell><strong>Fax</strong></TableCell>
                <TableCell>+91-22-26497448</TableCell>
            </TableRow>
            <TableRow>
                <TableCell><strong>Website</strong></TableCell>
                <TableCell>www.rizvicollege.edu.in</TableCell>
            </TableRow>
            <TableRow>
                <TableCell><strong>Email id</strong></TableCell>
                <TableCell>executiveeditor.ijr@rizvicollege.edu.in</TableCell>
            </TableRow>
        </TableHead>
      </Table>
    </Box>
  );
};

export default GeneralInformation;
