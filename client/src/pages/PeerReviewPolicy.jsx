import { Box, Typography } from "@mui/material";
import React from "react";

const PeerReviewPolicy = () => {
  return (
    <Box mx={2} my={2}>
      <Typography mb={2}>
        The peer review policy for the International Journal of Research (ISSN
        No. 2231-6124) appears to incorporate several key stages designed to
        ensure the integrity and academic quality of the submissions it receives
        which is outlined below:-
      </Typography>

      <Box
        ml={2}
        sx={{
          "& .ordered-list": { display: "grid", gap: "0.5rem" },
          "& .ordered-list ul": { display: "grid", gap: "0.25rem" },
        }}
      >
        <ol className="ordered-list" style={{ listStyleType: "number" }}>
          <Typography fontWeight={600} variant="body1" align="left">
            <li>
              Call for Papers
              <ul>
                <li>
                  <Typography fontWeight={600} variant="body2" align="left">
                    Channels
                  </Typography>
                  <Typography>
                    The journal initiates the submission process by calling for
                    papers through various digital platforms including LinkedIn,
                    Facebook, the official journal website, and WhatsApp.
                  </Typography>
                </li>
                <li>
                  <Typography fontWeight={600} variant="body2" align="left">
                    Purpose
                  </Typography>
                  <Typography>
                    This step helps in reaching a broad academic audience and
                    encourages submissions from diverse research domains.
                  </Typography>
                </li>
              </ul>
            </li>
          </Typography>

          <Typography fontWeight={600} variant="body1" align="left">
            <li>
              Initial Review by the Editorial Board
              <ul>
                <li>
                  <Typography fontWeight={600} variant="body2" align="left">
                    Initial screening
                  </Typography>
                  <Typography>
                    After Initial Screening of the Paper for Format and Style
                    the Research Paper is sent after hiding the name and
                    affiliation to Journal's Editorial Board for Review of the
                    Paper.
                  </Typography>
                </li>
                <li>
                  <Typography fontWeight={600} variant="body2" align="left">
                    Procedure
                  </Typography>
                  <Typography>
                    The Editorial Board comprises of Experts from Different
                    Subjects.
                    <br /> They go through the manuscripts submitted by the
                    authors and give their opinion on whether the paper can be
                    accepted as it is , or rejected.
                    <br /> They also suggest if any modifications are required
                    in the paper.
                  </Typography>
                </li>
                <li>
                  <Typography fontWeight={600} variant="body2" align="left">
                    Criteria
                  </Typography>
                  <Typography>
                    The focus at this stage might include an assessment of the
                    manuscript’s adherence to the journal's scope, its
                    methodological rigor, and originality.
                  </Typography>
                </li>
              </ul>
            </li>
          </Typography>

          <Typography fontWeight={600} variant="body1" align="left">
            <li>
              Plagiarism Check
              <ul>
                <li>
                  <Typography fontWeight={600} variant="body2" align="left">
                    Standards
                  </Typography>
                  <Typography>
                    Following initial approval, manuscripts undergo a plagiarism
                    check consistent with University Grants Commission (UGC)
                    norms. This is crucial for maintaining academic integrity
                    and ensuring the originality of the research.
                  </Typography>
                </li>
                <li>
                  <Typography fontWeight={600} variant="body2" align="left">
                    Tools
                  </Typography>
                  <Typography>
                    The use of advanced plagiarism detection software is common
                    in this process to identify and quantify similarity with
                    previously published work.
                  </Typography>
                </li>
              </ul>
            </li>
          </Typography>

          <Typography fontWeight={600} variant="body1" align="left">
            <li>
              Communication with the Author
              <ul>
                <li>
                  <Typography variant="body2" fontWeight={600}>
                    Notification
                  </Typography>
                  <Typography>
                    Authors are then informed about the acceptance or rejection
                    of their manuscripts. This communication is critical as it
                    provides feedback to the authors and guides them to the next
                    steps if their work is accepted.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" fontWeight={600}>
                    Feedback
                  </Typography>
                  <Typography>
                    In cases of rejection, the authors might receive comments or
                    reasons, which can be useful for future submissions either
                    to this journal or others.
                  </Typography>
                </li>
              </ul>
            </li>
          </Typography>
          <Typography fontWeight={600} variant="body1" align="left">
            <li>
              Declaration Form
              <ul>
                <li>
                  <Typography variant="body2" fontWeight={600}>
                    Content
                  </Typography>
                  <Typography>
                    Authors whose papers are accepted are required to fill out a
                    declaration form. This form typically includes declarations
                    regarding the originality of the work, disclosure of any
                    conflicts of interest, and possibly other ethical
                    considerations.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" fontWeight={600}>
                    Purpose
                  </Typography>
                  <Typography>
                    Such forms help ensure that the authors abide by ethical
                    research practices and that the work submitted is free from
                    conflicts that could undermine its credibility.
                  </Typography>
                </li>
              </ul>
            </li>
          </Typography>
          <Typography fontWeight={600} variant="body1" align="left">
            <li>
              Final Acceptance
              <ul>
                <li>
                  <Typography variant="body2" fontWeight={600}>
                    Final Review
                  </Typography>
                  <Typography>
                    Once the declaration form is submitted and reviewed, the
                    final acceptance to the journal is confirmed.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" fontWeight={600}>
                    Publication Process
                  </Typography>
                  <Typography>
                    Accepted papers are then moved forward into the production
                    stage, which includes typesetting, proofreading, and
                    eventually publication in the journal.
                  </Typography>
                </li>
              </ul>
            </li>
          </Typography>
        </ol>
      </Box>

      <Typography my={2} align="center" fontWeight={600}>
        A flowchart of the peer review policy process for the International
        Journal of Research
      </Typography>

      <img src="/assets/flow-chart.png" width={480} alt="" />
    </Box>
  );
};

export default PeerReviewPolicy;
