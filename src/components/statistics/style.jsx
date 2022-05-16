import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        boxShadow: '4px rgb(0 0	0 / 20%)',
        height: '200px',
        flexDirection: 'column',
        margin: '20px',
        borderRadius: '10px',
        background: '#FFFFFF'
    },
    box1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    hover_box: {
        padding: '4px',
        color: '#f24d07'
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