import React from 'react'
import { Box, Button } from '@mui/material'
import { useWeb3React } from '@web3-react/core';
import { Injected } from '../wallet/Injected';

export const AccountDetails = () => {

    const { activate } = useWeb3React();


    return (
        <Box mt='20px' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', overflow:'hidden' }} flexDirection='column' width='100%'
            data-aos="zoom-out-down"
        >
            <Button
                sx={{
                    backgroundColor: '#f24d07',
                    borderRadius: '20px',
                    boxShadow: "0 4px 15px 0 rgba(274, 148 , 39, 0.50)",
                    backdropFilter: "blur( 3px )",
                    WebkitBackdropFilter: "blur( 3px )",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                    padding: '10px 20px',
                    color: "#ffffff"
                }}
                onClick={() => {
                    activate(Injected)
                }}
            >
                Connect Wallet
            </Button>
        </Box>
    )
}
