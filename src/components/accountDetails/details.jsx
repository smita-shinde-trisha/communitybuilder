import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

export const Details = () => {
    return (
        <Container fixed sx={{ padding:{xs:'50px auto',md:"100px auto"}}}>
        <Box sx={{ display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between'}}>
            <Box position='absolute' sx={{ display: 'flex', mt: '40%', ml: '-10%' }}>
                <img src={require("../../ui/assets/common/Group 6248.svg").default} alt='' />
            </Box>

            <Box marginY='20px' sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#250D25',
                background: "rgba( 19, 11, 70, 0.25 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 4px )",
                WebkitBackdropFilter: "blur( 4px )",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                borderRadius: '10px',
                gap: '20px',
                padding: '20px',
                width: { xs: '100%', md: '50%' }
            }}>
                <Typography variant='h3'>
                    Stake
                </Typography>
                <Typography variant='h4' color='secondary.main'>
                    Do your first stake to get your community building link
                </Typography>
                <Typography variant='h4' color='secondary.main'>
                    Invited by:
                </Typography>
                <TextField
                    placeholder='Invited by Address'
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px'
                    }}
                />
                <Button
                    sx={{
                        backgroundColor: '#f24d07',
                        borderRadius: '10px',
                        boxShadow: "0 4px 15px 0 rgba(274, 148 , 39, 0.50)",
                        backdropFilter: "blur( 3px )",
                        WebkitBackdropFilter: "blur( 3px )",
                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                        padding: '10px 20px',
                        color: "#ffffff"
                    }}
                    onClick={() => {
                        // activate(Injected)
                    }}
                >
                    Add nrgy to metamask
                </Button>
            </Box>
            <Box marginY='20px' sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#250D25',
                background: "rgba( 19, 11, 70, 0.25 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 4px )",
                WebkitBackdropFilter: "blur( 4px )",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                borderRadius: '10px',
                gap: '20px',
                padding: '20px',
                width: { xs: '100%', md: '40%' }
            }}>
                <Typography variant='h3'>
                    Market Values
                </Typography>
                <Typography variant='h4' color='secondary.main'>
                    1 NRGY = $ 0.47 USDC
                </Typography>
                <Typography variant='h4' color='secondary.main'>
                    Circulating Supply : 11111111
                </Typography>
                <Typography variant='h4' color='secondary.main'>
                    Maket Cap: $ 1000000
                </Typography>
            </Box>
        </Box>
        </Container>
    )
}
