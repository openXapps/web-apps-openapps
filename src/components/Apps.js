import React from 'react';

const appListClassDefault = 'list-group-item list-group-item-action gd-list-items bg-dark';
const appList = [
  {
    title: 'Movies info',
    description: 'Get movie details and submit your anonymous ratings',
    url: 'apps/web-apps-moviedb'
  }, {
    title: 'Quick notes',
    description: 'Make quick notes and save them to your device',
    url: 'apps/notes'
  }, {
    title: 'Bookmarker',
    description: 'Bookmark your favourite sites and save them to your device',
    url: 'apps/bookmarker'
  }
];

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
      {appList.map((v, i) => {
        return (
          <a className={appListClass} href={v.url}>
            <div className="gd-list-items">{v.title}</div>
            <div className="text-muted h6">{v.description}</div>
          </a>
        )
      })}
    </div>
  );
};

export default Apps;
