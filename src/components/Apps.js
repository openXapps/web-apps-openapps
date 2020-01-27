import React from 'react';

const appListClassDefault = 'list-group-item list-group-item-action gd-list-items';

const Apps = ({ cookiesAccepted }) => {
  const [appListClass, setAppListClass] = React.useState(appListClassDefault);

  React.useEffect(() => {
    // console.log('Apps: cookiesAccepted...', cookiesAccepted);
    if (cookiesAccepted) setAppListClass(appListClassDefault + ' bg-secondary text-white');
    if (!cookiesAccepted) setAppListClass(appListClassDefault + ' bg-secondary text-mute disabled');
    // Effect clean-up function
    return () => true;
  }, [cookiesAccepted]);


  return (
    <div className="list-group text-center mx-auto gd-list-items">
      <a
        className={appListClass}
        href="apps/web-apps-moviedb"
      >Movies info</a>
      <a
        className={appListClass}
        href="apps/web-apps-notes"
      >Quick notes</a>
      <a
        className={appListClass}
        href="apps/web-apps-bookmarker"
      >Bookmarker</a>
    </div>
  );
};

export default Apps;
