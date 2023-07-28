import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { useState } from 'react';
import menu from '../img/menu-hamurgesa.png'
import useWindowResize from '../hooks/useWindowResize';
import { DataContext } from '../contex/DataContex';
import abajo from '../img/abajo.png';


export function Navbar() {

  const admin =  localStorage.getItem("admin")
  // console.log(localStorage.getItem("admin") === "true")

  const { tokenData} = useContext(DataContext)
  const { width } = useWindowResize(); 
  const [visible, setVisible] = useState(false);

  //Para saber el nombre del usuario
  const usuario = localStorage.getItem("name")

  //Deslogiarse
  function sacarUser() {
    localStorage.clear()
    window.location.reload(true)

}

  return (
    <div className='navbar_containerSuperior'>
      <div className='navbar_container'>

        <img src={logo} alt="" />

        <div className='navbar_link'>
            <Link to="/">Home</Link>
            <Link to="/Productos">Productos</Link>
        </div>

        <div className='navbar_cuenta'>

          {
            admin ?
            <>
              <button onClick={() => {setVisible(!visible)}}>Bienvenido {usuario} <img src={abajo} alt="abajo" /></button>
              {
                
                  visible ?
                  <div className='navbar_menu_login'>
                    {
                      admin === "true" ?
                      <>
                        <Link to="/Carrito">Carrito</Link>
                        <Link to="/Cargar">Cargar</Link>
                        <button onClick={sacarUser}>Salir</button>
                      </> 
                      :
                      <>
                        <Link to="/Carrito">Carrito</Link>
                        <button onClick={sacarUser}>Salir</button>
                      </>
                    }
                    
                  </div>
                  :
                  <></>
                
              }
            </>
            :
            <>
            {
              width < 500 ?

              <button onClick={() => {setVisible(!visible)}}><img src={menu} alt="" /></button>
              :

              <>
                <Link to="/Registro">Crear cuenta</Link>
                <Link to="/Login">Iniciar sesión</Link>
              </>
              } 
            </>
          }

            
          
        </div>

      </div>
      
      {
        !admin && visible ?
        <div className='navbar_menu'>
          <Link to="/Registro">Crear cuenta</Link>
          <Link to="/Login">Iniciar sesión</Link>
        </div>
        :
        <></>
      }
      
    </div>
    
  )
}

