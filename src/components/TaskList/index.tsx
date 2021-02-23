import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { TaskCard, LineSeparator, EmptyTaskList, SearchBar } from '../../components'
import { TaskType } from '../../types'

interface TaskListProps {
  taskList: Array<TaskType>,
  searchText: string,
  onSearch: (text: string) => void,
  openSingleTask: (task: TaskType) => void
}

const TaskList: React.FunctionComponent<TaskListProps> = ({ taskList, openSingleTask, searchText, onSearch }) => {
  const data = [...taskList].reverse()
  return (
    <View style={styles.mainContainer}>
      <SearchBar
        searchText={searchText}
        onChangeText={onSearch}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.taskName}
        renderItem={({ item }) => <TaskCard task={item} openSingleTask={openSingleTask} />}
        ItemSeparatorComponent={() => <LineSeparator />}
        ListEmptyComponent={() => <EmptyTaskList />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

export { TaskList }
