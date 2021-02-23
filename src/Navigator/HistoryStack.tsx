import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { TaskListScreenWithRedux, SingleTaskScreenWithRedux } from '../screens'
import { HistoryStackParamList } from '../types'

const HistoryStack = createStackNavigator<HistoryStackParamList>()

const HistoryStackNavigator: React.FunctionComponent = () => {
  return (
    <HistoryStack.Navigator
      headerMode='screen'
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <HistoryStack.Screen
        name='TaskList'
        component={TaskListScreenWithRedux}
        options={{ headerTitle: 'Your Tasks' }}
      />
      <HistoryStack.Screen
        name='SingleTask'
        component={SingleTaskScreenWithRedux}
        options={({ route }) => ({
          headerTitle: route.params.task.taskName
        })}
      />
    </HistoryStack.Navigator>
  )
}

export { HistoryStackNavigator }
