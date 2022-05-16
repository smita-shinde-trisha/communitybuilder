import React from 'react'
import { AccountDetails } from '../accountDetails'
import { Banner } from '../banner'
import { Navbar } from '../header'
import { StakeDetails } from '../stake'
import { Statistics } from '../statistics'
export const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <AccountDetails />
            <StakeDetails />
            <Statistics />
        </>
    )
}
