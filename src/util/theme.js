export default {
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    useNextVariants: true,
  },
  spreadThis: {
    dialog: {
      textAlign: "center",
    },
    form: {
      textAlign: "center",
    },
    image: {
      margin: "10px auto",
    },
    pageTitle: {
      margin: "0px auto",
    },
    textField: {
      margin: "10px auto",
    },
    button: {
      margin: "20px auto",
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
    },
    progress: {
      position: "absolute",
    },
    actionButtonContainer: {
      marginTop: 40,
    },
    actionButtonText: {
      marginRight: 30,
    },
    actionButton: {
      marginRight: 5,
    },
    invisibleSeparator: {
      border: "none",
      margin: 5,
    },
    visibleSeparator: {
      width: "100%",
      border: "1px solid rgba(0,0,0,0.1)",
      margin: "10px 0",
    },
    paper: {
      padding: 20,
    },
    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative",
        "& button": {
          position: "absolute",
          top: "80%",
          left: "70%",
        },
      },
      "& .profile-image": {
        width: 200,
        height: 200,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%",
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle",
        },
        "& a": {
          color: "#00bcd4",
        },
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0",
      },
      "& svg.button": {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    buttons: {
      textAlign: "center",
      "& a": {
        margin: "20px 10px",
      },
    },
  },
};
