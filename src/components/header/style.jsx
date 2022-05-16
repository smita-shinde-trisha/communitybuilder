import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        WebkitBackdropFilter: "blur( 4px )",
    },
    navlink: {
        fontStyle: "normal",
        fontSize: "15px",
        lineHeight: "18px",
        textDecoration: 'none',
        marginLeft: "30px",
        cursor: 'pointer',
        color:'#ffffff',
        fontFamily: 'Josefin Sans'
    }
}));