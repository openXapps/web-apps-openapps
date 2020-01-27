import React from 'react';

const appListClassDefault = 'list-group-item list-group-item-action gd-list-items bg-secondary text-white';

const Apps = ({ cookiesAccepted }) => {
  const [appListClass, setAppListClass] = React.useState(appListClassDefault);

  React.useEffect(() => {
    if (!cookiesAccepted) setAppListClass(appListClassDefault);
    if (!cookiesAccepted) setAppListClass(appListClassDefault + ' disabled');

    // Effect clean-up function
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookiesAccepted]);

  console.log('Apps: cookiesAccepted...', cookiesAccepted);

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
