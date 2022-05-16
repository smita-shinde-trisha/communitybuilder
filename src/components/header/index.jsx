import { AppBar, Box, Link, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { MblNav } from './MblNav';
import { useStyles } from './style';

export const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' color='transparent'
                sx={{
                    padding: '5px 15px',
                    marginX: 'auto',
                    bgcolor: '#250D25',
                    background: "rgba( 19, 11, 70, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    WebkitBackdropFilter: "blur( 4px )",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                }}
                data-aos="fade-down"
            >
                <Toolbar className={classes.toolbar}>
                    <NavLink to='/'>
                        <img src={require("../../ui/assets/banner/logo.png")} alt='' style={{ width: '200px', height: '60px', }} />
                    </NavLink>
                    <Box flexDirection='row' sx={{ display: { xs: 'none', md: 'block' }, }}
                    >
                        {data.map((item, index) =>
                            <>
                                <Link key={index} href={item.link} target="_blank" sx={{
                                    textDecoration: 'none', marginLeft: "30px",
                                    cursor: 'pointer',
                                    color: '#ffffff',
                                    fontFamily: 'Josefin Sans'
                                }}
                                >
                                    {item.title}
                                </Link>
                            </>
                        )}
                        <NavLink to='FAQ' className={classes.navlink}>
                            FAQ
                        </NavLink>
                    </Box>
                    <MblNav />
                </Toolbar>
            </AppBar>
        </>
    )
}

const data = [
    {
        title: "Staking",
        link: '/media/files/NRGY_Overview.pdf'
    },
    {
        title: "OverView",
        link: "/media/files/NRGY_Overview.pdf"
    },
    {
        title: "Minting Schedule",
        link: "/media/files/NRGY%20Minting%20Schedule.pdf"
    },
    {
        title: "Uniswap",
        link: "https://v2.info.uniswap.org/pair/0x51bf9908dac4a283d017edc071d954ec3a4b1376"
    },
]