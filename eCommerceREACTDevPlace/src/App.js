import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Componets/Header/Header.jsx';
import Home from './Pages/Home/Home.jsx';
import Productos from './Pages/Productos/Productos';
import Faq from './Pages/Faq/Faq';
import Comprar from './Pages/Comprar/Comprar';
import Registro from './Pages/Registro/Registro';
import Login from './Pages/Login/Login';
import CargarProductos from './Pages/CargarProductos/CargarProductos';
import EditarProductos from './Pages/EditarProductos/EditarProductos'




function App() {

  return (
    <>

      <Header/> 

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Productos" element={<Productos/>} />
        <Route exact path="/Faq" element= {<Faq/>} />
        <Route exact path="/Comprar" element= {<Comprar/>} />
        <Route exact path='/Registro' element={<Registro/>}/>
        <Route exact path='/Login' element={<Login/>}/> 
        <Route exact path='/CargarProductos' element={<CargarProductos/>}/>
        <Route exact path='/EditarProductos' element={<EditarProductos/>}/>
      </Routes>

    </>

  );
}
//asdsada
export default App;
