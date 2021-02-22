import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, HistoryScreen } from '../screens'

const Tab = createBottomTabNavigator()

const AppTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='History' component={HistoryScreen} />
    </Tab.Navigator>
  )
}

export { AppTab }
