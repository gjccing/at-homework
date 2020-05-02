import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const styles = {
  textAlign: 'center',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  item: {
    border: '1px solid transparent',
    boxSizing: 'border-box',
    padding: '3px 0',
    color: '#02cab9',
    fontWeight: 700,
    fontSize: '.75rem',
    disabled: {
      color: '#b6b6b6',
      fontWeight: 400
    }
  }
}

const TimeList = ({ format, date, available, booked }) => {
  const momentDate = moment(date).startOf('day')
  const list = Array.from(Array(48).keys())
    .map((i) => momentDate.clone().add(i * 30, 'minute'))
    .map((time) => ({
      time: time,
      isAvailable: available.some((item) =>
        time.isBetween(item.start, item.end, null, '[)')
      ),
      isBooked: booked.some((item) =>
        time.isBetween(item.start, item.end, null, '[)')
      )
    }))
    .filter((item) => item.isAvailable || item.isBooked)
  return (
    <ul className='time-list' style={styles}>
      {list.map((item) => (
        <li
          key={item.time.toISOString()}
          style={{
            ...styles.item,
            ...(item.isBooked && styles.item.disabled)
          }}
        >
          {moment(item.time).format(format)}
        </li>
      ))}
    </ul>
  )
}

TimeList.propTypes = {
  format: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  available: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.string,
      end: PropTypes.string
    })
  ),
  booked: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.string,
      end: PropTypes.string
    })
  )
}

TimeList.defaultProps = {
  format: 'HH:mm',
  date: new Date(),
  available: [],
  booked: []
}

export default TimeList
