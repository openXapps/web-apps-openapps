import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Material UI
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

// Routes
import Home from './routes/Home';

// Config
import dark from './assets/dark';

function App() {
  const appTheme = createTheme(dark);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
