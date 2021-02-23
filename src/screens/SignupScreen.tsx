import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Signup } from '../components'
import { RootStackParamList } from '../types'

interface SignupScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'SignupScreen'>
}

interface SignupScreenState {
  name: string,
  error: boolean,
  errorMessage: string
}
class SignupScreen extends React.Component<SignupScreenProps, SignupScreenState> {
  constructor (props: SignupScreenProps) {
    super(props)
    this.state = {
      name: '',
      error: false,
      errorMessage: ''
    }
  }

  handleOnChangeText = (name: string) => {
    if (!this.state.name) {
      this.setState({ error: false, errorMessage: '' })
    }
    this.setState({ name })
  }

  getStarted = () => {
    const { name } = this.state
    if (name) {
      AsyncStorage.setItem('name', name)
      this.props.navigation.navigate('AppTab', { name })
    } else {
      this.setState({ error: true, errorMessage: 'Please enter a valid name.' })
    }
  }

  render () {
    const { name, error, errorMessage } = this.state

    return (
      <Signup
        name={name}
        error={error}
        errorMessage={errorMessage}
        onChangeText={this.handleOnChangeText}
        getStarted={this.getStarted}
      />
    )
  }
}

export { SignupScreen }
