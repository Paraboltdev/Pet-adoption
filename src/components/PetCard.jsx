import React, { useContext } from 'react'
import PetContext from '../Context/PetContext'
import {Card , Wrapper, Button, Par,Place, Img} from '../Styles'

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