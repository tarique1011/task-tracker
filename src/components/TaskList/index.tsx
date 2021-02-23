import React from 'react'
import { View, FlatList } from 'react-native'
import { TaskCard, LineSeparator, EmptyTaskList } from '../../components'
import { TaskType } from '../../types'

interface TaskListProps {
  taskList: Array<TaskType>,
  openSingleTask: (task: TaskType) => void
}

const TaskList: React.FunctionComponent<TaskListProps> = ({ taskList, openSingleTask }) => {
  const data = [...taskList].reverse()
  return (
    <View>
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

export { TaskList }
