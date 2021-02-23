import { SET_TASK_LIST } from '../actions/types'
import { TaskType } from '../types'

export interface setTaskList {
  type: typeof SET_TASK_LIST,
  payload: Array<TaskType>
}

export type TaskActionTypes = setTaskList
