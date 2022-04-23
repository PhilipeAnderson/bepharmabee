import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';


import { Splash } from './src/pages/Splash';
import { Login } from './src/pages/Login';
import { Dashboard } from './src/pages/Dashboard';
import { Product } from './src/pages/Product';
import { Specials } from './src/pages/Specials';
import { Vaccine } from './src/pages/Vaccine';
import { TesteApi } from './src/pages/TestApi';

import { AppRoutes } from './src/routes/app.routes';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  
  return (
    <ThemeProvider theme={ theme }>
        <AuthProvider>
          {/* <Splash /> */}
          {/* <Login /> */}
          {/* <Dashboard /> */}
          {/* <Product /> */}
          {/* <Specials /> */}
          {/* <Vaccine /> */}

          <TesteApi />
        </AuthProvider>
    </ThemeProvider>
  );
}

