import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Colors } from '../../styles'
import { TaskType } from '../../types'

interface TaskCardProps {
  task: TaskType,
  openSingleTask: (task: TaskType) => void
}

const TaskCard: React.FunctionComponent<TaskCardProps> = ({ task, openSingleTask }) => {
  return (
    <TouchableHighlight underlayColor={Colors.lightGray} onPress={() => openSingleTask(task)}>
      <View style={styles.mainContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>Task Name</Text>
          <Text style={styles.value}>{task.taskName}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>Date</Text>
          <Text style={styles.value}>{task.startDate}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: '5%',
    paddingVertical: 15,
    backgroundColor: Colors.white
  },
  nameContainer: {
    paddingBottom: 10
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  value: {
    fontSize: 14
  }
})

export { TaskCard }
