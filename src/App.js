import './App.css';
import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
import Description from './Components/Description';
import ApiRest from './Components/Api-rest';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Calculator/>
      <Description/>
      <ApiRest/> 
      <Footer/>   
    </>
  );
}

export default App;
