import { combineReducers } from 'redux'
import { taskReducer } from './Task'

const rootReducer = combineReducers({
  task: taskReducer
})

// eslint-disable-next-line no-undef
export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
