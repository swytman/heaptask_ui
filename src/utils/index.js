import moment from 'moment'

export function formatDate(value){
  if (value) {
    // return moment(String(value)).format('DD.MM.YYYY hh:mm')
    return moment(String(value)).format('DD.MM.YYYY')
  }
  return null
}