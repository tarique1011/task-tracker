import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { connect } from 'react-redux'
import { TaskList } from '../../components'
import { AppState } from '../../reducers'
import { HistoryStackParamList, TaskType } from '../../types'
import { setTaskList } from '../../actions'

interface TaskListScreenProps {
  navigation: StackNavigationProp<HistoryStackParamList, 'TaskList'>
}

interface LinkStateProps {
  taskList: Array<TaskType>
}

interface DispatchProps {
  setTaskList: (taskList: Array<TaskType>) => void
}

type Props = TaskListScreenProps & LinkStateProps & DispatchProps

interface TaskListScreenState {
  searchText: string,
  taskList: Array<TaskType>
}
class TaskListScreen extends React.Component<Props, TaskListScreenState> {
  searchableList: Array<TaskType>
  focusListener: any
  constructor (props: Props) {
    super(props)
    this.state = {
      searchText: '',
      taskList: []
    }
    this.searchableList = []
  }

  componentDidMount () {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setList()
    })
  }

  componentWillUnmount () {
    this.focusListener()
  }

  setList = () => {
    const { taskList } = this.props
    this.setState({ taskList })
    this.searchableList = taskList
  }

  openSingleTask = (task: TaskType) => {
    this.setState({ searchText: '' })
    this.props.navigation.navigate('SingleTask', { task })
  }

  handleOnSearch = (text: string) => {
    this.setState({ searchText: text })
    const searchedTaskList = this.searchableList.filter(item => {
      const itemData = item.taskName.toUpperCase()
      const searchData = text.toUpperCase()

      return itemData.indexOf(searchData) > -1
    })
    this.setState({ taskList: searchedTaskList })
  }

  render () {
    const { searchText, taskList } = this.state

    return (
      <TaskList
        taskList={taskList}
        searchText={searchText}
        openSingleTask={this.openSingleTask}
        onSearch={this.handleOnSearch}
      />
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    taskList: state.task.taskList
  }
}

const TaskListScreenWithRedux = connect(mapStateToProps, { setTaskList })(TaskListScreen)

export { TaskListScreenWithRedux }
