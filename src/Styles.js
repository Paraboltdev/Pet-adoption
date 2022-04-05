import styled from "styled-components";


const Wrapper = styled.section`

display: flex;
flex-direction: column;

justify-content:center;
align-items: center;
text-align: center;
`
const Place = styled.p`
font-size: 1.5rem;

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
font-family: 'Roboto', sans-serif;
max-width: 345px;
height: auto;
background-color: #FFE0B2;

box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`
const Title = styled.h1`
text-align: center;
font-size: 4rem;
font-weight: 900
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
const Error = styled.div`
color: red;

`
const Grid = styled.ul`
display: grid;
justify-content: center;
align-align-items: center;
grid-template-columns: repeat( auto-fill, 345px);
gap: 20px;

`
const Label = styled.label`
display: block;
font-weight: bold;
padding: 10px;
min-height: 10px;
@media (max-width : 1500px){
  font-size: 1rem;
 padding: 3px;

}

`
const Input = styled.input`
font-size: 1.2rem;

height: 50px;
width:350px;
padding: 5px 10px;
border-radius: 10px;
border: solid 2px black;
@media (max-width : 700px){
  font-size: 1rem;
  height: 35px;
  width: 200px;
}
`
const Textarea = styled.textarea`

height: 150px;
width:350px;
border-radius: 10px;
font-size: 1.2rem;
padding: 5px 10px;
border: solid 2px black;
@media (max-width : 700px){
  font-size: 1rem;
  height: 155px;
  width: 200px;
}
`
const Form = styled.form`
display: grid;
justify-content: center;
align-items: center;
gap: 10px

`
const Banner = styled.div`
 background-color: #FFF9C450;
 color:#4E4A46;
 font-size: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
animation: color 5s infinite linear;


@keyframes color {
  0%   { background: #FCF3CF50; }
  20%  { background: #F9E79F50; }
  40%  { background: #FDEBD050; }
  60%  { background:#FCF3CF50; }
  80%  { background: #F9E79F50; }
  100% { background: #FDEBD050; }
}
`
export {Title, Wrapper, Card , Button, Par, Place, Img, Grid, Input,Form,Banner,Error, Textarea, Label}