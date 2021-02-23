import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native'
import { Colors } from '../../styles'

interface ButtonProps {
  title: string,
  onPress: () => void,
  disabled?: boolean,
  buttonContainerStyle?: StyleProp<ViewStyle>,
  buttonTextStyle?: StyleProp<TextStyle>
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {
    title,
    onPress,
    disabled,
    buttonContainerStyle,
    buttonTextStyle
  } = props

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.buttonContainer, buttonContainerStyle, { opacity: disabled ? 0.5 : 1 }]}>
        <Text style={[styles.textContainer, buttonTextStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 45,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textContainer: {
    fontSize: 14,
    color: Colors.white
  }
})

export { Button }
