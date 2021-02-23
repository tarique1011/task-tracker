import moment from 'moment'

const formatDate = (date: Date): string => {
  return date ? moment(date).format('DD MMMM YYYY') : ''
}

const formatTime = (date: Date): string => {
  return date ? moment(date).format('hh:mm a') : ''
}

export {
  formatDate,
  formatTime
}
