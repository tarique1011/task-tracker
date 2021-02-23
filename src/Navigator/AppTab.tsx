import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { HistoryScreen } from '../screens'
import { Colors } from '../styles'
import { HomeStackNavigator } from './HomeStack'

const Tab = createMaterialBottomTabNavigator()

const AppTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor={Colors.primary}
      inactiveColor={Colors.gray}
      barStyle={{ backgroundColor: Colors.white }}
    >
      <Tab.Screen name='Home' component={HomeStackNavigator} options={{ tabBarIcon: 'home' }} />
      <Tab.Screen name='History' component={HistoryScreen} options={{ tabBarIcon: 'history' }} />
    </Tab.Navigator>
  )
}

export { AppTab }
