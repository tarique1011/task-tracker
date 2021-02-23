import { SET_TASK_LIST } from './types'
import { TaskActionTypes, TaskType } from '../types'

export const setTaskList = (taskList: Array<TaskType>): TaskActionTypes => {
  return {
    type: SET_TASK_LIST,
    payload: taskList
  }
}
