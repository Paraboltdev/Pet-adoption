
import './App.css';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Main from './components/Main';
import AdoptGrid from './components/AdoptGrid';
import AdoptForm from './components/AdoptForm';





function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/github.io.pet-adoption" element={<Main />}/>
      <Route path="/adopt" element={<AdoptGrid />}/>
      <Route path="/adoptForm" element={<AdoptForm />}/>
      
      

    </Routes>

    </BrowserRouter>
  
    </>
  );
}

export default App;
