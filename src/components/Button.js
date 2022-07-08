import PropTypes from 'prop-types'

const Button = ({text, onClick, color, onToggle}) => {
  return (
    <button className='btn' style={{backgroundColor: color}} onClick = {() => onToggle()}>{text}</button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string
}

Button.defaultProps = {
    color: 'skyblue'
}

export default Button