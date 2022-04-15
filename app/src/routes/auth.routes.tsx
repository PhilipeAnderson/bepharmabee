import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator screenOptions={{ headerMode: 'screen' }}>
      <Screen
        // name="Login"
        // component={Login}
        name="Dashboard"
        component={Dashboard}
      />
    </Navigator>
  )
};