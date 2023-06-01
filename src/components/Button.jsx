import React from 'react'
import PropTypes from 'prop-types'
const Button = ({ text, color,Click }) => {
  return (
    <button onClick={Click} className='btn' style={{ backgroundColor:color }}>{text}</button>
  )
}

Button.defaultProps={
    text: "add",
    color: "steelblue"
}
Button.propTypes={
    text:PropTypes.string.isRequired,
    color:PropTypes.string,
    Click:PropTypes.func
}
export default Button