import React, { useContext } from "react";
import styled from "styled-components";
import PetContext from "../Context/PetContext";
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({children, state, setState}) => {
    
    
  return (
    <>
    {state &&
      <Overlay>
        <ModalContainer>
          <ModalHeader>
              
          </ModalHeader>
          <CloseButton onClick={()=>{setState(false)}}>
           <AiOutlineClose size={30}/>
          </CloseButton>
          {children}
        </ModalContainer>
      </Overlay>
    }
    </>
  );
};

export default Modal;

const Overlay = styled.div`
width:100vw;
height: 100vh;
position:fixed;
top: 0;
left: 0;
background: rgba(0,0,0,0.5);
padding:40px;
display: flex;
align-items: center;
justify-content: center;


`;
const ModalContainer = styled.div`
  width: 500px;
  min-height: 100px;
  background: #FFECB3;
  position: relative;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
 
  @media (max-width : 1200px){
  
  padding: 15px;
  height: 90vh;
  margin-top: -55px

};

@media (max-width : 700px){
  width: 60%;
  padding: 15px;
  height: 90vh;
  margin-top: -55px

};
@media (max-width : 400px){
  margin-right: 25%

}
`
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  @media (max-width : 700px){
    margin-bottom: 5px;
  padding-bottom: 5px;

}
 
  

  h3 {
    font-weight: 500;
    color: black;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 5px;
 
  transition: 0.3s ease all;

  &:hover {
  }

  
`;
