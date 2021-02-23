import { TaskType } from '../types'

type HomeStackParamList = {
  Welcome: { name: string },
  CreateTask: { taskName: string }
}

type HistoryStackParamList = {
  TaskList: undefined,
  SingleTask: { task: TaskType}
}

type AppTabParamList = {
  Home: { name: string },
  History: undefined
}

type RootStackParamList = {
  SplashScreen: undefined,
  SignupScreen: undefined,
  AppTab: { name: string }
}

export type {
  HomeStackParamList,
  HistoryStackParamList,
  AppTabParamList,
  RootStackParamList
}
