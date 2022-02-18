import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Dashboard } from '../pages/Dashboard';
import { Specials } from '../pages/Specials';
import { Product } from '../pages/Product';

export function Routes() {
  return(
    <Navigator screenOptions={{ headerMode: 'screen' }}>
      <Screen
        name='Home'
        component={Dashboard}
      />
      <Screen
        name='Especiais'
        component={Specials}
      />
      <Screen
        name='Produtos'
        component={Product}
      />
    </Navigator>
  )
}