import React from 'react'
import styled from 'styled-components'
import {FaRegCopyright} from 'react-icons/fa';

const today = new Date()
const date = today.getFullYear()
const Footer = () => {
  return (
    <FooterContainer>
    
        <p><span><FaRegCopyright /></span> Adopta un animal </p>
        <p> 2021 - {date}</p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
font-size: 1.1rem;

span{
    margin-right: 8px;
    display: flex;
    align-items: center;
}


p{
    display: flex;
    align-items: center;
    
}
`