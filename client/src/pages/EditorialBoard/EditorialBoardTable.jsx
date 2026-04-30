import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from "@mui/material";
import React from "react";

import editorialBoard from "../../data/editorialBoard.json";

const EditorialBoardTable = () => {
  return (
    <>
      <Typography align="center" variant="h6" mb={2}>
        Editorial Board
      </Typography>
      <TableContainer>
        <Table>
          <TableBody
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              border: "1px solid #161616",
            }}
          >
            {editorialBoard.map((data) => (
              <TableRow
                key={data.id}
                sx={{
                  border: "1px solid #161616",
                  display: "grid",
                  alignItems: "center",
                }}
              >
                <TableCell sx={{ border: 0, padding: 1 }}>
                  {data.name + ','}
                  {data.designation && <br/>}
                  {data.designation && `${data.designation},`}
                  <br />
                  {data.university}
                  {data.university ? `, ${data.location}` : `${data.location}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EditorialBoardTable;
