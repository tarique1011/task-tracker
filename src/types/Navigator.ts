import { TaskType } from '../types'

type HomeStackParamList = {
  Welcome: undefined,
  CreateTask: { taskName: string }
}

type HistoryStackParamList = {
  TaskList: undefined,
  SingleTask: { task: TaskType}
}

export type {
  HomeStackParamList,
  HistoryStackParamList
}
