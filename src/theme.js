import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#36BD8C"
    },
    secondary: {
      main: "#0f0"
    }
  },
  typography: {
    fontFamily: "Roboto",
    body2: {
      fontFamily: "Roboto",
      fontSize: "1.1rem"
    }
  },
  shape: {
    borderRadius: 30
  },
  spacing: 8,
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "green"
      }
    },
    MuiInputLabel: {
      root: {
        backgroundColor: 'transparent'
      }
    },
    MuiTextField: {
      root: {}
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
      color: "primary"
    },
    MuiCheckbox: {
      disableRipple: true
    },
    MuiTextField: {
      variant: "filled",
      InputLabelProps: {
        shrink: true
      }
    },
    MuiPaper: {
      elevation: 12
    },
    MuiCard: {
      elevation: 12
    }
  }
});