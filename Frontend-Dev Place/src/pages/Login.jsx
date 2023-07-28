import axios from 'axios';
import React, { useContext, useState } from 'react';
import {useNavigate } from "react-router-dom";
import { DataContext } from '../contex/DataContex';

export function Login() {

  const history = useNavigate()
  const { guardarToken} = useContext(DataContext)

  const [login, setlogin] = useState({
    email:"",
    password:"",
  });

  const[errors, setErrors] = useState({});

  function validate(datos){
    let errors = {}

    if(!datos.email){
        errors.email = '*Se requiere el email';
    }
    if(datos.password.length < 8){
        errors.password = '*Se requiere la password que sea mayor a 8 caracteres';
    }
    
    return errors
    
} 

  function handleChange(e) {
    setlogin({
        ...login,
        [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();

    const err = validate(login)
    // console.log(err)
    setErrors(err)

    if (Object.keys(err).length === 0){
        const token = localStorage.getItem("token")

        axios.post('http://localhost:8080/v0/login',login, {
            headers: {
            Authorization: 'Bearer ' + token,
            "acceso": token
        }})

            .then(({ data }) => {
                localStorage.setItem("token",data.tokenAccess)
                localStorage.setItem("name",data.user.name)
                localStorage.setItem("admin",data.user.admin)
                guardarToken(data)

            })
            .catch(({ response }) => {
                console.log(response.data)
            })

        history('/')
    }
  }

  return (
    <div className='login_container'>
      <form action="" onSubmit= {(e) => handleSubmit(e)}>
        <label htmlFor="">Email</label>
        <input type="email" name="email" value= {login.email} onChange={(e) => handleChange(e)}/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" value= {login.password} onChange={(e) => handleChange(e)}/>
        <button>Enviar</button>
      </form>
      <div className='login_error'>
        {errors.email && (
          <p>{errors.email}</p>
        )}
        {errors.password && (
          <p>{errors.password}</p>
        )}
      </div>
      
    </div>
  )
}

