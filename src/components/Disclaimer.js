import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Cookie = () => {
  return (
    <Link
      color="inherit"
      href="https://en.wikipedia.org/wiki/HTTP_cookie"
      target="_blank"
      rel="noopener noreferrer"
    >cookies</Link>
  )
};
const Storage = () => {
  return (
    <Link
      color="inherit"
      href="https://en.wikipedia.org/wiki/Web_storage"
      target="_blank"
      rel="noopener noreferrer"
    >local storage</Link>
  )
};
const Github = () => {
  return (
    <Link
      color="inherit"
      href="https://github.com/openXapps/web-apps-openapps"
      target="_blank"
      rel="noopener noreferrer"
    >GitHub</Link>
  )
};
const emojis = { grinningFaceWithBigEyes: '😃' };

const Disclaimer = ({ cookiesAccepted, handleAcceptCookies }) => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="fixed"
      bottom={0}
      width={1}
    >
      <Box sx={{
        bgcolor: 'background.paper',
        zIndex: 'tooltip',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        opacity: 0.9
      }}>
        {cookiesAccepted ? (
          <Typography
            textAlign="center"
            variant="caption"
            // sx={{ mb: 1 }}
          >No ads! Enjoy <span>{emojis.grinningFaceWithBigEyes}</span> and visit me on <Github /></Typography>
        ) : (
          <>
            <Typography
              textAlign="center"
              variant="caption"
            >This site makes use of <Cookie /> and <Storage /> to give you the best online experience. Do you accept?</Typography>
            <Button color="warning" onClick={handleAcceptCookies}>Yes I do</Button>
            <Typography
              textAlign="center"
              variant="caption"
            >this message will be removed for 30 days once accepted</Typography>
          </>
        )}
      </Box>
    </Box>
  )
};

export default Disclaimer;