import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { PetProvider } from './Context/PetContext';



ReactDOM.render(
  <PetProvider>

    <App/>

  </PetProvider>
 ,
  document.getElementById('root')
);


