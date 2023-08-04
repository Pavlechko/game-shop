import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { theme } from './utils/theme';
import HomePage from './pages/Home.page';
import RegistrationPage from './pages/Registration.page';
import LoginPage from './pages/Login.page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="*" element={'NotFoundPage /'} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
