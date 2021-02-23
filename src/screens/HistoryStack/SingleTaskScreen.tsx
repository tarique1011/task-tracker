import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { HistoryStackParamList, TaskType } from '../../types'
import { SingleTask } from '../../components'
import { connect } from 'react-redux'
import { setTaskList } from '../../actions'
import { AppState } from '../../reducers'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface SingleTaskScreenProps {
  navigation: StackNavigationProp<HistoryStackParamList, 'SingleTask'>,
  route: RouteProp<HistoryStackParamList, 'SingleTask'>
}

interface LinkStateProps {
  taskList: Array<TaskType>
}

interface DispatchProps {
  setTaskList: (taskList: Array<TaskType>) => void
}

type Props = SingleTaskScreenProps & LinkStateProps & DispatchProps

interface SingleTaskScreenState {
  editable: boolean,
  taskName: string,
  error: boolean,
  errorMessage: string,
  successMessage: string
}

class SingleTaskScreen extends React.Component<Props, SingleTaskScreenState> {
  constructor (props: Props) {
    super(props)
    const { task } = this.props.route.params
    this.state = {
      editable: false,
      taskName: task.taskName,
      error: false,
      errorMessage: '',
      successMessage: ''
    }
  }

  editTask = () => {
    this.setState({ editable: true, successMessage: '' })
  }

  handleOnChangeText = (taskName: string) => {
    if (this.state.taskName) {
      this.setState({ error: false, errorMessage: '' })
    }
    this.setState({ taskName })
  }

  changeTaskName = () => {
    const { taskName } = this.state
    const { taskList } = this.props
    if (taskName) {
      const filter = taskList.filter(item => item.taskName === taskName)
      if (filter.length !== 0 && taskName !== this.props.route.params.task.taskName) {
        this.setState({ error: true, errorMessage: 'Task name already exists.' })
        return
      }
      if (taskName !== this.props.route.params.task.taskName) {
        const newTaskList = taskList.map((item: TaskType) => {
          if (this.props.route.params.task.taskName === item.taskName) {
            this.props.navigation.setParams({ task: { ...item, taskName } })
            return { ...item, taskName }
          }
          return item
        })
        this.props.setTaskList(newTaskList)
        AsyncStorage.setItem('taskList', JSON.stringify(newTaskList))
        this.setState({ successMessage: 'Congrats. Task Name changed!' })
      }
      this.setState({ editable: false })
    } else {
      this.setState({ error: true, errorMessage: 'Please enter a valid name.' })
    }
  }

  deleteTask = () => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        { text: 'Delete', onPress: this.remove }
      ]
    )
  }

  remove = () => {
    const { taskList } = this.props
    const { taskName } = this.props.route.params.task
    const index = taskList.findIndex(item => item.taskName === taskName)
    const newTaskList = [...taskList]
    newTaskList.splice(index, 1)
    this.props.setTaskList(newTaskList)
    AsyncStorage.setItem('taskList', JSON.stringify(newTaskList))
    this.props.navigation.goBack()
  }

  render () {
    const { task } = this.props.route.params
    const { editable, taskName, error, errorMessage, successMessage } = this.state

    return (
      <SingleTask
        task={task}
        editable={editable}
        taskName={taskName}
        error={error}
        errorMessage={errorMessage}
        successMessage={successMessage}
        editTask={this.editTask}
        onChangeText={this.handleOnChangeText}
        changeTaskName={this.changeTaskName}
        deleteTask={this.deleteTask}
      />
    )
  }
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    taskList: state.task.taskList
  }
}

const SingleTaskScreenWithRedux = connect(mapStateToProps, { setTaskList })(SingleTaskScreen)

export { SingleTaskScreenWithRedux }
