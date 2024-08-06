import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './themes';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContect'; 
import './App.scss'
import "apexcharts/dist/apexcharts.css";


const App = () => {
  const { themeMode } = useTheme();
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </MuiThemeProvider>
  );
};

const RootApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;
