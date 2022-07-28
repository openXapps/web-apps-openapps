// import { useEffect } from 'react';

import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// const appListClassDefault = 'list-group-item list-group-item-action gd-list-items bg-dark';
const appList = [
  {
    title: 'Movies info',
    description: 'Get movie details and submit your anonymous ratings',
    url: 'apps/web-apps-moviedb'
  }, {
    title: 'QuickNOTES',
    description: 'Make quick notes and save them to your device',
    url: 'apps/notes'
  }, {
    title: 'BookMARKER',
    description: 'Bookmark your favourite sites and save them to your device',
    url: 'apps/bookmarker'
  }, {
    title: 'CryptoPASS',
    description: 'Manage you passwords securely',
    url: 'apps/cryptopass'
  }
];

const Apps = ({ cookiesAccepted }) => {
  // const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const [listEnabled, setListEnabled] = useState(false);
  // const [appListClass, setAppListClass] = React.useState(appListClassDefault);

  // useEffect(() => {
  // console.log('Apps: cookiesAccepted...', cookiesAccepted);
  // if (cookiesAccepted) setListEnabled(true);
  // if (!cookiesAccepted) setListEnabled(false);
  // Effect clean-up function
  //   return () => true;
  // }, [cookiesAccepted]);

  return (
    // <Box width="100%" m={1}>
    <Paper sx={{ p: 2, mt: { xs: 1, sm: 2 } }}>
      <List>
        {appList.map((v, i) => {
          return (
            <div key={i}>
              <ListItem
                sx={{ mt: 1 }}
                button
                component="a"
                href={v.url}
              // disabled={!cookiesAccepted}
              // target="_blank"
              // rel="noopener"
              >
                <ListItemText
                  sx={{ pl: 1, textAlign: 'center' }}
                  primary={v.title}
                  primaryTypographyProps={{ variant: 'h6' }}
                  secondary={v.description}
                />
              </ListItem>
            </div>
          );
        })}
      </List>
      {/* </Box> */}
    </Paper>
  );
};

export default Apps;
