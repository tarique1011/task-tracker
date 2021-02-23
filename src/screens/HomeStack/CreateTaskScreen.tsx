import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { CreateTask } from '../../components'
import { formatDate, formatTime } from '../../utils'
import { HomeStackParamList } from '../../types'

interface CreateTaskScreenProps {
  navigation: StackNavigationProp<HomeStackParamList, 'CreateTask'>,
  route: RouteProp<HomeStackParamList, 'CreateTask'>
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

class CreateTaskScreen extends React.Component<CreateTaskScreenProps, CreateTaskScreenState> {
  constructor (props: CreateTaskScreenProps) {
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
    setTimeout(() => {
      this.props.navigation.goBack()
    }, 1500)
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

export { CreateTaskScreen }