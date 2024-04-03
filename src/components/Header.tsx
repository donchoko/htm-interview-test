import './Header.css';
import logo from '../files/interview_logo.svg';
import { useNavigate } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import { AppBar,Grid, Link, Stack } from '@mui/material';

function Header() {
  const navigate = useNavigate()
  const onLogoClick = () => navigate('/');
  return (
    <AppBar className='header' position='fixed' component="nav" elevation={0}>
      <header className='header'>
        <Grid container justifyContent={'center'}>
          <Grid item md={4}>
            <div className='logo'>
              <img src={logo} alt="header-logo" onClick={onLogoClick} />
            </div>
          </Grid>
          <Grid item container md={3} xs={7} className='navbar' justifyContent={'space-around'}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about">
              <Stack direction="row" alignItems="center" gap={1}>
                Code <CodeIcon fontWeight={"bold"} />
              </Stack>
            </Link>
          </Grid>
        </Grid>
      </header>
    </AppBar>
  );
}

export default Header;