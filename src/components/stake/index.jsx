import { Box, Button, Container, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import InfoIcon from '@mui/icons-material/Info';

const useStyles = makeStyles((theme) => ({
    box1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        margin: '10px',
        height: '300px',
        gap: '10%',
        boxShadow: "14px 31px 40px rgba(0, 0, 0, 0.05)",

    },
    box2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        padding: '10px',
        height: '300px',
        borderRadius: '10px',
        width: '100%'
    }
}));


export const StakeDetails = () => {

    const classes = useStyles();
    const [show, setShow] = useState(false);

    return (
        <>
            <Container sx={{ padding: { xs: 'auto 10px', md: 'auto 100px', }, mt: '100px' }}>
                <Grid container >
                    <Grid item xs={12} sm={6} data-aos="zoom-in-up"  >
                        <Box className={classes.box1}>
                            <Box className={classes.box2} >
                                <Typography variant='h4' textAlign='center'>
                                    Stake with Ethereum USDC on Polygon
                                </Typography>
                                <Box>
                                    <Typography variant='h5' textAlign='center'>
                                        USDC Balance
                                        <br />
                                        -
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', alignItems: 'center' }}>
                                    <TextField
                                        size='small'
                                        type='name'
                                        placeholder='Enter USDC Amount'
                                    />
                                    <Button variant='contained' sx={{ borderRadius: '10px', bgcolor: '#0C153A', color: 'white', }} >
                                        Stake on Polygon
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="zoom-in-up" >
                        <Box className={classes.box1}>
                            <Box className={classes.box2} >
                                <Typography variant='h4' textAlign='center'>
                                    NRGY Wallet
                                </Typography>
                                <Box>
                                    <Typography variant='h5' textAlign='center'>
                                        NRGY Balance
                                        <br />
                                        -
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', alignItems: 'center' }}>
                                    <TextField
                                        size='small'
                                        type='name'
                                        placeholder='Enter NRGY Amount'
                                    />
                                    <Button variant='contained' sx={{ borderRadius: '10px', bgcolor: '#0C153A', color: 'white' }} >
                                        Stake
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="zoom-in-up" >
                        <Box className={classes.box1}>
                            <Box className={classes.box2} >
                                <Typography variant='h4' textAlign='center'>
                                    Unstake
                                </Typography>
                                <Box>
                                    <Typography variant='h5' textAlign='center'>
                                        Unstake Balance
                                        <br />
                                        -
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', }}>
                                    <TextField
                                        size='small'
                                        type='name'
                                        placeholder='Enter NRGy Amount'
                                    />
                                    < Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Button variant='contained' sx={{ borderRadius: '10px', bgcolor: '#0C153A', color: 'white', alignItems: 'center' }} >
                                            Unstake
                                        </Button>
                                        <br />
                                        <Box sx={{display:'flex', justifyContent:'center', width:'30px'}}
                                            onMouseOver={() => setShow(true)}
                                            onMouseOut={() => setShow(false)}
                                        >
                                            <InfoIcon sx={{ color: '#0C153A' }} />
                                        </Box>
                                    </Box>
                                    {
                                        show
                                        &&
                                        <Typography display={show ? ("block") : ("none")} mt="10px"  >
                                            7.5% burn fees will be applied
                                        </Typography>
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} data-aos="zoom-in-up"  >
                        <Box className={classes.box1}>
                            <Box className={classes.box2} >
                                <Typography variant='h4' textAlign='center'>
                                    Migrate
                                </Typography>
                                <Box>
                                    <Typography variant='h5' textAlign='center'>
                                        USDC Balance
                                        <br />
                                        -
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', alignItems: 'center' }}>
                                    <TextField
                                        size='small'
                                        type='name'
                                        placeholder='Enter NRGY Amount'
                                    />
                                    <Button variant='contained' sx={{ borderRadius: '10px', bgcolor: '#0C153A', color: 'white', }} >
                                        Migrate
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
