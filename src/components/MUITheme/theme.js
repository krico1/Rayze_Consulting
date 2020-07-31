import {  MuiThemeProvider, createMuiTheme }  from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   },
  palette: {
    primary: {
        main: "#316470",
    },
    secondary: {
      main: "#703d31",
    }
   },
})
export default theme