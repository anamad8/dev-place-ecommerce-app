import React, {useState} from 'react';
import style from './Registro.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate } from "react-router-dom";

function Registro() {

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
            errors.last_name = '*Se requiere el ampellido'
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
        
        console.log("valider", Object.keys(errors).length === 0)
        
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

        console.log(registro)

        const err = validate(registro)

        setErrors(err)

        const token = localStorage.getItem("token")

        axios.post('http://localhost:5050/v0/users',registro, {
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

    

    return (
        <>
            <div className={style.blak}></div>
            <div className={style.registro}>
                <form  className={style.registroFrom} action="" onSubmit= {(e) => handleSubmit(e)}>
                    <input type="text" placeholder='escribe tu nombre' name="name" value= {registro.name}  onChange={(e) => handleChange(e)}/>
                    {errors.name && (
                        <p className={style.error}>{errors.name}</p>
                    )}
                    <input type="text" placeholder='escribe tu ampellido' name="last_name" value= {registro.last_name} onChange={(e) => handleChange(e)}/>
                    {errors.last_name && (
                        <p className={style.error}>{errors.last_name}</p>
                    )}
                    <input type="email" placeholder='escribe tu email' name="email" value= {registro.email} onChange={(e) => handleChange(e)}/>
                    {errors.email && (
                        <p className={style.error}>{errors.email}</p>
                    )}
                    <input type="password" placeholder='escribe tu password' name="password" value= {registro.password} onChange={(e) => handleChange(e)}/>
                    {errors.password && (
                        <p className={style.error}>{errors.password}</p>
                    )}
                    <div className={style.radio}> 
                        <label htmlFor="">admin</label>
                        <input type="radio" name="admin" value={true} onChange={(e) => handleChange(e)}  />
                        <label htmlFor="">No admin</label>
                        <input type="radio" name="admin" value={false} onChange={(e) => handleChange(e)} />
                    </div>
                    {errors.admin && (
                        <p className={style.error}>{errors.admin}</p>
                    )}

                    <button>Registrarse</button>

                    <div className={style.loginLink}>
                        <p>Si ya tienes un usuario <Link>Login</Link></p>
                    </div>
                </form>
                
                
            </div>
        
        </>
    )
}

export default Registro
