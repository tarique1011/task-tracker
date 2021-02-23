import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../styles'

const LineSeparator: React.FunctionComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.line} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.white,
    alignItems: 'center'
  },
  line: {
    height: '100%',
    width: '95%',
    backgroundColor: Colors.gray
  }
})

export { LineSeparator }
