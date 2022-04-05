import React from 'react'
import styled from 'styled-components'
import FormFormik from './AddForm'
import Modal from './Modal'

const ModalForm = () => {
  return (
    <Modal>
        <Content>
            <h1>Informacion del animal</h1>
        </Content>
        <FormFormik />
    </Modal>
  )
}

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`

export default ModalForm