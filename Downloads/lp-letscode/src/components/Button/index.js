import PropTypes from 'prop-types'
import { StyledButton } from './style'

const Button = ({ children, onClick, type, styles }) => (
  <StyledButton
    onClick={onClick}
    type={type}
    {...styles}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  type: ''
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default Button