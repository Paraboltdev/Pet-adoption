import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {mascotas} from '../Assets/mascotas'
import PetContext from '../Context/PetContext'
import {Button, Grid} from '../Styles'

import PetCard from './PetCard'




const AdoptGrid = () => {
  const [showModal, setShowModal]= useState(false)
  
  const [animal, setAnimal]= useContext(PetContext)
  


 

  useEffect(()=>{
      setAnimal(mascotas)
  
  },[])

  return (
    <div>
   
   
    <Grid>
        {animal.map((pet)=>(
        <PetCard  key={pet.id} pet={pet} setAnimal={setAnimal}/>
        ))}
    </Grid>
   
    </div>
    
  )
}

export default AdoptGrid

