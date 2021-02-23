import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen, SignupScreen } from '../screens'
import { AppTab } from './AppTab'
import { RootStackParamList } from '../types'

const RootStack = createStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='SplashScreen' component={SplashScreen} />
        <RootStack.Screen name='SignupScreen' component={SignupScreen} />
        <RootStack.Screen name='AppTab' component={AppTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export { AppNavigator }
