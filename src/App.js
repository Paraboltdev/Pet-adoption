
import './App.css';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Main from './components/Main';
import AdoptGrid from './components/AdoptGrid';
import AdoptForm from './components/AdoptForm';
import AddPet from './components/AddPet';




function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/adopt" element={<AdoptGrid />}/>
      <Route path="/adoptForm" element={<AdoptForm />}/>
      <Route path="/addPet" element={<AddPet />}/>
      

    </Routes>

    </BrowserRouter>
  
    </>
  );
}

export default App;
