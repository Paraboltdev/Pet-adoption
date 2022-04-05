import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Field , Formik } from "formik";

import PetContext from "../Context/PetContext";
import { Button, Error, Form, Input, Textarea, Wrapper } from "../Styles";

const AddPet = () => {
  const [animal, setAnimal] = useContext(PetContext);
  const [adopted, setAdopted]= useState({})
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  
  const expName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const expComments = /^.{1,255}$/;
const expAge = /^[0-9]$/;

  const navigate = useNavigate();
  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = {
      id: uuidv4(),
      name: name,
      age: age,
      breed: breed,
      place: place,
      description: description,
    };
    setAnimal((prevAnimal) => [...prevAnimal, newPet]);
  
    
  };

  return (
    <div>
      <h2>AddPet</h2>

      <Formik
        initialValues={{
          name: "",
          location: "",
          age: "",
          breed: "",
          decription: "",
        }}

        validate={(value)=>{
            let errors={}
            if(!value.name){
                errors.name='Introduce un nombre'
            }else if(!expName.test(value.name)){
                errors.name='El nombre solo puede tener letras'
            }

            

            if(!value.age){
                errors.age='Introduce una edad estimada'
            }else if(!expAge.test(value.age)){
                errors.age='Introduce la edad en años o meses'
            }

           if(!value.location){
               errors.location ='Introduce su localización'
           }else if(!expName.test(value.name)){
                errors.name='El nombre de la ubicación solo puede tener letras'
            }

           if(!value.description){
               errors.description = 'Por favor escribe una breve descripción'
           }else if(!expComments.test(value.description)){
               errors.description='El texto debe contener entre 1 y 255 caracteres'
           }
            return errors
        }}
       
      >
        {({
          values,
          errors,
          touched,
         handleSubmit,
          handleChange,
          handleBlur,
          
        }) => (
          <Form onSubmit={(e)=>e.preventDefault()}>
            <Input
              name="name"
              type="text"
              placeholder="Nombre"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {touched.name && errors.name && <Error>{errors.name}</Error>}
            <Input
              name="location"
              placeholder="Lugar"
              type="text"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.location && errors.location && <Error>{errors.location}</Error>}
            <Input
              name="age"
              placeholder="Edad"
              type="text"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.age && errors.age && <Error>{errors.age}</Error>}
            <Input
              name="breed"
              placeholder="Raza"
              type="text"
              value={values.breed}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.breed && errors.breed && <Error>{errors.breed}</Error>}
            <Textarea
              name="description"
              placeholder="descripcion"
              type="text"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.description && errors.description && <Error>{errors.description}</Error>}
            <Button onClick={handleSubmit}  type="submit">Add</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPet;