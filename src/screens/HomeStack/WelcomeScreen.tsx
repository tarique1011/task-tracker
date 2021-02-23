import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Welcome } from '../../components'
import { HomeStackParamList } from '../../types'

interface WelcomeScreenProps {
  navigation: StackNavigationProp<HomeStackParamList, 'Welcome'>
}

interface WelcomeScreenState {
  taskName: string,
  error: boolean,
  errorMessage: string
}

class WelcomeScreen extends React.Component<WelcomeScreenProps, WelcomeScreenState> {
  constructor (props: WelcomeScreenProps) {
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
    if (taskName) {
      this.props.navigation.navigate('CreateTask', { taskName })
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

export { WelcomeScreen }
