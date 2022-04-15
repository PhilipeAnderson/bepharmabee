import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../pages/Login';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator screenOptions={{ headerMode: 'screen' }}>
      <Screen
        name="Login"
        component={Login}
      />
    </Navigator>
  )
};