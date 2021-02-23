import React from 'react'
import { TextInput, StyleSheet, Text } from 'react-native'
import { Colors } from '../../styles'

interface InputProps {
  value: string,
  onChangeText: (text: string) => void,
  placeholder: string,
  error?: boolean,
  errorMessage?: string
}

const Input: React.FunctionComponent<InputProps> = (props) => {
  const {
    value,
    onChangeText,
    placeholder,
    error,
    errorMessage
  } = props

  return (
    <>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder={placeholder}
        placeholderTextColor={error ? Colors.red : Colors.gray}
        style={[styles.input, { borderColor: error ? Colors.red : Colors.gray }]}
      />
      <Text style={styles.error}>{errorMessage}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.gray,
    color: Colors.black
  },
  error: {
    fontSize: 12,
    paddingVertical: 5,
    color: Colors.red
  }
})

export { Input }
