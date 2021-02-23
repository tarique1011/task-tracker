import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen } from '../screens'
import { AppTab } from './AppTab'

const RootStack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='AppTab' component={AppTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export { AppNavigator }
