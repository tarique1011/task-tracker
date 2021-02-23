import { SET_TASK_LIST } from '../actions/types'
import { TaskActionTypes, TaskType } from '../types'

const inititalState: { taskList: Array<TaskType> } = {
  taskList: []
}

const taskReducer = (state = inititalState, action: TaskActionTypes): { taskList: Array<TaskType> } => {
  switch (action.type) {
    case SET_TASK_LIST:
      return { ...state, taskList: action.payload }
    default:
      return state
  }
}

export { taskReducer }
