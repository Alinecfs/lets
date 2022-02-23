import PropTypes from 'prop-types'
import { MdOutlineClose } from "react-icons/md";
import s from './styles'

const Modal = ({ visible, close, title, children }) => (
  <>
    <s.Modal visible={visible}>
      <s.BtnClose onClick={close}>
        <MdOutlineClose />
      </s.BtnClose>
      <h1>{title}</h1>
      <section>
        {children}
      </section>
    </s.Modal>
    <s.Overlay visible={visible} onClick={close}/>
  </>
)

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  close: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export default Modal