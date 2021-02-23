import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../styles'
import { Button, SaveCard } from '../../components'

interface CreateTaskProps {
  hours: string,
  minutes: string,
  seconds: string,
  disableStartCta: boolean,
  disableStopCta: boolean,
  disableSaveCta: boolean,
  taskName: string,
  duration: string | null,
  startTime: string | null,
  endTime: string | null,
  startDate: string | null,
  endDate: string | null,
  saved: boolean,
  onStart: () => void,
  onStop: () => void,
  onSave: () => void
}

const CreateTask: React.FunctionComponent<CreateTaskProps> = (props) => {
  const {
    hours,
    minutes,
    seconds,
    disableStartCta,
    disableStopCta,
    disableSaveCta,
    taskName,
    duration,
    startTime,
    endTime,
    startDate,
    endDate,
    saved,
    onStart,
    onStop,
    onSave
  } = props

  const saveCardItems = [
    { title: 'Task Name', value: taskName },
    { title: 'Duration', value: duration || '-' },
    { title: 'Start Time', value: startTime || '-' },
    { title: 'End Time', value: endTime || '-' },
    { title: 'Start Date', value: startDate || '-' },
    { title: 'End Date', value: endDate || '-' }
  ]

  return (
    <View style={styles.mainContainer}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{`${hours}:${minutes}:${seconds}`}</Text>
      </View>
      <View style={styles.ctaContainer}>
        <Button
          title='Start'
          disabled={disableStartCta}
          onPress={onStart}
          buttonContainerStyle={[styles.buttonContainerStyle, styles.startCta]}
        />
        <Button
          title='Stop'
          disabled={disableStopCta}
          onPress={onStop}
          buttonContainerStyle={[styles.buttonContainerStyle, styles.stopCta]}
        />
      </View>
      <View style={styles.saveCardContainer}>
        <SaveCard
          items={saveCardItems}
          disableSaveCta={disableSaveCta}
          saved={saved}
          onSave={onSave}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  timerContainer: {
    paddingVertical: 15,
    alignItems: 'center'
  },
  timer: {
    fontSize: 40
  },
  ctaContainer: {
    paddingVertical: 15,
    paddingHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainerStyle: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  startCta: {
    backgroundColor: Colors.green
  },
  stopCta: {
    backgroundColor: Colors.red
  },
  saveCardContainer: {
    paddingHorizontal: '5%',
    paddingVertical: 15
  }
})

export { CreateTask }
