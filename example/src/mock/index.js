import moment from 'moment'

import week19 from './week19'
import week20 from './week20'
import week21 from './week21'
import week22 from './week22'

const data = []
data[19] = week19
data[20] = week20
data[21] = week21
data[22] = week22

export const getMockSchedule = (num) => {
  return data[num] || data[22]
}
export const fetchMockScheduleAPI = (num) =>{
  return new Promise((res) => {
    setTimeout(() => res(getMockSchedule(num)), 3000)
  })
}
export const getRealSchedule = (num) => {
  const AT_URL = 'https://api.amazingtalker.com/v1/guest/teachers/amy-estrada/schedule'
  const dateStr = moment(19, 'week').toISOString()
  const queryDate = encodeURI(encodeURIComponent(dateStr))
  return fetch(`${AT_URL}?started_at=${queryDate}`).then(resp => resp.json())
}
