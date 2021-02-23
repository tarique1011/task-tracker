import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { WelcomeScreenWithRedux, CreateTaskScreenWithRedux } from '../screens'
import { HomeStackParamList } from '../types'

const HomeStack = createStackNavigator<HomeStackParamList>()

const HomeStackNavigator: React.FunctionComponent = () => {
  return (
    <HomeStack.Navigator
      headerMode='screen'
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <HomeStack.Screen
        name='Welcome'
        component={WelcomeScreenWithRedux}
        options={{ headerTitle: 'Hi Tarique!' }}
      />
      <HomeStack.Screen
        name='CreateTask'
        component={CreateTaskScreenWithRedux}
        options={({ route }) => ({
          headerTitle: route.params.taskName
        })}
      />
    </HomeStack.Navigator>
  )
}

export { HomeStackNavigator }
