import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Card } from './card'
import { StatDetails } from './count'

export const Statistics = () => {
  return (
    <Container sx={{ mt: '100px', padding: { md: 'auto 100px', xs: 'auto 10px' }, }}>
      <Box position='absolute' sx={{ display: 'flex', ml: '20%' }}>
        <img src={require("../../ui/assets/common/Group 6248.svg").default} alt='' />
      </Box>
      <Typography variant='h2' color='#FFFFFF'  >
        My Statistics
      </Typography>
      <br />
      <Card />
      <br />
      <StatDetails />
    </Container>
  )
}
