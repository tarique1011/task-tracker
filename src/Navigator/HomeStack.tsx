import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { WelcomeScreenWithRedux, CreateTaskScreenWithRedux } from '../screens'
import { AppTabParamList, HomeStackParamList } from '../types'
import { RouteProp } from '@react-navigation/native'

const HomeStack = createStackNavigator<HomeStackParamList>()

const HomeStackNavigator = ({ route }: { route: RouteProp<AppTabParamList, 'Home'>}) => {
  return (
    <HomeStack.Navigator
      headerMode='screen'
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <HomeStack.Screen
        name='Welcome'
        component={WelcomeScreenWithRedux}
        options={({ route }) => ({ headerTitle: `Hi ${route.params.name}!` })}
        initialParams={{ name: route.params.name }}
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
