import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

import React, { useEffect, useMemo, useState } from "react";

const ContactUs = () => {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.error(err))
  }, [])

  const initialFormData = useMemo(() => ({
    fullName: "",
    email: "",
    mobile: "",
    country: "",
    comment: "",
  }), [])

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setSuccessMsg("Please Wait");
    setIsFormSent(true);
  };

  useEffect(()=>{
    if(formSubmitted){
      fetch("https://internationaljournalofresearch.co.in/server/contact.php", {
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
          setFormData(initialFormData)
        })
        .catch((error) => {
          console.error(error);
        });

      setFormSubmitted(false);
    }
  }, [formSubmitted, formData, initialFormData])

  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={4} align="center">
        Contact Us
      </Typography>

      <form onSubmit={handleSubmit}>
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
              label={"Email"}
              variant="outlined"
              fullWidth={true}
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              name="email"
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
              label={"Select Country"}
              variant="outlined"
              fullWidth={true}
              required
              select
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            >
              {countries?.map((country, i) => (
                <MenuItem key={country.name + i} value={country.name}>{country.name}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Comment/Message"}
              variant="outlined"
              fullWidth={true}
              required
              multiline
              rows={4}
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              name={"comment"}
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

      <Grid
        mt={8}
        container
        sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        columnGap={2}
      >
        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            ADDRESS
          </Typography>
          <Typography variant="body1" color={"primary"}>
            International Journal of Research - Rizvi College of Arts, Science &
            Commerce
          </Typography>
          <Typography variant="body2">
            Rizvi Educational Complex, Off Carter Rd, Rizvi Complex, Chuim,
            Bandra West, Mumbai, Maharashtra 400050
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            (FOR SUPPORT)
          </Typography>
          <Typography variant="body1" color={"primary"}>
            <a href="tel:+91 90048 34583">+91 90048 34583</a>
          </Typography>
          <Typography variant="body1" color={"primary"}>
            <a href="mailto:executiveeditor.ijr@rizvicollege.edu.in">
              executiveeditor.ijr@rizvicollege.edu.in.
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Stack mt={4}>
        <iframe
          title="Rizvi Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15083.569190708788!2d72.824408!3d19.0684724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96dfb95423f%3A0x38026e73d00969a5!2sRizvi%20College%20of%20Arts%2C%20Science%20and%20Commerce!5e0!3m2!1sen!2sin!4v1697379586035!5m2!1sen!2sin"
          width="100%"
          height="360"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Stack>
    </Box>
  );
};

export default ContactUs;
