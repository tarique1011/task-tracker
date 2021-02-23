import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const EmptyTaskList: React.FunctionComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>No Tasks to display</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: '5%',
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center'
  }
})

export { EmptyTaskList }
