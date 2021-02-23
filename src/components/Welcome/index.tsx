import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Input, Button } from '../../components'

interface WelcomeProps {
  taskName: string,
  onChangeText: (text: string) => void,
  createTask: () => void,
  error: boolean,
  errorMessage: string
}

const Welcome: React.FunctionComponent<WelcomeProps> = (props) => {
  const {
    taskName,
    onChangeText,
    createTask,
    error,
    errorMessage
  } = props

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
    >
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Enter task name'
            value={taskName}
            onChangeText={onChangeText}
            error={error}
            errorMessage={errorMessage}
          />
        </View>
        <View style={styles.ctaContainer}>
          <Button
            title='Create Task'
            onPress={createTask}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: '5%'
  },
  ctaContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: 10
  }
})

export { Welcome }
