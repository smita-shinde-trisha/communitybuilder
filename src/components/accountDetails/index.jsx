import React from 'react'
import { useWeb3React } from '@web3-react/core';
import { Box, Container, Divider, Link, Typography } from '@mui/material';
import { useStyles } from './styles';
import { Details } from './details';
import { Card } from './card';

export const AccountDetails = () => {
    const { account, balance } = useWeb3React();
    const classes = useStyles();


    return (
        <Box sx={{ display: 'flex', marginTop: '100px', overflow:'hidden' }} >
            <Container fixed sx={{ padding:{xs:'50px auto',md:"100px auto"}, color:'#FFFFFF' }}>
                <Typography variant='h2' mt='50px'>
                    Account Details
                </Typography>
                <br />
                <Box  divider={<Divider orientation="vertical" flexItem />} flexDirection={{ xs: 'column', md: 'row' }} sx={{ display: 'flex', flexWrap: 'wrap',  alignItems: 'center', justifyContent: 'center' }} >
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px', }} >
                        <Typography variant='h3' color='#FFFFFF'>
                            Your NRGY wallet address:
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }} >
                        <Typography variant='h5' color='#f24d07'>
                            {account}
                        </Typography>
                        <Typography variant='h5' color='#ffffff'>
                            {balance}
                        </Typography>
                    </Box>
                </Box>
                <Details />
                <Card />
                <Box>
                    <Typography variant='body2'>
                        *Please, double check your inviter address if you're a new user. If not identical, kindly refresh the page to ensure proper credit
                    </Typography>
                    <Typography variant='body2'>
                        **Is your transaction slow? Speed up or increase your gas.
                    </Typography>
                    <Box sx={{ flexDirection: 'column', display: 'flex', gap: '20px', mt: '10px' }}>
                        <Link
                            href="https://etherscan.io/txsPending?a=0xb391078acae40c5f5256828a6a614ad00d31e50d&m=hf"
                            target="_blank"
                            className={classes.link}
                            style={{ color: '#f24d07' }}
                        >
                            Click here for a list of pending stakes.
                        </Link>
                        <Link
                            href="https://nrgypoly.on.fleek.co/#/"
                            target="_blank"
                            className={classes.link}
                            style={{ color: '#ff4f03', fontSize: { xs: '10px', md: '20px' }, lineHeight: { xs: '10px', md: '15px' } }}
                        >
                            NRGY Staked Balance on Polygon can be viewed here
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
