import React from 'react'
import { Input } from '../Styles'

const InputComp = ({placeholder, id, label, type, value, changeState, state}) => {

  const onChange=(e)=>{
    changeState([...state , e.target.value])
  }
 
  return (
    
       <>
         
            <Input 
            label={label}
            type={type} 
            id={id}
            placeholder={placeholder}
            value={value}
            state={changeState}
           onChange={onChange}
            
            />
       
    </>
  )
}

export default InputComp