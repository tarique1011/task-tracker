import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RootStackParamList } from '../types'
import { StackNavigationProp } from '@react-navigation/stack'

interface SplashScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'SplashScreen'>
}

class SplashScreen extends React.Component<SplashScreenProps> {
  componentDidMount () {
    this.getName()
  }

  getName = async () => {
    try {
      const name = await AsyncStorage.getItem('name')
      if (name) {
        this.props.navigation.navigate('AppTab', { name })
      } else {
        this.props.navigation.navigate('SignupScreen')
      }
    } catch {
      this.props.navigation.navigate('SignupScreen')
    }
  }

  render () {
    return null
  }
}

export { SplashScreen }
