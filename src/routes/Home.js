import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Apps from '../components/Apps';
import Disclaimer from '../components/Disclaimer';
import logo from '../assets/openapps.png';

const Home = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(true);

  useEffect(() => {
    const cookies = decodeURIComponent(document.cookie);
    // console.log('Home: cookies...', cookies);
    if (!cookiesAccepted && cookies.indexOf('gd_openapps_accept=Yes') > -1) setCookiesAccepted(true);
    if (cookiesAccepted && cookies.indexOf('gd_openapps_accept=Yes') === -1) setCookiesAccepted(false);
    // Effect clean-up function
    return () => true;
  }, [cookiesAccepted]);

  const handleAcceptCookies = (e) => {
    let d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    // d.setTime(d.getTime() + (60 * 1000)); // Test cookie
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `gd_openapps_accept=Yes;expires=${expires};`;
    setCookiesAccepted(true);
  }

  return (
    <Container maxWidth="md">
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" my={2}>
        <Box component="img" src={logo} alt="Logo" sx={{ width: { xs: 40, sm: 64 }, height: { xs: 40, sm: 64 } }} />
        <Typography variant="h4">OpenApps</Typography>
      </Stack>
      <Typography textAlign="center">open source utilities to be used freely</Typography>
      <Apps cookiesAccepted={cookiesAccepted} />
      <Disclaimer cookiesAccepted={cookiesAccepted} handleAcceptCookies={handleAcceptCookies} />
    </Container>
  );
};

export default Home;
