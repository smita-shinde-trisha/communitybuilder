import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { Box, Container, Link, } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  navlink: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "18px",
    marginLeft: "30px",
    cursor: 'pointer',
  }
}));
export const FAQ = () => {

  const classes = useStyles()

  const faq = [
    {
      title: 'What is Total Market Maker Staking Balance?',
      desc: 'This is amount of NRGY currently staked into the contract.'
    },
    {
      title: 'What is Total Market Maker Rewards Generated?',
      desc: 'This is total amount of rewards generated till date including earned rewards and fees rewards in the contract for all staking holders.'
    },
    {
      title: 'What is Current Week Out of 100?',
      desc: 'This will tell the current week which is going on. The total week is 100.'
    },
    {
      title: 'What is Total Market Maker Staking Added for Week?',
      desc: 'This is the total amount of NRGY staked in current week.'
    },
    {
      title: 'What is Available Market Maker Staking for Week?',
      desc: 'This is the total amount of new NRGY that can be deposited into market maker staking each week. Once the limit is reached, no new coin can be deposited.'
    },
    {
      title: 'What is Last reward date?',
      desc: 'This signifies the last earned NRGY rewards distribution date.'
    },
    {
      title: 'What is current week limit is not reached?',
      desc: 'The limit will be rolled over to the next week.'
    },
    {
      title: 'What is Your staked NRGY?',
      desc: 'This is the amount of NRGY you’ve added to the staking contract.'
    },
    {
      title: 'What is Total NRGY Earned?',
      desc: 'This is amount of NRGY you’ve earned today. This amount will fluctuate as this week rewards are recalculated real time. If you withdraw any NRGY from the staking contract, you total NRGY will be reduced first before your staking share is affected.'
    },
    {
      title: 'What is NRGY available to claim?',
      desc: 'This is the amount of NRGY you can withdraw. This week’s NRGY rewards which is being calculated real time will not be available to claim until it’s finalized at the start of the next week.'
    },
    {
      title: 'What is Rewards earned this week?',
      desc: 'This shows your current week rewards calculated in real time which will be fluctuating. These will be available to claimed at the start of the next week after finalization.'
    },
    {
      title: 'What is Your Market Maker Staking Pool Share %?',
      desc: 'This shows your percentage in the pool. Earned NRGY rewards are considered while calculating pool share.'
    },
    {
      title: 'What is Your NRGY Balance?',
      desc: 'This is the amount of NRGY who have in your metamask wallet.'
    },
    {
      title: 'How can I see the most recent audit report?',
      desc: 'You can see audit report',
      link: <Link href="https://communitybuilder.on.fleek.co/media/files/NRGY%20Smart%20Contracts%20Audit.pdf" target="_blank" 
      color= '#FFFFFF' className={classes.navlink}>Here</Link>
    },
    {
      title: 'What happens to coins earned from staking each week? Do I need to pay to stake those?',
      desc: 'A snapshot is programmatically taken of your Earned NRGY balance at a different time each month. Based on this, a reward is generated that’s available to be claimed minus a 7.5% burn.'
    },
    {
      title: 'How can I find NRGY on Uniswap?',
      desc: 'You can visit here,',
      link: <Link href="https://v2.info.uniswap.org/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1" target="_blank" 
      color= '#FFFFFF' className={classes.navlink}>https://v2.info.uniswap.org/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1</Link>
    },
    {
      title: 'What is NRGY contract address?',
      link: <Link href="https://etherscan.io/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1"  target="_blank" 
      color= '#FFFFFF' className={classes.navlink}>https://etherscan.io/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1</Link>
    },
    {
      title: 'Explain the 25% builder advance?',
      desc: 'Since there is no company behind NRGY the community builder was created to increase awareness and increase market value of NRGY. Community building staker agree to advanced 25% of their staking deposit amount to a two-person builder team. The first Builder receives 15% paid directly their wallet and the second receives 10%.',
    },
    {
      title: 'Why do I pay 3 separate transactions to begin staking?',
      desc: 'The first two transaction is for approving NRGY Market maker Contract and Community builder Contract respectively. By approving, you allow your consent to the contract to spend coin on your behalf. Finally, the last transaction is the stake transaction.'
    },
    {
      title: 'Do I have full access to my funds? Elaborate',
      desc: 'NRGY platform is designed to be fully decentralized. In other words, there is no central ownership in the contract. Therefore, only you’ve access to your staked NRGY inside the contract which can be unstaked only by you.'
    },
    {
      title: 'How do I use MetaMask?',
      desc: 'MetaMask is a web extension, which allows you to manage your Ethereum private keys via your web browser. By doing so, it serves as a wallet for Ether and ERC20 tokens, and allows you to visit the distributed web of tomorrow in your browser today. Please visit here to setup your metamask,',
      link: <Link href="https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask"  
      color= '#FFFFFF' target="_blank" className={classes.navlink}>https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask</Link>
    },
    {
      title: 'Why do I get an error (insufficient funds)?',
      desc: 'This error signifies that you don’t have sufficient ether or NRGY tokens in your wallet to process the transaction.'
    },
    {
      title: 'How can I check AFTER I connect my wallet that the inviter address IS actually the one I was given?',
      desc: 'There’s puzzle icon in top right of Chrome. Click the icon, it will expand out a list of extensions installed. Then click the pin icon next to MetaMask and it will add it back to the extension’s toolbar.'
    },
    {
      title: 'Why does my MetaMask keep disappearing? How do I “pin it” to the front of chrome',
      desc: 'There’s puzzle icon in top right of Chrome. Click the icon, it will expand out a list of extensions installed. Then click the pin icon next to MetaMask and it will add it back to the extension’s toolbar.'
    },
    {
      title: 'How can I find NRGY on Uniswap?',
      desc: 'You can visit here',
      link: <Link href="https://v2.info.uniswap.org/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1" 
      color= '#FFFFFF' target="_blank" className={classes.navlink}>https://v2.info.uniswap.org/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1</Link>
    },
    {
      title: 'What is NRGY contract address?',
      link: <Link href="https://etherscan.io/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1"  target="_blank" 
      color= '#FFFFFF' className={classes.navlink}>https://etherscan.io/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1</Link>
    },
    {
      title: 'Why do I pay 3 separate transactions to begin staking?',
      desc: 'The first two transaction is for approving NRGY Market maker Contract and Community builder Contract respectively. By approving, you allow your consent to the contract to spend coin on your behalf. Finally, the last transaction is the stake transaction.'
    },
    {
      title: 'Do I have full access to my funds? Elaborate',
      desc: 'NRGY platform is designed to be fully decentralized. In other words, there is no central ownership in the contract. Therefore, only you’ve access to your staked NRGY inside the contract which can be unstaked only by you.'
    },
    {
      title: 'How do I use MetaMask?',
      desc: 'MetaMask is a web extension, which allows you to manage your Ethereum private keys via your web browser. By doing so, it serves as a wallet for Ether and ERC20 tokens, and allows you to visit the distributed web of tomorrow in your browser today. Please visit here to setup your metamask',
      link: <Link href=" https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask" 
      color= '#FFFFFF' target="_blank" className={classes.navlink}> https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask</Link>
    },

    {
      title: 'Why do I get an error (insufficient funds)?',
      desc: 'This error signifies that you don’t have sufficient ether or NRGY tokens in your wallet to process the transaction.'
    },
    {
      title: 'How can I check AFTER I connect my wallet that the inviter address IS actually the one I was given?',
      desc: 'You can visit here',
      link: <Link href="https://v2.info.uniswap.org/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1" 
      color= '#FFFFFF' target="_blank" className={classes.navlink}>https://v2.info.uniswap.org/token/0xc29acac647c63dbd8618e817d41ea9de69174ae1</Link>
    },
    {
      title: 'Why does my MetaMask keep disappearing? How do I “pin it” to the front of chrome',
      desc: <img src={require("../../ui/assets/accordion/faq1.png")} alt='' style={{ width: '100%' }} />
    },
    {
      title: 'What if I want two separate accounts (wallets) to buy NRGY. Eg. Personal and company. How can I do this? Do I need 2 separate devices?',
      desc: 'No, you don’t need two separate devices. Instead, you can create any number of accounts in MetaMask. Kindly visit here to create new accounts in MetaMask',
      link: <Link href="https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-Create-Additional-MetaMask-Accounts" 
      color= '#FFFFFF' target="_blank" className={classes.navlink}> https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-Create-Additional-MetaMask-Accounts</Link>
    },
    {
      title: 'I have some ridiculous high gas fee when I go to stake - what do I do?',
      desc: 'The gas fee is higher because of network congestion. You can choose to use a lower gas fees if it’s higher. There’s downside of choosing a lower gas fees, that there may be a probability that it will be pending for a long time.'
    },
    {
      title: 'Can I choose gas fees?',
      desc: <Typography variant='body1'>
        Confirming an action in the NRGY website brings up the MetaMask window ‘Confirm Transaction’.
        <br />
        02. Find ‘Gas Fee’.
        <br />
        03. Click ‘Edit’ next to ‘Gas Fee’ to set a custom Gas Price.
        <br />
        04. Next, you need to find the average Gas Price at that time on the Ethereum network.
        <br />
        05. In another tab, visit <Link href='https://ethgasstation.info/' 
    color= '#FFFFFF' target="_blank"  className={classes.navlink}>ETH Gas Station.
        </Link>
        <br />
        06. There you will find the ‘Recommended Gas Prices in Gwei’.
        <br />
        07. If you’re in a hurry, you can try Gas Price Standard/Std
        <br />
        08. Click on the fox logo in your browser to open the MetaMask confirmation window again.
        <br />
        09. In the Gas Price field, enter the price from ETH Gas Station.
        <br />
        10. Click ‘SAVE’ to save your custom gas fee.
        <br />
        11. Click ‘CONFIRM’ to submit your transaction.
        <br />
        12. That’s it!
      </Typography>
    },
    {
      title: 'I keep trying to stake but it won’t go through. How do I cancel the failed pending transactions?',
      desc: 'Please visit here to know the steps to cancel a pending transaction',
      link: <Link href='https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction#:~:text=To%20cancel%20the%20transaction%2C%20simply,refer%20to%20Eth%20Gas%20Station' target="_blank" className={classes.navlink}>
        https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction#:~:text=To%20cancel%20the%20transaction%2C%20simply,refer%20to%20Eth%20Gas%20Station
      </Link>
    },
  ]



  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', }}>
        <Container fixed sx={{ padding: { sm: 'auto 100px', md: 'auto 10px' } }}>
          <Typography variant="h2" color='#FFFFFF' marginY='50px'>
            FAQ's
          </Typography>
          <Box mt='10px'>
          {faq.map((item, index) =>
            <Accordion key={index}
              sx={{
                marginY: '20px',
                background: "rgba( 19, 11, 70, 0.25 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 4px )",
                WebkitBackdropFilter: "blur( 4px )",
                border: "1px solid rgba( 255, 255, 255, 0.10 )",
                borderRadius:'10px'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#0C153A' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"

              >
                <Typography variant='body1'
                  color='#FFFFFF' >{item?.title}</Typography>
              </AccordionSummary>
              <AccordionDetails >
                <Typography variant='body2' color='#f24d07' >
                  {item?.desc}
                </Typography >
                {item?.link}
              </AccordionDetails>
            </Accordion>
          )}
          </Box>
        </Container>
      </Box>
    </>
  )
}


