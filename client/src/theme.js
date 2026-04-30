import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D7DA4",
    },
    secondary: {
      main: "#EF7B1D",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",

    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },

    h4: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },

    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },

    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },

    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },

    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
});

export default theme;
