import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class SplashScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text>SplashScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'blue'
  }
})

export { SplashScreen }
