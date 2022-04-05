import { createContext, useEffect, useState } from "react";
import { mascotas } from "../Assets/mascotas";



export const PetContext = createContext()


const PetProvider = ({children})=>{
    const [animal, setAnimal]= useState([])
    const [showForm, setShowForm]= useState(null)



    
 
   
    
    const handleShowForm = ()=>{
        setShowForm(!showForm)
    }
    
      
    
    useEffect(()=>{
        const storedAnimals = JSON.parse(localStorage.getItem('adoptPet'))
        if(storedAnimals){
          setAnimal(storedAnimals)
        }
      },[])
    
     useEffect(()=>{
        localStorage.setItem('adoptPet', JSON.stringify(animal))
     },[animal])
    const data = [animal, setAnimal,showForm, setShowForm, handleShowForm]

    return(
    <PetContext.Provider value={data}>
        {children}
    </PetContext.Provider>

    )
}
export {PetProvider}
export default PetContext