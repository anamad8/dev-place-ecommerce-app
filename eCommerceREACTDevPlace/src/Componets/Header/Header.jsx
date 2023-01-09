import React, {useState, useContext} from 'react';
import style from'./Heder.module.css';
import logo from '../../img/yl.png'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { DataContext} from '../../Contex/DataContex'
import Carrito from '../Carrito/Carrito';
import IconLogin from '../IconLogin/IconLogin';


function Header() {

  const { busqueda, setBusqueda, tokenData } = useContext(DataContext )

  // console.log(localStorage.getItem("name")[0])
  

  const [registrdo, setResgistrado] = useState(()=>{
    if(localStorage.getItem('name') !== undefined  && localStorage.getItem("name")) return localStorage.getItem("name")
    else console.log("no ahi ususrio")
  })

  

  const handleChange=e=>{
    setBusqueda(e.target.value);
    
  }

  console.log("registrdo",registrdo)


  return (
    <div className={style.header}>
        <div className={style.logo}>
            <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className={style.link}>
            <Link to="/">Home</Link>
            <Link to="/Productos">Producto</Link>
            <Link to="/Faq">FAQ</Link>
        </div>
        {/* <div className={style.buscar}>
          <input type="text" placeholder='Buscar...' value={busqueda} onChange={handleChange}/>
          <button><FaSearch/></button>
        </div> */}
        
        {
          !registrdo ?
          <>
            <div className={style.linkRegistro}>
              <Link  to="/Registro">Registrarse</Link>
            </div>
            <div className={style.linkLogin}>
              <Link  to="/Login">Login</Link>
            </div>
          </> :
          <>
            <Carrito/>
            <IconLogin />
          </>
          


        }
        
        
    </div>
  )
}

export default Header