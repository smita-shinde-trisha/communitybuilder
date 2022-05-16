import { Box,  Grid,Typography } from '@mui/material'
import React  from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    box1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        margin: '10px',
        height: '150px',
        boxShadow: "14px 31px 40px rgba(0, 0, 0, 0.05)"
    }
}));


export const StatDetails = () => {

    const classes = useStyles();

    return (
        <>
            <br />
            <Typography variant='h3' color='#FFFFFF'>
                Rewards & Counts
            </Typography>
            <br />
            <Grid container >
                {data.map((item, index) =>
                    <Grid  key={index} item  xs={12} md={4}  data-aos="flip-down"  >
                        <Box className={classes.box1}>
                            <Typography variant='h5' textAlign='center'>
                                {item.title}
                                <br />
                                -
                            </Typography>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </>
    )
}


const data = [
    {
        title: 'Builder Rewards'
    },
    {
        title: 'Level 1 Count'
    },
    {
        title: 'Level 2 Count'
    }
]