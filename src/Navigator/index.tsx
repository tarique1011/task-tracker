import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen } from '../screens'

const RootStack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Splash' component={SplashScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export { AppNavigator }
