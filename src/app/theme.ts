import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#28675b',
      dark: '#1d5047',
      light: '#e4f0eb',
    },
    secondary: {
      main: '#b85d47',
    },
    background: {
      default: '#f6f8f6',
      paper: '#ffffff',
    },
    text: {
      primary: '#1c2925',
      secondary: '#66736d',
    },
    divider: '#e3e9e5',
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Aptos, "Segoe UI", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
})

export default theme
