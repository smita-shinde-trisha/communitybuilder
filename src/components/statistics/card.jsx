import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { useStyles } from './style';



export const Card = () => {

    const classes = useStyles();
    const [active, setActive] = React.useState(false)
    const [activeComp, setActiveComp] = React.useState("")

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
            <Container sx={{ padding: { md: 'auto 100px', xs: 'auto 10px' }, color: '#FFFFFF' }}>

                <Box position='absolute' sx={{ display: 'flex', mt: '40%', ml:'-10%' }}>
                    <img src={require("../../ui/assets/common/Group 6248.svg").default} alt='' />
                </Box>
                <Grid container>
                    {Data.map((item, index) =>
                        <Grid key={index} item xs={12} md={4} >
                            <Box className={classes.card}>
                                <Typography variant='h5' textAlign='center'>
                                    {item.title}
                                </Typography>
                                <IconButton>
                                    <InfoIcon
                                        onMouseOut={() => { setActive(false); setActiveComp("") }}
                                        onMouseOver={() => { setActive(true); setActiveComp(index) }}
                                        sx={{ color: 'white' }}
                                    />
                                </IconButton>
                                <Typography className={classes.hover_box} display={activeComp === index && active ? ("block") : ("none")} textAlign='center' >{item.alert}</Typography>
                                <br />
                                <Typography variant='h4'>
                                    -
                                </Typography>
                            </Box>
                        </Grid>
                    )}
                    {Data1.map((item, index) =>
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
        title: 'Your staked NRGY',
        alert: '25% goes to your community builder'
    },
    {
        title: 'Your Earned Rewards Balance',
        alert: 'Earns compounding yields if not unstaked for 30 days'
    },
    {
        title: 'NRGY Available to claim',
        alert: '7.5% burn fees will be applied'
    },
    {
        title: 'Your expected rewards this week',
        alert: 'calculated real time'
    },
]

const Data1 = [
    {
        title: 'Your mmarker staking pool share',
    },
    {
        title: 'The NGRY balance in your wallet',
    },
]