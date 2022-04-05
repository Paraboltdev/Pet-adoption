import React from 'react'
import styled from 'styled-components'

const FormComp = ({state, changeState}) => {

  
  return (
    <div>

        <FormGroup>
        <Label></Label>
         <Input 
             type=''
             placeholder=''
             name=''
             id=''
             

         />
            <Textarea 
                 type=''
             placeholder=''
             name=''
             id=''
            />
        </FormGroup>
    </div>
  )
}

export default FormComp

const FormGroup = styled.div`
display: grid;
justify-content: center;
align-items: center;
`
const Label = styled.label`
display: block;
font-weight: bold;
padding: 10px;
min-height: 40px;

`
const Input = styled.input`
height: 50px;
width:350px;
border-radius: 10px;
border: solid 2px black;
`
const Textarea = styled.textarea`
height: 200px;
width:350px;
border-radius: 10px;
border: solid 2px black;

`