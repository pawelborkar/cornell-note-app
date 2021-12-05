import { createTheme } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        primary: {
            main: "#FF6186",
        },
        secondary: {
            ligh:"#61FFF0",
            main: "#61FFF4",
        },
    },
    typography: {
        fontFamily: "Nunito",
        fontWeightLight: 300,
        fontWeightMedium: 600,
        fontWeightRegular: 700,
        fontWeightBold: 800,
    },
});


export default theme;
