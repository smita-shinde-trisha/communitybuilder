import { createTheme } from "@mui/material/styles";


const defaultTheme = createTheme({
    palette: {
        background: {
            default: "#0C153A"
        },
        primary: {
            main: "#0C153A",
            dark: "#EE6328",
        },
        secondary: {
            main: "#EE6328",
            dark: "#0C153A",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: 'Josefin Sans'
    },
});


const theme = {
    ...defaultTheme,
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "60px",
                    lineHeight: "60px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "35px",
                        lineHeight: "40px",
                    },
                },
                h2: {
                    fontFamily: "Josefin Sans",
                    fontStyle: "normal",
                    fontWeight: 900,
                    fontSize: "50px",
                    lineHeight: "60px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "28px",
                        lineHeight: "30px",
                    },
                },
                h3: {
                    fontFamily: "Josefin Sans",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "43px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: '25px', lineHeight: '30px'
                    }
                },
                h4: {
                    fontFamily: "Josefin Sans",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "24px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: '18px', lineHeight: '20px'
                    }
                },
                h5: {
                    fontFamily: "Josefin Sans",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: "12px",lineHeight: '16px'
                    },
                },
                h6: {
                    fontFamily: "Josefin Sans",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26px",
                    [defaultTheme.breakpoints.down(900)]: {
                        fontSize: "13px",lineHeight: "20px",
                    },
                },
                body1: {
                    fontFamily: "Josefin Sans",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "17.6px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "16px",
                    },
                },
                body2: {
                    fontFamily: "Josefin Sans",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "14px",
                    },
                },
            },
        },
    },

}

export default theme;