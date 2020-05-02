import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: '1px solid #fbfbfb',
  title: {
    margin: '0 0 20px',
    fontSize: 20,
    fontWeight: 500
  },
  body: {
    minHeight: 400,
    position: 'relative'
  }
}

const Section = ({ title, children }) => {
  return (
    <section className='section' style={styles}>
      <h3 className='section--title' style={styles.title}>
        {title}
      </h3>
      <div className='section--body' style={styles.body}>
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Section.defaultProps = {}

export default Section
