import React, { useState } from "react";
import { Banner, Button, Title } from "../Styles";

import AdoptGrid from "./AdoptGrid";
import Modal from "./Modal";

import styledComponents from "styled-components";
import AddForm from "./AddForm";


const Main = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>   
      <Title>Adopta una mascota</Title>

      <Banner>
        <h3>Has encontrado un animal y necesita un hogar?</h3>
        <Button
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Ayudalo !
        </Button>
      </Banner>
      <AdoptGrid />

      <Modal state={showForm} setState={setShowForm}>
        <Content>
          <h1>Informacion del animal</h1>
        </Content>
        <AddForm setShowForm={setShowForm} />
      </Modal>
          
    </div>
  );
};

export default Main;

const Content = styledComponents.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;
