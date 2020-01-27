import React, { useState, useEffect } from 'react';

const Cookie = () => {
  return (
    <a
      href="https://en.wikipedia.org/wiki/HTTP_cookie"
      target="_blank"
      rel="noopener noreferrer"
    >cookies</a>
  )
};

const Storage = () => {
  return (
    <a
      href="https://en.wikipedia.org/wiki/Web_storage"
      target="_blank"
      rel="noopener noreferrer"
    >local storage</a>
  )
};

const Disclaimer = () => {
  const [hideDisclaimer, setHideDisclaimer] = useState(true);

  useEffect(() => {
    const cookies = decodeURIComponent(document.cookie);
    // console.log('HomeDisclaimer: cookies.........', cookies);
    if (cookies.indexOf('gd_openapps_accept=Yes') === -1) {
      setTimeout(() => {
        setHideDisclaimer(false);
      }, 1000);
    }

    // Effect clean-up function
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAccept = (e) => {
    let d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `gd_openapps_accept=Yes;expires=${expires};`;
    setHideDisclaimer(true);
  }

  return (
    <div className="fixed-bottom bg-dark">
      <div className="container">
        {hideDisclaimer ? (
          <div className="text-monospace text-center my-1">
            <small>No annoying ads! Enjoy <span className="h4">😃</span></small>
          </div>
        ) : (
            <>
              <div className="text-muted text-monospace text-small text-center">
                <small>We use <Cookie /> and <Storage /> to give you the best online experience. By continuing you accept.</small>
              </div>
              <div className="my-2">
                <button
                  className="btn btn-sm btn-block btn-outline-primary"
                  onClick={handleAccept}
                >I accept and remove this message for the next 30 days</button>
              </div>
            </>
          )}
      </div>
    </div>
  )
};

export default Disclaimer;