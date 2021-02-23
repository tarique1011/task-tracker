import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Welcome } from '../../components'
import { HomeStackParamList, TaskType } from '../../types'
import { connect } from 'react-redux'
import { AppState } from '../../reducers'

interface WelcomeScreenProps {
  navigation: StackNavigationProp<HomeStackParamList, 'Welcome'>
}

interface LinkStateProps {
  taskList: Array<TaskType>
}

interface WelcomeScreenState {
  taskName: string,
  error: boolean,
  errorMessage: string
}

type Props = WelcomeScreenProps & LinkStateProps

class WelcomeScreen extends React.Component<Props, WelcomeScreenState> {
  constructor (props: Props) {
    super(props)
    this.state = {
      taskName: '',
      error: false,
      errorMessage: ''
    }
  }

  handleOnChangeText = (taskName: string) => {
    if (!this.state.taskName) {
      this.setState({ error: false, errorMessage: '' })
    }
    this.setState({ taskName })
  }

  createTask = () => {
    const { taskName } = this.state
    const { taskList } = this.props
    this.setState({ error: false, errorMessage: '' })
    if (taskName) {
      const filter = taskList.filter(item => item.taskName === taskName)
      filter.length === 0
        ? this.props.navigation.navigate('CreateTask', { taskName })
        : this.setState({ error: true, errorMessage: 'Task name already exists.' })
    } else {
      this.setState({ error: true, errorMessage: 'This field is required.' })
    }
  }

  render () {
    const { taskName, error, errorMessage } = this.state

    return (
      <Welcome
        taskName={taskName}
        onChangeText={this.handleOnChangeText}
        createTask={this.createTask}
        error={error}
        errorMessage={errorMessage}
      />
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    taskList: state.task.taskList
  }
}

const WelcomeScreenWithRedux = connect(mapStateToProps, null)(WelcomeScreen)

export { WelcomeScreenWithRedux }
