import React from 'react';
import Apps from './Apps';
import Disclaimer from './Disclaimer';
import logo from '../assets/openapps.png';

const Home = () => {
  const [cookiesAccepted, setCookiesAccepted] = React.useState(true);

  React.useEffect(() => {
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
    <div className="container">
      <div className="text-center text-monospace">
        <p
          className="text-secondary my-3 gd-title"
        ><img className="mr-2" src={logo} alt="Logo" id="gd-img-logo" />OpenApps</p>
        <p className="text-secondary gd-sub-title">open source utilities to be used freely</p>
      </div>
      <Apps cookiesAccepted={cookiesAccepted} />
      <Disclaimer cookiesAccepted={cookiesAccepted} handleAcceptCookies={handleAcceptCookies} />
    </div>
  );
};

export default Home;
