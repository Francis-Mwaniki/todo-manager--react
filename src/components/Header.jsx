import React from 'react'
import PropTypes from "prop-types"
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
    
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text={showAdd? 'Close':'Add'} color={showAdd?'red':'green'} Click={onAdd} />
    </header>   
  )
}

Header.propTypes={
    title: PropTypes.string.isRequired
}
Header.defaultProps={
    title:'Task Manager'
}
export default Header