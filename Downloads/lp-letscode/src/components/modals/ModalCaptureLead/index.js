import { useContext } from 'react'
import Modal from '../Modal'
import s from './styles'
import { LIGHT_GRAY } from 'defaults/Colors'
import Input from 'components/Input'
import ModalsContext from 'contexts/ModalsContext'
import Button from 'components/Button'

const ModalCaptureLead = () => {

  const { captureLead } = useContext(ModalsContext)

  const onSubmit = evt => {
    evt.preventDefault()

    /* todo: implement */

    captureLead.close()
    return false
  }

  return (
    <Modal
      visible={captureLead.visible}
      close={captureLead.close}
      title="Registrar interesse">
        <s.Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            required />
          <Input
            type="email"
            placeholder="Email"
            required />
          <Input
            type="tel"
            placeholder="Telefone"
            required />
          <Button
            type="submit"
            styles={{
              marginTop: '10px',
              backgroundColor: LIGHT_GRAY
            }}
            >Registrar</Button>
        </s.Form>
      </Modal>
  )
}

export default ModalCaptureLead