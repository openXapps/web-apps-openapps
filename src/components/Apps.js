import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
    description: 'Manage your passwords securely',
    url: 'apps/cryptopass'
  }
];

const Apps = ({ cookiesAccepted }) => {
  return (
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
                disabled={!cookiesAccepted}
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
    </Paper>
  );
};

export default Apps;
