import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/zh-tw'
import classnames from 'classnames'
import locales from '../../locale'
import styles from './styles.module.css'

const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone
const timezoneFormat = ((offset) =>
  'GMT' +
  (offset < 0 ? '+' : '-') +
  String.prototype.padStart.call(Math.abs(Math.floor(480 / 60)), 2, 0) +
  String.prototype.padStart.call(offset % 60, 2, 0))(
  new Date().getTimezoneOffset()
)

const WeekCalendar = ({
  locale,
  loading,
  currentWeekOfYear,
  validRange,
  DayOfWeekFormat,
  DayOfMonthFormat,
  renderCell,
  onPageChange
}) => {
  useCallback(() => moment.locale(locale), [locale])
  const langUtil = useMemo(() => locales.genUtil(locale), [locale])
  const currentWeek = useMemo(() => moment().week(currentWeekOfYear), [
    currentWeekOfYear
  ])
  const isBetweenValidRage = (momentDate) =>
    momentDate.isBetween(
      validRange[0] ? validRange[0] : 0,
      validRange[1] ? validRange[1] : 31536000000000, // 1000 years
      'day',
      '[]'
    )
  const isLastWeekAvailable = useMemo(
    () => isBetweenValidRage(currentWeek.clone().subtract(1, 'w').day(6)),
    [validRange[0], currentWeek]
  )
  const isNextWeekAvailable = useMemo(
    () => isBetweenValidRage(currentWeek.clone().add(1, 'w').day(0)),
    [validRange[1], currentWeek]
  )
  return (
    <div className={styles['week-calendar']}>
      <header className={styles['week-calendar--header']}>
        <div className={styles['week-calendar--control-bar']}>
          <div className={styles['week-calendar--button-group']}>
            <button
              type='button'
              className={classnames(
                styles['week-calendar--button'],
                styles['week-calendar--button-left'],
                isLastWeekAvailable || styles['week-calendar--button-disabled']
              )}
              disabled={!isLastWeekAvailable}
              onClick={() =>
                onPageChange(currentWeek.clone().subtract(1, 'w').week())
              }
            >
              &lt;
            </button>
            <button
              type='button'
              className={classnames(
                styles['week-calendar--button'],
                styles['week-calendar--button-right'],
                isNextWeekAvailable || styles['week-calendar--button-disabled']
              )}
              disabled={!isNextWeekAvailable}
              onClick={() =>
                onPageChange(currentWeek.clone().add(1, 'w').week())
              }
            >
              &gt;
            </button>
          </div>
          <span className={styles['week-calendar--current-week']}>
            {`${currentWeek.day(0).format('YYYY/MM/DD')} - ${currentWeek
              .day(6)
              .format('DD')}`}
          </span>
        </div>
        <span className={styles['week-calendar--header--notice']}>
          {langUtil.getMessage('time_zone_notice', {
            area: langUtil.getMessage(`area.${timezoneName}`),
            zone: timezoneFormat
          })}
        </span>
      </header>
      <table className={styles['week-calendar--table']}>
        <thead>
          <tr>
            {Array.from(Array(7).keys()).map((i) => (
              <th
                key={`week-calendar--day-head-${i}`}
                className={classnames(
                  styles['week-calendar--day-head'],
                  isBetweenValidRage(currentWeek.day(i)) ||
                    styles['week-calendar--day-head-disabled']
                )}
              >
                {currentWeek.day(i).format(DayOfWeekFormat)}
                <br />
                {currentWeek.day(i).format(DayOfMonthFormat)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from(Array(7).keys()).map((i) => (
              <td
                key={`week-calendar--day-cell-${i}`}
                className={styles['week-calendar--day-cell']}
              >
                {isBetweenValidRage(currentWeek.day(i))
                  ? renderCell(new Date(currentWeek.day(i).millisecond()))
                  : null
                }
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {loading && <div className={styles['week-calendar--loading']} />}
    </div>
  )
}

WeekCalendar.propTypes = {
  loading: PropTypes.bool,
  locale: PropTypes.oneOf(['en', 'zh-tw']),
  currentWeekOfYear: PropTypes.number,
  validRange: PropTypes.arrayOf([PropTypes.number, PropTypes.number]),
  DayOfWeekFormat: PropTypes.string,
  DayOfMonthFormat: PropTypes.string,
  renderCell: PropTypes.func,
  onPageChange: PropTypes.func
}

WeekCalendar.defaultProps = {
  loading: false,
  locale: 'en',
  currentWeekOfYear: moment().weeks(),
  validRange: [Math.floor(Date.now() / 86400000) * 86400000, undefined],
  DayOfWeekFormat: 'ddd',
  DayOfMonthFormat: 'DD',
  renderCell: (date) => {},
  onPageChange: (weekOfYear) => {}
}

export default WeekCalendar
