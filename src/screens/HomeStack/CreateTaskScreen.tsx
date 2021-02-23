import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { CreateTask } from '../../components'
import { formatDate, formatTime } from '../../utils'
import { HomeStackParamList, TaskActionTypes, TaskType } from '../../types'
import { connect } from 'react-redux'
import { AppState } from '../../reducers'
import { setTaskList } from '../../actions'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface CreateTaskScreenProps {
  navigation: StackNavigationProp<HomeStackParamList, 'CreateTask'>,
  route: RouteProp<HomeStackParamList, 'CreateTask'>
}

interface LinkStateProps {
  taskList: Array<TaskType>
}

interface DispatchProps {
  setTaskList: (taskList: Array<TaskType>) => TaskActionTypes
}

interface CreateTaskScreenState {
  timer: null | number,
  hours: string,
  minutes: string,
  seconds: string,
  duration: string | null,
  startTime: string | null,
  endTime: string | null,
  startDate: string | null,
  endDate: string | null,
  disableStartCta: boolean,
  disableStopCta: boolean,
  disableSaveCta: boolean,
  saved: boolean
}

type Props = CreateTaskScreenProps & LinkStateProps & DispatchProps

class CreateTaskScreen extends React.Component<Props, CreateTaskScreenState> {
  constructor (props: Props) {
    super(props)
    this.state = {
      timer: null,
      hours: '00',
      minutes: '00',
      seconds: '00',
      disableStartCta: false,
      disableStopCta: true,
      disableSaveCta: true,
      duration: null,
      startTime: null,
      endTime: null,
      startDate: null,
      endDate: null,
      saved: false
    }
  }

  componentWillUnmount () {
    const { timer } = this.state
    if (timer) {
      clearInterval(timer)
    }
  }

  handleOnStart = () => {
    const startTime = formatTime(new Date())
    const startDate = formatDate(new Date())
    this.setState({ startTime, startDate })

    const timer = setInterval(() => {
      const { hours, minutes, seconds } = this.state
      let sec = (+seconds + 1).toString()
      let min = minutes
      let hour = hours

      if (+seconds === 59) {
        min = (+minutes + 1).toString()
        sec = '00'
      }

      if (+minutes === 59) {
        hour = (+hours + 1).toString()
        min = '00'
        sec = '00'
      }

      this.setState({
        hours: hour.length === 1 ? `0${hour}` : hour,
        minutes: min.length === 1 ? `0${min}` : min,
        seconds: sec.length === 1 ? `0${sec}` : sec
      })
    }, 1000)
    this.setState({ timer, disableStartCta: true, disableStopCta: false })
  }

  handleOnStop = () => {
    const { timer, hours, minutes, seconds } = this.state
    const duration = `${hours}:${minutes}:${seconds}`
    const endTime = formatTime(new Date())
    const endDate = formatDate(new Date())
    if (timer) {
      clearInterval(timer)
      this.setState({ disableStopCta: true, disableSaveCta: false, duration, endDate, endTime })
    }
  }

  handleOnSave = () => {
    this.setState({ saved: true })
    this.saveTaskItem()
    setTimeout(() => {
      this.props.navigation.goBack()
    }, 1500)
  }

  saveTaskItem = () => {
    const { taskName } = this.props.route.params
    const { duration, startTime, endTime, startDate, endDate } = this.state
    const { taskList } = this.props
    const taskItem = {
      taskName,
      duration,
      startTime,
      endTime,
      startDate,
      endDate
    }
    const newTaskList = [...taskList]
    newTaskList.push(taskItem)
    this.props.setTaskList(newTaskList)
    AsyncStorage.setItem('taskList', JSON.stringify(newTaskList))
  }

  render () {
    const {
      hours,
      minutes,
      seconds,
      disableStartCta,
      disableStopCta,
      disableSaveCta,
      duration,
      startTime,
      endTime,
      startDate,
      endDate,
      saved
    } = this.state

    const { taskName } = this.props.route.params

    return (
      <CreateTask
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        disableStartCta={disableStartCta}
        disableStopCta={disableStopCta}
        disableSaveCta={disableSaveCta}
        taskName={taskName}
        duration={duration}
        startTime={startTime}
        endTime={endTime}
        startDate={startDate}
        endDate={endDate}
        saved={saved}
        onStart={this.handleOnStart}
        onStop={this.handleOnStop}
        onSave={this.handleOnSave}
      />
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    taskList: state.task.taskList
  }
}

const CreateTaskScreenWithRedux = connect(mapStateToProps, { setTaskList })(CreateTaskScreen)

export { CreateTaskScreenWithRedux }
