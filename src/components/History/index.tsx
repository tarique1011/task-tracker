import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const History: React.FunctionComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>
        HistoryScreen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { History }
