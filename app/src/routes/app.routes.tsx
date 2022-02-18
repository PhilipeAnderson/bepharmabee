import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons, FontAwesome, Fontisto } from '@expo/vector-icons';
import { useTheme } from 'styled-components';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen } = createBottomTabNavigator();

import { Specials } from '../pages/Specials'
import { Dashboard } from '../pages/Dashboard';
import { Product } from '../pages/Product';


export function AppRoutes() {
  const theme = useTheme();
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          height: 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 10,
          backgroundColor: theme.colors.backgroundDark 
        }  
      }}
    >
      <Screen 
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons 
            name="home"
            size={size}
            color={color}
            />
          )
        }}
      />
      <Screen 
        name="Especiais"
        component={Specials}
        options={{
          tabBarIcon: (({ size, color }) => 
            <FontAwesome
              name="wheelchair"
              size={size}
              color={color}
            />  
          )
        }}
      />
      <Screen 
        name="Vacinas"
        component={Product}
        options={{
          tabBarIcon: (({ size, color }) => 
            <Fontisto
              name="injection-syringe"
              size={size}
              color={color}
            />  
          )
        }}
      />
    </Navigator>
  )
};