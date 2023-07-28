import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function Registro() {

    const [registro, setRegistro] = useState({
        name: "",
        last_name:"",
        email:"",
        password:"",
        admin: false
    });

    const[errors, setErrors] = useState({});

    const history = useNavigate()

    function validate(datos){
        let errors = {}
    
        if(datos.name.length < 5){
            errors.name = '*Se requiere el nombre que sea mayor de 5 caracteres';
        }
        if (!datos.last_name) {
            errors.last_name = '*Se requiere el apellido'
        }
        if(!datos.email){
            errors.email = '*Se requiere el email';
        }
        if(datos.password.length < 8){
            errors.password = '*Se requiere la password que sea mayor a 8 caracteres';
        }
        if(!datos.admin){
            errors.admin = '*Se requiere si sos admin o no'
        }
        
        return errors
    }

    function handleChange(e) {
        setRegistro({
            ...registro,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        const err = validate(registro)

        setErrors(err)

        if (Object.keys(err).length === 0){
            const token = localStorage.getItem("token")

            axios.post('http://localhost:8080/v0/users',registro, {
                headers: {
                Authorization: 'Bearer ' + token,
                "acceso": token
            }})
    
                .then(({ data }) => {
    
                    console.log(data)
                    
                })
                .catch(({ response }) => {
                    console.log(response.data)
                })
    
                Swal.fire({
                    title: 'Registrado!',
                    text: 'Su registro fue correcto.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
    
                setRegistro({
                    name: "",
                    last_name:"",
                    email:"",
                    password:"",
                    admin: false
                    
                })
    
                history('/Login')
        }
    }

  return (
    <div className='registro_container'>
      <form action=""  onSubmit= {(e) => handleSubmit(e)}>
        <label htmlFor="">Nombre</label>
        <input type="text" name="name" value= {registro.name}  onChange={(e) => handleChange(e)}/>
        <label htmlFor="">Apellido</label>
        <input type="text"  name="last_name" value= {registro.last_name} onChange={(e) => handleChange(e)}/>
        <label htmlFor="">Email</label>
        <input type="email" name="email" value= {registro.email} onChange={(e) => handleChange(e)}/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" value= {registro.password} onChange={(e) => handleChange(e)}/>
        <label htmlFor="" className='registro_radio_admin'>admin</label>
        <input  className='registro_radio_admin' type="radio" name="admin" value={true} onChange={(e) => handleChange(e)}/>
        <label htmlFor=""  className='registro_radio_noadmin'>No admin</label>
        <input className='registro_radio_noadmin' type="radio" name="admin" value={false} onChange={(e) => handleChange(e)}/>
        <button>Enviar</button>
      </form>
      <div className='registro_error'>
        {errors.name && (<p>{errors.name}</p>)}
        {errors.last_name && (<p>{errors.last_name}</p>)}
        {errors.email && (<p>{errors.email}</p>)}
        {errors.password && (<p>{errors.password}</p>)}
        {errors.admin && (<p>{errors.admin}</p>)}
      </div>
      
    </div>
  )
}

