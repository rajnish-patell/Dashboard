import { createTheme } from '@mui/material/styles';

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      light: '#f2f6ff'
    },
    secondary: {
      main: '#3b5eff',
      light: '#bdcaff',
      lighter: '#e4e7f0',
    },
    success: {
      main: '#22C55E',
      light: '#77ED8B',
      lighter: '#D3FCD2',
      dark: '#118D57',
      darker: '#065E49'
    },
    warning: {
      main: '#FFAB00',
      light: '#FFD666',
      lighter: '#FFF5CC',
      dark: '#B76E00',
      darker: '#7A4100'
    },
    error: {
      main: '#FF5630',
      light: '#FFAC82',
      lighter: '#FFE9D5',
      dark: '#B71D18',
      darker: '#7A0916'
    },
    pink: {
      main: '#ed399f',
      light: '#f4a1b6',
      lighter: '#fce4e8',
      dark: '#c2185b',
      darker: '#880e4f'
    },
    background: {
      default: '#fdfdff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
  typography: {
    h1: {
      fontSize: '64px',
      lineHeight: 1.25,
      fontWeight: 800,
      color: '#000000',
    },
    h2: {
      fontSize: '48px',
      lineHeight: 1.33,
      fontWeight: 800,
      color: '#000000',
    },
    h3: {
      fontSize: '32px',
      lineHeight: 1.50,
      fontWeight: 700,
      color: '#000000',
    },
    h4: {
      fontSize: '24px',
      lineHeight: 1.50,
      fontWeight: 700,
      color: '#000000',
    },
    h5: {
      fontSize: '20px',
      lineHeight: 1.50,
      fontWeight: 700,
      color: '#000000',
    },
    h6: {
      fontSize: '18px',
      lineHeight: 1.56,
      fontWeight: 600,
      color: '#000000',
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: 1.50,
      fontWeight: 600,
      color: '#000000',
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: 1.57,
      fontWeight: 600,
      color: '#000000',
    },
    body1: {
      fontSize: '14px',
      lineHeight: 1.50,
      fontWeight: 400,
      color: '#000000',
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.57,
      fontWeight: 400,
      color: '#555555',
    },
    caption: {
      fontSize: '12px',
      lineHeight: 1.50,
      fontWeight: 400,
      color: '#000000',
    },
    overline: {
      fontSize: '12px',
      lineHeight: 1.50,
      fontWeight: 700,
      color: '#000000',
    },
    button: {
      fontSize: '14px',
      lineHeight: 1.71,
      fontWeight: 700,
      color: '#000000',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px', // Adjust padding
        },
      },
    },
  }
});


// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#202028',
      light: '#1f2027'
    },
    secondary: {
      main: '#3b5eff',
      light: '#bdcaff',
      lighter: '#4a4a5a',
    },
    success: {
      main: '#22C55E',
      light: '#77ED8B',
      lighter: '#D3FCD2',
      dark: '#118D57',
      darker: '#065E49'
    },
    error: {
      main: '#FF5630',
      light: '#FFAC82',
      lighter: '#FFE9D5',
      dark: '#B71D18',
      darker: '#7A0916'
    },
    warning: {
      main: '#FFAB00',
      light: '#FFD666',
      lighter: '#FFF5CC',
      dark: '#B76E00',
      darker: '#7A4100'
    },
    pink: {
      main: '#ed399f',
      light: '#f4a1b6',
      lighter: '#fce4e8',
      dark: '#c2185b',
      darker: '#880e4f'
    },
    background: {
      default: '#141414',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
  typography: {
    h1: {
      fontSize: '64px',
      lineHeight: 1.25,
      fontWeight: 800,
      color: '#ffffff',
    },
    h2: {
      fontSize: '48px',
      lineHeight: 1.33,
      fontWeight: 800,
      color: '#ffffff',
    },
    h3: {
      fontSize: '32px',
      lineHeight: 1.50,
      fontWeight: 700,
      color: '#ffffff',
    },
    h4: {
      fontSize: '24px',
      lineHeight: 1.50,
      fontWeight: 700,
      color: '#ffffff',
    },
    h5: {
      fontSize: '20px',
      lineHeight: 1.50,
      fontWeight: 700,
      color: '#ffffff',
    },
    h6: {
      fontSize: '18px',
      lineHeight: 1.56,
      fontWeight: 600,
      color: '#ffffff',
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: 1.50,
      fontWeight: 600,
      color: '#ffffff',
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: 1.57,
      fontWeight: 600,
      color: '#ffffff',
    },
    body1: {
      fontSize: '14px',
      lineHeight: 1.50,
      fontWeight: 400,
      color: '#ffffff',
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.57,
      fontWeight: 400,
      color: '#bbbbbb',
    },
    caption: {
      fontSize: '12px',
      lineHeight: 1.50,
      fontWeight: 400,
      color: '#ffffff',
    },
    overline: {
      fontSize: '12px',
      lineHeight: 1.50,
      fontWeight: 700,
      color: '#ffffff',
    },
    button: {
      fontSize: '14px',
      lineHeight: 1.71,
      fontWeight: 700,
      color: '#ffffff',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px', // Adjust padding
        },
      },
    },
  }
});
