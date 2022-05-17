import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    link: {
        fontStyle: "normal",
        fontSize: "15px",
        lineHeight: "18px",
        textDecoration: 'none',
        marginLeft: "30px",
        cursor: 'pointer',
        color:'#050c24',
        fontFamily: 'Josefin Sans'
    },
    card: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'10px',
        padding:'10px',
        backgroundColor:'#000336',
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        borderRadius: '20px',
        height:'300px',
        flexDirection:'column'
    }
}));