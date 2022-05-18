import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material'
import { AccountDetails } from './comp';


export const Banner = () => {

    return (
        <>
            <Box position='relative' display='flex' alignContent='center' justifyContent="center">
                <Container fixed sx={{ padding: { md: '100px auto', xs: '10px auto' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                    <Grid container sx={{ padding: '100px 0 0 0', flexWrap: 'wrap-reverse', display: 'flex', justifyContent: 'center' }} >
                        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center' }} data-aos="fade-down-right" >
                            <img src={require("../../ui/assets/banner/landing-header-dash.png")} alt='' style={{ width:'90%' }} />
        
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} data-aos="fade-down-left">
                            <Typography variant='h1' color='#FFFFFF' width={{ xs: '100%', md: '60%' }}>
                                WELCOME TO THE
                                COMMUNITY BUILDER SITE!
                            </Typography>
                                <Box position='absolute' sx={{ display: 'flex', ml: '43%', mt: '-25%' }}>
                                    <img src={require("../../ui/assets/common/Group 6248.svg").default} alt='' />
                                </Box>
                            <br />
                            <Typography variant='h4' color='#EE6328' width={{ xs: '100%', md: '80%' }}> 
                                Start staking with NRGY to get rewarded.
                                <br />
                                For assistance, reach out to your community builder or Telegram Support Channel.
                                <br />
                                Whenever you stake 25% of USDC will go to grow your community. We always want to thank our community builders for their efforts in educating and assisting new users.
                            </Typography>
                            <AccountDetails />
                        </Grid>
                    </Grid>
                    <Box position='absolute' sx={{ display: 'flex', mr: '70%', mt: '30%' }}>
                        <img src={require("../../ui/assets/common/Group 6248.svg").default} alt='' />
                    </Box>
                </Container>
            </Box>
        </>
    )
}
