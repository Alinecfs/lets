import { Body, StyledSection } from './styles'
import { BLACK, PRIMARY_COLOR } from 'defaults/Colors'
import PropTypes from 'prop-types'

const defaultStyles = {
  backgroundColor: PRIMARY_COLOR,
  color: BLACK
}

const Section = ({ children, title, bodyStyles, styles }) => {

  const sectionStyles = {...defaultStyles, ...styles}

  return (
    <StyledSection {...sectionStyles}>
      {
        title &&
        <h1>{title}</h1>
      }
      <Body {...bodyStyles}>
        {children}
      </Body>
    </StyledSection>
  )
}

Section.defaultProps = {
  title: '',
  bodyStyles: {},
  styles: defaultStyles
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  bodyStyles: PropTypes.shape({
    display: PropTypes.string,
    gridTemplateColumns: PropTypes.string,
    mobileGridTemplateColumns: PropTypes.string,
    columnGap: PropTypes.string,
    rowGap: PropTypes.string,
  }),
  styles: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  })
}

export default Section