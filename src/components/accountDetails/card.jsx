import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './styles'

export const Card = () => {

    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '100px', overflow: 'hidden', color: '#FFFFFF' }} >
            <Container fixed sx={{ padding: { xs: '50px auto', md: "100px auto" }, }}>
                <Grid container>
                    {Data.map((item, index) =>
                        <Grid key={index} item xs={12} md={4} >
                            <Box className={classes.card}>
                                <Typography variant='h5' textAlign='center'>
                                    {item.title}
                                </Typography>
                                <br />
                                <Typography variant='h4'>
                                    -
                                </Typography>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Box>
    )
}


const Data = [
    {
        title: 'Total Market Maker Staking Balance',
    },
    {
        title: 'Total Market Making Rewards Generated',
    },
    {
        title: 'Current Week Out Of 100',
    },
    {
        title: 'Market Staking Added For Week',
    },
    {
        title: 'Available Market Marker Staking Limit For Week',
    },
    {
        title: 'Last Reward Date',
    },
]