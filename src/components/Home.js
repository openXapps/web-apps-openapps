import React from 'react';

// Sub-components
import HomeDisclaimer from './HomeDisclaimer';

// Utilities and Assets
import logo from '../assets/img-OpenApps.png';
import '../assets/Home.scss';

// Routing setup on home page
const Home = () => {
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
            className="list-group-item list-group-item-action gd-list-items"
            href="apps/web-apps-moviedb"
          >Movies info</a>
          <a
            className="list-group-item list-group-item-action gd-list-items"
            href="apps/web-apps-notes"
          >Notes</a>
          <a
            className="list-group-item list-group-item-action gd-list-items"
            href="apps/web-apps-bookmarker"
          >Bookmarker</a>
        </div>
        <p className="text-center text-monospace mx-auto w-75 mt-3">More apps coming soon...</p>
      </div>
      <HomeDisclaimer />
    </>
  );
};

export default Home;
