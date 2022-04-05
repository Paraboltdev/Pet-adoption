import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Field, Formik } from "formik";

import PetContext from "../Context/PetContext";
import { Button, Error, Form, Input, Textarea, Wrapper,Label } from "../Styles";

const AddForm = ({setShowForm}) => {
  const [animal, setAnimal] = useContext(PetContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [text, setText] = useState("");
  
  console.log(location)
  

  const expName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const expComments = /^.{1,255}$/;
  const expAge = /^[0-9]$/;

  const navigate = useNavigate();
  const handleChange = (e) => {
   
    
    
    
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = {
      id: uuidv4(),
      name: name,
      age: age,
      breed: breed,
      location: location,
      text:text,
    };
    setAnimal((prevAnimal) => [...prevAnimal, newPet]);
   
    setShowForm(false)
  };

  return (
    <div>
      

      <Form>
      <Label>Nombre</Label>
        <Input
        label='name'
          name="name"
          type="text"
          placeholder="Nombre"
          
          onChange={(e)=>setName(e.target.value.toLocaleLowerCase())}
        />

        <Label>Localización</Label>
        <Input
          name="location"
          placeholder="Lugar"
          type="text"
          onChange={(e)=>setLocation(e.target.value.toLocaleLowerCase())}
        />
        <Label>Edad</Label>
        <Input
          name="age"
          placeholder="Edad"
          type="text"
          onChange={(e)=>setAge(e.target.value.toLocaleLowerCase())}
        />
        <Label>Raza</Label>
        <Input
          name="breed"
          placeholder="Raza"
          type="text"
          onChange={(e)=>setBreed(e.target.value.toLocaleLowerCase())}
        />
        <Label>Descripción</Label>
        <Textarea
          name="description"
          placeholder="descripcion"
          type="text"
         
          onChange={(e)=>setText(e.target.value.toLocaleLowerCase())}
        />

        <Button onClick={handleSubmit} type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
