import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
      // justifyContent="center"
      position="fixed"
      bottom={10}
      // width={1}
    >
      {/* <Typography
        variant="caption"
      >No ads! Enjoy <span>{emojis.grinningFaceWithBigEyes}</span> and visit me on <Github /></Typography> */}
      <Paper>
        <Typography>We use <Cookie /> and <Storage /> to give you the best online experience. Do you accept?</Typography>
      </Paper>
    </Box>
  )
};

// <div className="fixed-bottom gd-disclaimer-bg">
//   <div className="container">
//     {cookiesAccepted ? (
//       <div
//         className="text-monospace text-center my-1"
//       >No ads! Enjoy <span className="h4">{emojis.grinningFaceWithBigEyes}</span> Find me on <Github />
//       </div>
//     ) : (
//         <>
//           <div className="text-monospace text-center">
//             <small>We use <Cookie /> and <Storage /> to give you the best online experience. Do you accept?</small>
//           </div>
//           <div className="my-2">
//             <button
//               className="btn btn-sm btn-block btn-outline-primary"
//               onClick={handleAcceptCookies}
//             >Yes I do</button>
//           </div>
//           <div className="mb-2 text-center"><small>this message will be removed for 30 days once accepted</small></div>
//         </>
//       )}
//   </div>
// </div>

export default Disclaimer;