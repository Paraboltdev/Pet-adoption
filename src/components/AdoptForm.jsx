

import { Field, Formik } from "formik"
import react, { useContext, useRef } from "react"
import { useState } from "react"
import { Button, Error, Wrapper } from "../Styles";
import styled from 'styled-components'

import { useNavigate } from "react-router-dom";
import PetContext from "../Context/PetContext";






const expName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;


const expPhone = /^\d{7,14}$/; 
const expEmail= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const AdoptForm = () => {
  const[formSend, setFormSend]= useState(false)
  const [animal, setAnimal] = useContext(PetContext);
  
  const navigate = useNavigate()
    
  
    return (
        <>
    {}
    <Formik
    initialValues={{
        name:'',
        email:'',
        direction:'',
        phone:''
        

    }}

        validate={(value)=>{
            let errors={}
            if(!value.name.trim()){
                errors.name='Introduce un nombre'
            }else if(!expName.test(value.name)){
                errors.name='El nombre solo puede tener letras'
            }

            

            if(!value.email.trim()){
                errors.email='Introduce una direccion de correo'
            }else if(!expEmail.test(value.email)){
                errors.email='Introduce un email valido'
            }

           if(!value.direction.trim()){
               errors.direction ='Introduce una direccion'
           }else if(!expName.test(value.direction)){
                errors.name='Introduce una direccion correcta'
            }

           if(!value.phone){
               errors.phone = 'Por favor ingresa un telefono'
           }else if(!expPhone.test(value.phone)){
               errors.phone='El telefono solo debe contener numeros'
           }
            return errors
        }}
       
       onSubmit={(values)=>{
        
         setFormSend(true)
         setTimeout(()=>{setFormSend(false)
         navigate('/')},700)
         

         
       }}
    
    >

        {({values, errors, touched, handleChange, handleBlur, handleSubmit})=>(

       
            <FormContainer onSubmit={handleSubmit}>
            <WrapperForm>
            <h1>Formulario de adopción</h1>
            <Label>Nombre</Label>
                <Input
                type='text'
                 placeholder='nombre'
                  id='name' 
                  value={values.name}
                   onChange={handleChange} 
                   onBlur={handleBlur}  
                 
                  />
               {touched.name && errors.name && <Error>{errors.name}</Error>}
               <Label>Email</Label>
                <Input
                    type='email'
                    placeholder="email@email.com"
                    id='email'
                    value={values.email}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                  
                />
                { errors.email && <Error>{errors.email}</Error>}
                <Label>Telefono</Label>
                <Input
                    type='text'
                    placeholder="666555222"
                    id='phone'
                    value={values.phone}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                />
                {touched.phone && errors.phone && <Error>{errors.phone}</Error>}
                <Label>Dirección</Label>
                <Input
                    type='tel'
                    placeholder="C/ calle nº 2 , Sabadell"
                    id='direction'
                    value={values.direction}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                />
                {touched.direction && errors.direction && <Error>{errors.direction}</Error>}
                
                {formSend ? <SuccesMsg>Formulario enviado</SuccesMsg> : ''}
                
                <Button type='submit'>Enviar</Button>
               </WrapperForm>
       </FormContainer>
        )}
    </Formik>
    </>
 
    
  )
}

export default AdoptForm

const FormContainer= styled.form`
height: 100vh;
min-width: 100%;
display: grid;
justify-content: center;
align-items: center;
background-color: #E5CDB3;
margin-left: auto;
margin-right: auto;






h1{
  font-size: 3rem
}

`

const WrapperForm = styled.section`
height: 100vh;
min-width: 100%;
display: grid;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;

`
const Label = styled.label`
display: block;
font-weight: bold;
padding: 10px;
min-height: 10px;
@media (max-width:500px){
    padding: 5px;
}

`
const Input = styled(Field)`
height: 50px;
width:350px;
font-size: 1.5rem;
background-color: transparent;
border: none;
border-bottom: solid 1px black;
padding: 10px;

&:focus{
  background-color: #D6BB9C;
  border:none
}
@media (max-width:500px){
    height: 30px;
    width: 200px;
    
}
`
const SuccesMsg = styled.p`
color:green;
margin-top: 10px;
`
