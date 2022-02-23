import PropTypes from 'prop-types'
import { StyledImg } from '../SocialMedia/style'

const SocialMedia = ({ link, imgSrc }) => (
  
  <a rel="noreferrer" href={link} target="_blank">
    <StyledImg src={imgSrc} />
  </a>
)

SocialMedia.propTypes = {
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

export default SocialMedia
