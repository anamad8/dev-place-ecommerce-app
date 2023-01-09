import React, {useState, useContext} from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DataContext } from '../../Contex/DataContex';
import {useNavigate } from "react-router-dom";

function Login() {
    const { guardarToken, tokenData} = useContext(DataContext)

    const [login, setlogin] = useState({
        
        email:"",
        password:"",

    });

    const[errors, setErrors] = useState({});

    const history = useNavigate()

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

        setErrors(err)

        const token = localStorage.getItem("token")

        axios.post('http://localhost:5050/v0/login',login, {
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

            // window.setTimeout(history('/'), 5000);
            // window.location.reload(true)
            history('/')
            
    }

    

    return (
        <>
                <div className={style.blak}></div>
                <div className={style.login}>
                    <form  className={style.loginFrom} action="" onSubmit= {(e) => handleSubmit(e)}>
                        <input type="email" placeholder='escribe tu email' name="email" value= {login.email} onChange={(e) => handleChange(e)}/>
                        {errors.email && (
                            <p className={style.error}>{errors.email}</p>
                        )}
                        <input type="password" placeholder='escribe tu password' name="password" value= {login.password} onChange={(e) => handleChange(e)}/>
                        {errors.password && (
                            <p className={style.error}>{errors.password}</p>
                        )}

                        <button>Login</button>

                        <div className={style.registroLink}>
                            <p>Si ya tienes un usuario <Link>Registrarse</Link></p>
                        </div>
                    </form>
                    
                    
                </div>
            
            </>
    )
}

export default Login
