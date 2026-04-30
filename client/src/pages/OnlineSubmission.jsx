import { Check } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

const OnlineSubmission = () => {
  const initalFormData = useMemo(()=> ({
    fullName: "",
    mobile: "",
    articleTitle: "",
    articleSubject: "",
    address: "",
    primaryEmail: "",
    alternateEmail: "",
    file: null,
  }), []);

  const [formData, setFormData] = useState(initalFormData)

  const [formSubmitted, setFormSubmitted] = useState(false)

  const [isFormSent, setIsFormSent] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, file: reader.result });
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      fetch("https://internationaljournalofresearch.co.in/server/index.php", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message); // Handle the response as needed
          setSuccessMsg(data.message);
          setFormData(initalFormData)
        })
        .catch((error) => {
          console.error(error);
        });

      setFormSubmitted(false);
    }
  }, [formSubmitted, formData, initalFormData]);

  useEffect(() => {
    console.log("formData.file", formData.file);
  }, [formData.file]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setSuccessMsg("Please Wait");
    setIsFormSent(true);
  };

  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={4} align="center">
        Online Submission
      </Typography>

      {/* <Typography>Please click on the link below and submit all details if you want to submit your paper.</Typography>
      <a style={{color: theme.palette.secondary.main}} target="_blank" rel="noreferrer" href="https://forms.gle/mgGjcfPahUsAyoSs6">https://forms.gle/mgGjcfPahUsAyoSs6</a> */}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label={"Full Name"}
              variant="outlined"
              fullWidth={true}
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              name="fullName"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Mobile No"}
              variant="outlined"
              fullWidth={true}
              required
              type="tel"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              name="mobile"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Article Title"}
              variant="outlined"
              fullWidth={true}
              required
              value={formData.articleTitle}
              onChange={(e) =>
                setFormData({ ...formData, articleTitle: e.target.value })
              }
              name={"articleTitle"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Article Subject"}
              variant="outlined"
              fullWidth={true}
              required
              value={formData.articleSubject}
              onChange={(e) =>
                setFormData({ ...formData, articleSubject: e.target.value })
              }
              name={"articleSubject"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Residential Address for Hard Copy"}
              variant="outlined"
              fullWidth={true}
              required
              multiline
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              name={"address"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Primary Email Id"}
              variant="outlined"
              fullWidth={true}
              required
              type="email"
              value={formData.primaryEmail}
              onChange={(e) =>
                setFormData({ ...formData, primaryEmail: e.target.value })
              }
              name={"primaryEmail"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Alternate Email Id"}
              variant="outlined"
              fullWidth={true}
              required
              type="email"
              value={formData.alternateEmail}
              onChange={(e) =>
                setFormData({ ...formData, alternateEmail: e.target.value })
              }
              name={"alternateEmail"}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="article-file">
              Upload Your Article (required) (You can attach up to 2MB Word
              Document)
            </label>
            <input
              type="file"
              id="article-file"
              required
              name="file"
              accept=".doc,.docx"
              onChange={handleFileChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      {isFormSent && (
        <Typography
          sx={{ color: "green", border: "1px solid green", p: 2 }}
          mt={4}
        >
          <Check />
          {successMsg}
        </Typography>
      )}
    </Box>
  );
};

export default OnlineSubmission;
