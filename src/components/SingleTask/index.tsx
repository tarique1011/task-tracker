import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../styles'
import { TaskType } from '../../types'
import { Button, Input } from '../../components'

interface SingleTaskProps {
  task: TaskType,
  editable: boolean,
  taskName: string,
  error: boolean,
  errorMessage: string,
  successMessage: string,
  editTask: () => void,
  onChangeText: (taskName: string) => void,
  changeTaskName: () => void,
  deleteTask: () => void
}

const SingleTask: React.FunctionComponent<SingleTaskProps> = (props) => {
  const {
    task,
    editable,
    taskName,
    error,
    errorMessage,
    successMessage,
    editTask,
    onChangeText,
    changeTaskName,
    deleteTask
  } = props

  const items = [
    { title: 'Duration', value: task.duration },
    { title: 'Start Time', value: task.startTime },
    { title: 'End Time', value: task.endTime },
    { title: 'Start Date', value: task.startDate },
    { title: 'End Date', value: task.endDate }
  ]

  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.taskNameContainer}>
          <Text style={styles.title}>Task Name</Text>
          {editable ? (
            <Input
              value={taskName}
              placeholder='Enter Task Name'
              onChangeText={onChangeText}
              error={error}
              errorMessage={errorMessage}
            />
          ) : (
            <Text style={styles.value}>{task.taskName}</Text>
          )}
        </View>
        <View style={styles.detailsContainer}>
          {items.map(item => {
            return (
              <View key={item.title} style={styles.itemContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            )
          })}
        </View>
      </View>
      <View style={styles.ctaContainer}>
        <View style={styles.buttonContainer}>
          {editable ? (
            <Button
              title='Save'
              onPress={changeTaskName}
              buttonContainerStyle={styles.saveCta}
            />
          ) : (
            <Button
              title='Edit'
              onPress={editTask}
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Delete'
            onPress={deleteTask}
            buttonContainerStyle={styles.deleteCta}
          />
        </View>
      </View>
      <View style={styles.successContainer}>
        <Text style={styles.successText}>{successMessage}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white
  },
  upperContainer: {
    paddingVertical: 10
  },
  taskNameContainer: {
    paddingVertical: 5,
    paddingHorizontal: '5%'
  },
  detailsContainer: {
    paddingHorizontal: '5%',
    paddingVertical: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  itemContainer: {
    width: '50%',
    paddingRight: 10,
    paddingBottom: 10
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  value: {
    fontSize: 16
  },
  ctaContainer: {
    paddingVertical: 15,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    width: '45%'
  },
  saveCta: {
    backgroundColor: Colors.green
  },
  deleteCta: {
    backgroundColor: Colors.red
  },
  successContainer: {
    paddingVertical: 5,
    paddingHorizontal: '5%',
    alignItems: 'center'
  },
  successText: {
    fontSize: 16,
    color: Colors.green
  }
})

export { SingleTask }
