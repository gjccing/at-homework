import React, { useMemo, useState, useEffect } from 'react'
import moment from 'moment'
import {
  Section,
  TimeList,
  WeekCalendar,
  locale
} from 'at-homework'
import { fetchMockScheduleAPI, getRealSchedule } from './mock'
import 'at-homework/dist/index.css'

const splitScheduleByDayOfWeek = (schedule) => {
  const getIndexOrCreate = (array, index, defaultVal) => {
    if (!array[index]) array[index] = defaultVal
    return array[index]
  }
  return schedule.reduce((res, item) => {
    const sIndex = moment(item.start).day()
    getIndexOrCreate(res, sIndex, []).push(item)
    const eIndex = moment(item.end).day()
    if (eIndex !== sIndex) getIndexOrCreate(res, eIndex, []).push(item)
    return res
  }, [])
}

const App = () => {
  const [lang, setLang] = useState('en')
  const [loading, setLoading] = useState(true)
  const [currentWeekOfYear, setCurrentWeekOfYear] = useState(moment().week())
  const [schedule, setSchedule] = useState({ available: [], booked: [] })
  const langUtil = useMemo(() => locale.genUtil(lang), [lang])
  const fetchWeekAndSetSchedule = (week) => {
    loading || setLoading(true);
    fetchMockScheduleAPI(week).then(schedule => {
      setSchedule({
        available: splitScheduleByDayOfWeek(schedule.available),
        booked: splitScheduleByDayOfWeek(schedule.booked),
      });
      setLoading(false);
    })
  }
  useEffect(() => fetchWeekAndSetSchedule(currentWeekOfYear), [])
  return (
    <div>
      <fieldset>
        <legend>切換語言</legend>
        <button onClick={() => setLang('en')}>en</button>
        <button onClick={() => setLang('zh-tw')}>zh-tw</button>
      </fieldset>
      <hr />
      <Section title={langUtil.getMessage('available_times')}>
        <WeekCalendar
          loading={loading}
          lang={lang}
          currentWeekOfYear={currentWeekOfYear}
          renderCell={(date) => {
            return (
              <TimeList
                date={date}
                available={schedule.available[moment(date).day()]}
                booked={schedule.booked[moment(date).day()]}
              />
          )
        }}
          onPageChange={(week) => {
            setCurrentWeekOfYear(week)
            fetchWeekAndSetSchedule(week)
          }}
        />
      </Section>
    </div>
  )
}

export default App
