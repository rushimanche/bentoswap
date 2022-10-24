import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Swap from 'src/components/Swap/Swap';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Swap/>} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;