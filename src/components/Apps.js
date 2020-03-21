import React from 'react';

const appListClassDefault = 'list-group-item list-group-item-action gd-list-items bg-dark';

const Apps = ({ cookiesAccepted }) => {
  const [appListClass, setAppListClass] = React.useState(appListClassDefault);

  React.useEffect(() => {
    // console.log('Apps: cookiesAccepted...', cookiesAccepted);
    if (cookiesAccepted) setAppListClass(appListClassDefault + ' text-white');
    if (!cookiesAccepted) setAppListClass(appListClassDefault + ' text-mute disabled');
    // Effect clean-up function
    return () => true;
  }, [cookiesAccepted]);


  return (
    <div className="list-group text-center mx-auto">
      <a
        className={appListClass}
        href="apps/web-apps-moviedb"
      >
        <div className="gd-list-items">Movies info</div>
        <div className="text-muted h6">Get movie details and submit your anonymous ratings</div>
      </a>
      <a
        className={appListClass}
        href="apps/notes"
        >
          <div className="gd-list-items">Quick notes</div>
          <div className="text-muted h6">Make quick notes and save them to your device</div>
        </a>
      <a
        className={appListClass}
        href="apps/web-apps-bookmarker"
        >
          <div className="gd-list-items">Bookmarker</div>
          <div className="text-muted h6">Bookmark your favourite sites and save them too your device</div>
        </a>
    </div>
  );
};

export default Apps;
