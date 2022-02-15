import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './src/routes/app.routes';
import { Login } from './src/pages/Login';
import { Splash } from './src/pages/Splash';
import { Product } from './src/pages/Product';

import { AuthProvider } from './src/hooks/auth';

export default function App() {
  
  return (
    <ThemeProvider theme={ theme }>
      

      <NavigationContainer>
        <AuthProvider>
          <Product />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

