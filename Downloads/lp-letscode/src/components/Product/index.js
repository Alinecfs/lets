import PropTypes from 'prop-types'
import { useContext } from 'react';
import ModalsContext from 'contexts/ModalsContext'
import Button from '../Button';
import { Wrapper } from './style'

const Product = ({ service }) => {
  
  const { captureLead } = useContext(ModalsContext)
  const { name, label, description } = service;
 
  return (
    <Wrapper>
      <h2>{label}</h2>
      <p>
        {description}
      </p>
      <Button onClick={captureLead.open}>Quero saber mais!</Button>
    </Wrapper>
  )
}

Product.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
}

export default Product