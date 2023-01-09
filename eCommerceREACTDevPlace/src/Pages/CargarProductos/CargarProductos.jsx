import React, { useState} from 'react';
import style from './CargarProductos.module.css';
import axios from 'axios';
import {useNavigate } from "react-router-dom";

function CargarProductos() {

  const [image,setImage] = useState("");
  const [name, setName] = useState("");
  const [gender,setGender] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const history = useNavigate()

  const setdataName = (e)=>{
    setName(e.target.value)
    
  }  
  const setdataGender = (e)=>{
    setGender(e.target.value)
    
  } 

  const setdataPrice = (e)=>{
    setPrice(e.target.value)
    
  }  
  const setdataCargory = (e)=>{
    setCategory(e.target.value)
    
  } 

  const setimgfile = (e)=>{
    setImage(e.target.files[0])
  }

  async function handleSubmit(e){
    e.preventDefault();

    var formData = new Object();
    formData.name = name;
    formData.price = parseInt(price);
    formData.image = image;
    formData.gender = gender;
    formData.category = parseInt(category);

    const res = await axios.post('http://localhost:5050/v0/product', formData , {
      headers:{
        'Accept': 'application/json',
        "Content-Type":"multipart/form-data",
          // 'Content-Type': 'application/json',
      }
    })
    console.log(res)

    history('/')
  }

  return (
    <div className={style.cargar}>
      <div className={style.blanco}></div>
      <h2>Cargar los productos</h2>

      <form className={style.formCargar} onSubmit= {(e) => handleSubmit(e)}>
        <label htmlFor="titulo">Titulo del Producto:
        </label>
        <input type="text" name="name"   onChange={ (e)=>{setdataName(e)}} />
        <label htmlFor="gender">Genero:</label>

        <div className={style.genero}>
          <input type="radio" id="gender" name="gender" value="Femele"  onChange={(e) =>setdataGender(e)}/>
          <label htmlFor="html">Mujer</label>
          <input type="radio" id="gender" name="gender" value="Male"  onChange={(e) =>setdataGender(e)}/>
          <label htmlFor="css">Hombre</label>
        </div>

        <label htmlFor="price">Precio:</label>
        <input type="number" name="price"  onChange={(e) =>setdataPrice(e)}/>

        
        <label htmlFor="image" className={style.addImage}>
          Cargar Imagen +
          <input type="file" multiple name="image" id="image" onChange={(e) =>setimgfile(e)}/>
        </label>
        
        

        <label htmlFor="cargory">Categoria:</label>

        <select id="cargory" name="cargory"  onChange={(e) => setdataCargory (e)}>
        <option value="" >Categorias</option>
          <option value="1" >Buzo</option>
          <option value="3" >Remera</option>
          <option value="2" >Jeans</option>  
        </select>

        {/* <label htmlFor="descripcion">Descripción del Producto:</label>
        <textarea type="text"  name="descripcion"  /> */}
        <button className={style.btnCargar}>Cargar Producto</button>
      </form>
    </div>
  )
}

export default CargarProductos
