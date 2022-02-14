import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Login } from './src/pages/Login';

export default function App() {
  
  return (
    <ThemeProvider theme={ theme }>
      <Login />
    </ThemeProvider>
  );
}

