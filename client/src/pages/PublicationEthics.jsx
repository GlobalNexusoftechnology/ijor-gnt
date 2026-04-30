import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const PublicationEthics = () => {
  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={2} align="center">
        Publication Ethics
      </Typography>

      <Typography align="justify">
        Research publication ethics are crucial in maintaining the integrity and
        credibility of scientific and academic work. Ethical guidelines ensure
        that research is conducted responsibly, with transparency, and with the
        well-being of subjects and the scientific community in mind. Here are
        some key aspects of research publication ethics:
      </Typography>

      <List>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Authorship
          </Typography>
          <ListItemText align="justify" primary="All listed authors should have made significant contributions to the research. Honorary or ghost authorship, where individuals are credited without substantial contribution, should be avoided." />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Plagiarism
          </Typography>
          <ListItemText align="justify" primary="Plagiarism, the use of someone else's work without proper acknowledgment, is strictly prohibited. Authors must cite all sources accurately." />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Data Fabrication and Falsification
          </Typography>
          <ListItemText align="justify" primary="Manipulating research data or fabricating results is a severe breach of ethics. Researchers must report their findings truthfully and without manipulation." />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Conflict of Interest
          </Typography>
          <ListItemText align="justify" primary="Authors should disclose any financial or personal conflicts of interest that might influence the results or interpretation of their work. This ensures transparency and objectivity." />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Informed Consent
          </Typography>
          <ListItemText align="justify" primary="When research involves human subjects, informed consent must be obtained. Participants should be aware of the nature of the study and any potential risks involved." />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Animal Welfare
          </Typography>
          <ListItemText align="justify" primary="Research involving animals must adhere to ethical standards ensuring the animals' well-being and minimizing any harm or discomfort." />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Peer Review
          </Typography>
          <ListItemText align="justify" primary="Peer review processes should be fair and unbiased. Reviewers should provide constructive feedback and evaluate the quality and integrity of the research." />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Redundant Publication
          </Typography>
          <ListItemText align="justify" primary="Submitting the same research to multiple journals simultaneously (duplicate submission) or publishing similar research in different journals (self-plagiarism) is unethical." />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Image Manipulation
          </Typography>
          <ListItemText align="justify" primary="Any image or data manipulation should be clearly indicated, and raw data should be made available for scrutiny if necessary." />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ pb: 2, flexDirection: "column", alignItems: "flex-start" }}
        >
          <Typography fontWeight={600} variant="body1" align="left">
            Citation Ethics
          </Typography>
          <ListItemText align="justify" primary="Authors should cite relevant works accurately and avoid excessive self-citation to maintain objectivity and acknowledge the contributions of others." />
        </ListItem>
      </List>

      <Typography>
        Maintaining high ethical standards in research publications promotes
        trust within the scientific community and ensures the dissemination of
        reliable knowledge. Adhering to these principles helps in upholding the
        integrity of academic and scientific research.
      </Typography>
    </Box>
  );
};

export default PublicationEthics;
