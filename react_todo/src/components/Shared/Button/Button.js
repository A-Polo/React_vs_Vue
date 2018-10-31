import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, className }) => (
  <button className={className} onClick={onClick}>{children}</button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
