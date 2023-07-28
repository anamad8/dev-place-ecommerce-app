import { Routes, Route} from "react-router-dom";
import {Home, Productos, Login, Registro, Carrito, Cargar } from "./pages";
import {Navbar} from "./components"

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Productos" element={<Productos/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Registro" element={<Registro/>} />
        <Route exact path="/Carrito" element={<Carrito/>} />
        <Route exact path="/Cargar" element={<Cargar/>} />
      </Routes>

    </>
  );
}

export default App;
