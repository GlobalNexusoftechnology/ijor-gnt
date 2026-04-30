import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../theme";

const columns = [
  { id: 1, label: "Subscription Type" },
  { id: 2, label: "One Year Subscription" },
  { id: 3, label: "Life Subscription (Individual)" },
  { id: 4, label: "Institutional Membership (Lifetime)" },
];

const rows = [
  {
    id: 1,
    sub_type: "For India",
    oneYear: "INR 2500",
    life_sub: "INR 20000",
    institutional_memebrship: "INR 25000",
  },
  {
    id: 2,
    sub_type: "For Outside India",
    oneYear: "US$ 100",
    life_sub: "US$ 1500",
    institutional_memebrship: "US$ 1500",
  },
];

const Subscription = () => {
  return (
    <Box mx={2} my={2}>
      <Typography align="center" variant="h6" mb={2}>Subscription Information for 2023-24</Typography>

      <TableContainer className="border" sx={{ mt: 2, borderColor: "#e0e0e0" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell
                  className="border"
                  key={item.id}
                  sx={{
                    borderColor: "#E0E0E0",
                    background: theme.palette.secondary.main,
                  }}
                >
                  <strong>{item.label}</strong>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="border" sx={{ borderColor: "#E0E0E0" }}>
                  {row.sub_type}
                </TableCell>
                <TableCell className="border" sx={{ borderColor: "#E0E0E0" }}>
                  {row.oneYear}
                </TableCell>
                <TableCell className="border" sx={{ borderColor: "#E0E0E0" }}>
                  {row.life_sub}
                </TableCell>
                <TableCell className="border" sx={{ borderColor: "#E0E0E0" }}>
                  {row.institutional_memebrship}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography mt={2}>The Journal is biannual in nature.</Typography>
      <Typography mt={2} fontWeight={600}>
        Payment only through NEFT/RTGS/Bank Transfer on the following account:-
        <br />
        Account Name: RIZVI EDU SOC MISC A/C RIZVI CGE OF ASC
        <br />
        Account Number: 121105000103
        <br />
        IFSC Code: ICIC0001211
        <br />
        Account Type: Current Account
        <br />
        MICR Code: 400229129
        <br />
        Name of Bank: ICICI BANK
        <br />
        Address Sheryl Road Branch, Shabbir Apt, 40, Sheryl Road, Bandra (West),
        Mumbai-400050
      </Typography>

      <Typography mt={2} align="justify">
        All payments should be made immediately after receiving an acceptance letter.<br/>
        Supply of Journal will commence only on receipt of the full subscription amount.<br/>
        INR 700 for an additional hard copy of the journal for individuals.<br/>
        For any Inquiry / Information, please contact:<br/>
        The Principal,<br/>
        Rizvi Education Society’s<br/>
        Rizvi College of Arts, Science &amp; Commerce,<br/>
        Off Carter Road, Bandra (West), Mumbai - 400 050, India<br/>
        Phone: +91 90048 34583, +91-8451046220<br/>
        Fax: +91-22-2649 7448<br/>
        E-mail: executiveeditor.ijr@rizvicollege.edu.in<br/>
        Website: http://www.rizvicollege.edu.in
      </Typography>
    </Box>
  );
};

export default Subscription;
