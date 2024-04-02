import { Grid } from '@mui/material';
import logo from '../files/interview_logo.svg';
import './Footer.css';

function Footer() {
    return (
      <footer className='footer'>
        <Grid container justifyContent={'space-evenly'}>
          <Grid item md={1} xs={1}>
            <img src={logo} alt="footer-logo" className='footerLogo' />
          </Grid>
        </Grid>
      </footer>
    );
  }
  
  export default Footer;