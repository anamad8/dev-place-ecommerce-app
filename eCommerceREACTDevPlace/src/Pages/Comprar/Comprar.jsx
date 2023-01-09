import React,{useContext, useState} from 'react';
import style from './Comprar.module.css';
import visa from '../../img/tarjeta-visa.png';
import mastercad from '../../img/tarjeta-maestro.png';
import { DataContext } from '../../Contex/DataContex';
import {useNavigate } from "react-router-dom";

function Comprar() {

    const { cartItems, addToInfo, infoCompar } = useContext(DataContext);
    console.log(cartItems)
    const history = useNavigate()

    const [tarjeta, setTarjeta ] = useState()
    const [datos, setDatos] = useState({
        user_name: "",
        user_email:"",
        num_tarjeta:"",
        fecha_tarjeta:""

    });

    const[errors, setErrors] = useState({});


    const totalTitulo = cartItems.map( i => i.name )
    const totalPrecio = cartItems.map( i => i.price )
    const totalAmount = cartItems.map( i => i.amount )
    const total = cartItems.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );

    function handleChange(e) {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    console.log(datos)

    function validate(datos){
        let errors = {}
    
        if(!datos.user_name){
            errors.user_name = 'Se requiere el nombre';
        }
        if(!datos.user_email){
            errors.user_email = 'Se requiere el email';
        }
        if(!datos.num_tarjeta){
            errors.num_tarjeta = 'Se requiere el número de tarjeta'
        }
        if(!datos.fecha_tarjeta){
            errors.fecha_tarjeta = 'Se requiere el la fecha de vencimiento'
        }
        console.log("valider", Object.keys(errors).length === 0)
        
        return errors
        
    } 

    function handleSubmit(e){
        e.preventDefault();

        const err = validate(datos)

        setErrors(err)

        if(Object.keys(err).length === 0){
                
            addToInfo(datos)

            alert('Su compra fue realizada')
            
            setDatos({
                user_name:"",
                user_email:"",
                num_tarjeta:"",
                fecha_tarjeta:""
                
            })

            localStorage.removeItem("cartProducts")
            // localStorage.clear("cartProducts")
            
            history('/')
        }

    }

    console.log(infoCompar)

    return (
        <div className={style.comprar}>
            <div className={style.blanco}></div>
                <h2>Realise su compra</h2>
                    <form className={style.form} onSubmit= {(e) => handleSubmit(e)}>
                        <input type="text"  placeholder='Ingrese su nompre' name="user_name" value= {datos.user_name} onChange={(e) => handleChange(e)}/>
                        {errors.user_name && (
                                <p className='error'>{errors.user_name}</p>
                            )}
                        <input type="email" placeholder='Ingrese su email' name="user_email" value= {datos.user_email} onChange={(e) => handleChange(e)}/>
                        {errors.user_email && (
                                <p className='error'>{errors.user_email}</p>
                            )}
                        <h3>Su compra es de: </h3>
                        <div className={style.tabla}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>titulo</th>
                                        {
                                            totalTitulo.map(i => (<td key={i}>{i}</td>))
                                        }
                                    </tr>
                                </thead>

                                <thead>
                                    <tr>
                                        <th>precio</th>
                                        {
                                            totalPrecio.map(i => (<td key={i}>{i}</td>))
                                        }
                                    </tr>
                                </thead>

                                <thead>
                                    <tr>
                                        <th>cantidad</th>
                                        {
                                            totalAmount.map(i => (<td key={i}>{i}</td>))
                                        }
                                    </tr>
                                </thead>

                                <thead>
                                    <tr>
                                        <th>Total</th>
                                        <td colSpan="4">{total}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className={style.tarjeta}>
                            <input type="radio" id="visa" name="tarjeta" value="visa" onChange={e =>setTarjeta(e.target.value)}/>
                            <label htmlFor="visa">Visa</label>
                            <input type="radio" id="mastecar" name="tarjeta" value="mastecar" onChange={e =>setTarjeta(e.target.value)}/>
                            <label htmlFor="mastecar">Mastecar</label>
                        </div>
                        <div className={style.imgTarjeta}>
                            {
                                tarjeta === "visa" ? <img src={visa} alt="" /> 
                                :
                                <img src={mastercad} alt="" />
                            }
                            <div className={style.numTarjeta}>
                                {datos.num_tarjeta}
                            </div>
                            <div className={style.fechaTarjeta}>
                                {datos.fecha_tarjeta}
                            </div>
                        </div>
                        

                        <div className={style.datoTarjeta}>
                            <input type="number" placeholder="Número de la targeta" name="num_tarjeta" value= {datos.num_tarjeta} onChange={(e) => handleChange(e)}/>
                            {errors.num_tarjeta && (
                                <p className='error'>{errors.num_tarjeta}</p>
                            )}

                            <input type="text" placeholder='Fecha vencimiento'  name="fecha_tarjeta" value= {datos.fecha_tarjeta} onChange={(e) => handleChange(e)}/>
                            {errors.fecha_tarjeta && (
                                <p className='error'>{errors.fecha_tarjeta}</p>
                            )}
                        </div>

                        <button className={style.btnComprar}>Comprar</button>
                        

                    </form>
            

        </div>
    )
}

export default Comprar
