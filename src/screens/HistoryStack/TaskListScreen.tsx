import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { connect } from 'react-redux'
import { TaskList } from '../../components'
import { AppState } from '../../reducers'
import { HistoryStackParamList, TaskType } from '../../types'

interface TaskListScreenProps {
  navigation: StackNavigationProp<HistoryStackParamList, 'TaskList'>
}

interface LinkStateProps {
  taskList: Array<TaskType>
}

type Props = TaskListScreenProps & LinkStateProps

class TaskListScreen extends React.Component<Props> {
  openSingleTask = (task: TaskType) => {
    this.props.navigation.navigate('SingleTask', { task })
  }

  render () {
    const { taskList } = this.props
    return (
      <TaskList
        taskList={taskList}
        openSingleTask={this.openSingleTask}
      />
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    taskList: state.task.taskList
  }
}

const TaskListScreenWithRedux = connect(mapStateToProps, null)(TaskListScreen)

export { TaskListScreenWithRedux }
