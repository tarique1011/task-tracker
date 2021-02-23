import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../styles'
import { Input, Button } from '../../components'

interface SignupProps {
  name: string,
  error: boolean,
  errorMessage: string,
  onChangeText: (text: string) => void,
  getStarted: () => void
}

const Signup: React.FunctionComponent<SignupProps> = (props) => {
  const { name, error, errorMessage, onChangeText, getStarted } = props
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Task Tracker</Text>
      <View style={styles.inputContainer}>
        <Input
          value={name}
          placeholder='Enter your name'
          onChangeText={onChangeText}
          error={error}
          errorMessage={errorMessage}
        />
      </View>
      <View style={styles.ctaContainer}>
        <Button
          title='Get Started'
          onPress={getStarted}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: Colors.primary,
    marginBottom: 10
  },
  inputContainer: {
    width: '60%',
    paddingVertical: 5
  },
  ctaContainer: {
    width: '50%'
  }
})

export { Signup }
