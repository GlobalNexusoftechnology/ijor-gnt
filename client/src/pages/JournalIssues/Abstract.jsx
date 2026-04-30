import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import theme from "../../theme";

import { KeyboardArrowDown } from "@mui/icons-material";

const Abstract = ({ data }) => {
  return (
    <Box mx={2} my={4}>
      <Typography variant="h6" mb={2} align="center">
        Journal Abstract
      </Typography>

      {data.map((d, index) => (
        <Accordion elevation={0} key={d.id}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDown />}
            sx={{
              bgcolor: theme.palette.primary.main,
              border: `1px solid #f5f5f5`,
            }}
          >
            <Typography color="#fff">{d.title}</Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ background: "#f5f5f5" }}>
            <TableContainer>
              <Table>
                <TableHead sx={{bgcolor: theme.palette.secondary.main}}>
                  <TableRow>
                    <TableCell>Sr.No</TableCell>
                    <TableCell>Author(s)</TableCell>
                    <TableCell>Title of paper</TableCell>
                    <TableCell>Abstract</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {d.table.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.authors.join(", ")}</TableCell>
                      <TableCell>{row.titleOfPaper}</TableCell>
                      <TableCell>
                        <a
                          href={row.download}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Abstract;
