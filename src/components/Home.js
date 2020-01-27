import React from 'react';

// Sub-components
import Disclaimer from './Disclaimer';

// Utilities and Assets
import logo from '../assets/img-OpenApps.png';

const Home = () => {
  const Github = () => {
    return (
      <a
        href="https://github.com/openXapps/web-apps-openapps"
        target="_blank"
        rel="noopener noreferrer"
      >GitHub</a>
    )
  };

  return (
    <>
      <div className="container">
        <div className="text-center text-monospace">
          <p
            className="text-secondary my-3 gd-title"
          ><img className="mr-2" src={logo} alt="Logo" id="gd-img-logo" />OpenApps</p>
          <p className="text-secondary gd-sub-title">open source utilities to be used freely</p>
        </div>
        <div className="list-group text-center mx-auto gd-list-items">
          <a
            className="list-group-item list-group-item-action gd-list-items bg-secondary text-white"
            href="apps/web-apps-moviedb"
          >Movies info</a>
          <a
            className="list-group-item list-group-item-action gd-list-items bg-secondary text-white"
            href="apps/web-apps-notes"
          >Quick notes</a>
          <a
            className="list-group-item list-group-item-action gd-list-items bg-secondary text-white"
            href="apps/web-apps-bookmarker"
          >Bookmarker</a>
        </div>
        <p className="text-center text-monospace mx-auto w-75 mt-3">More apps coming soon...</p>
        <p className="text-center text-monospace mx-auto w-75 mt-2">Find me on <Github /></p>
      </div>
      <Disclaimer />
    </>
  );
};

export default Home;
