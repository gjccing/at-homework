import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classnames from 'classnames'

const styles = {
  textAlign: 'center',
  listStyleType: 'none',
  item: {
    border: '1px solid transparent',
    boxSizing: 'border-box',
    padding: '3px 0',
    color: '#02cab9',
    fontWeight: 700,
    disabled: {
      color: '#b6b6b6',
      fontWeight: 400
    }
  }
}

const TimeList = ({ format, availableTimes, bookedTimes }) => {
  const bookedTimeset = new Set(bookedTimes)
  return (
    <ul className='time-list' style={styles}>
      {availableTimes.map((time) => {
        const isReserved = bookedTimeset.has(time)
        return (
          <li
            key={time}
            className={classnames(
              'time-list--item',
              isReserved && 'time-list--item-disabled'
            )}
            style={{
              ...styles.item,
              ...(isReserved && styles.item.disabled)
            }}
          >
            {moment(time).format(format)}
          </li>
        )
      })}
    </ul>
  )
}

TimeList.propTypes = {
  format: PropTypes.string,
  availableTimes: PropTypes.arrayOf(PropTypes.number),
  bookedTimes: PropTypes.arrayOf(PropTypes.number)
}

TimeList.defaultProps = {
  format: 'HH:mm',
  availableTimes: [],
  bookedTimes: []
}

export default TimeList
