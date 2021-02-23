import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Colors } from '../styles'
import { HomeStackNavigator } from './HomeStack'
import { HistoryStackNavigator } from './HistoryStack'
import { AppTabParamList, RootStackParamList } from '../types'
import { RouteProp } from '@react-navigation/native'

const Tab = createMaterialBottomTabNavigator<AppTabParamList>()

const AppTab = ({ route }: { route: RouteProp<RootStackParamList, 'AppTab'> }) => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor={Colors.primary}
      inactiveColor={Colors.gray}
      barStyle={{ backgroundColor: Colors.white }}
    >
      <Tab.Screen name='Home' component={HomeStackNavigator} options={{ tabBarIcon: 'home' }} initialParams={{ name: route.params.name }} />
      <Tab.Screen name='History' component={HistoryStackNavigator} options={{ tabBarIcon: 'history' }} />
    </Tab.Navigator>
  )
}

export { AppTab }
