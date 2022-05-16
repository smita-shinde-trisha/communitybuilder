import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { NavLink } from 'react-router-dom';
import {useStyles} from './style'



export const MblNav = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { xs: 'block', md: 'none', } }} onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ color: '#ffffff', height: '20px', width: '20px', display: 'flex' }} />
      </IconButton>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            bgcolor: '#250D25',
            background: "rgba( 19, 11, 70, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
            WebkitBackdropFilter: "blur( 4px )",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            height: 'auto',
            borderRadius: '20px 20px 0 0',
            textAlign: 'center',
            gap: '20px',
            marginX: "auto",
            alignItems: 'center',
            padding: '10px'

          }
        }}
      >
        {data?.map((item, index) =>
          <Link key={index} href={item.link} target="_blank" sx={{
            textDecoration: 'none', marginLeft: "30px",
            cursor: 'pointer',
            color: '#FFFFFF',
          }}

          >
            {item.title}
          </Link>
        )}
        <NavLink to='FAQ' className={classes.navlink}>
          FAQ
        </NavLink>
      </SwipeableDrawer>
    </>
  );
}

const data = [
  {
    title: "Staking",
    link: "#"
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