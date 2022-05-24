import React, { useContext } from 'react'
import PetContext from '../Context/PetContext'
import styled from "styled-components";

import NoPhoto from '../Assets/Img/PerroGato.jpg'

import {  Link, useNavigate } from 'react-router-dom'
const PetCard = ({pet}) => {
  const [animal,setAnimal]= useContext(PetContext)
  const {id, name,place, text, age, breed ,img}=pet
  const navigate = useNavigate()

  const handleAdopted=(id)=>{
   
    setAnimal((animal)=> animal.filter(pet=> pet.id !== id))
    navigate('/adoptForm')
  }
  const Wrapper = styled.section`

display: flex;
flex-direction: column;

justify-content:center;
align-items: center;
text-align: center;
`

  const Par = styled.p`
margin:5px 5px;
font-size: 1.5rem;

`
const Img = styled.img`
border-radius: 15px;

width:100%

transition: all .5s ease
&:hover{
  transform: translateY(0.2);
}

`
const Card = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

width: 100%;
margin-right: 20px;
margin-left: 20px;
height: auto;
background-color: #FFE0B2;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

@media (max-width:400px){
width: 80%
}
`
const Title = styled.h1`
text-align: center;
font-size: 4rem;
font-weight: 900;

@media (max-width:400px){
font-size: 2rem;
}
`

  const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: #926B3F;
  border:none;
 box-shadow: 1px 2px 15px 0px black;
  color:white;
  font-size: 1.3rem;
  margin: 15px auto;
  cursor:pointer;
  border-radius: 10px;
  transition: all 0.5s ease-out;
 
 &:hover{
     background-color: #BA884E;
     box-shadow: 1px 2px 15px 0px black inset; 
 
     color:black
 
 }
 `
 
  return (
    <Card>
        <Wrapper>
      <h2>{name}</h2>
      <Par>{place}</Par>
      <Img src={img ? img : NoPhoto } 
      alt={name}
      
      width={260}
      height={210}/>

      </Wrapper>
      <Wrapper >
      <Par>{text}</Par>
      <Par>Edad: {age} </Par>
      <Par>Raza: {breed} </Par>
      <Link to='/adoptForm'>
      <Button onClick={()=>handleAdopted(id)}>Adoptame</Button>
      </Link>
      </Wrapper>
       
    
    </Card>
  )
}

export default PetCard