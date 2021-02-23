import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { WelcomeScreen, CreateTaskScreen } from '../screens'
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
        component={WelcomeScreen}
        options={{ headerTitle: 'Hi Tarique!' }}
      />
      <HomeStack.Screen
        name='CreateTask'
        component={CreateTaskScreen}
        options={({ route }) => ({
          headerTitle: route.params.taskName
        })}
      />
    </HomeStack.Navigator>
  )
}

export { HomeStackNavigator }
