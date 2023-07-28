import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Cargar = () => {

    const history = useNavigate()

    const [image,setImage] = useState("");
    const [name, setName] = useState("");
    const [gender,setGender] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

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

    const[errors, setErrors] = useState({});

    //Validar todos los campos
    function validate(image,name,gender,price,category){
        let errors = {}
    
        if(!image){
            errors.image = '*Se requiere una imagen para el producto';
        }
        if(!name){
            errors.name = '*Se requiere el titulo del producto';
        }
        if(!gender){
            errors.gender= '*Se requiere el genero para el producto';
        }
        if(!price){
            errors.price = '*Se requiere un precio para el producto';
        }
        if(!category){
            errors.category = '*Se requiere la categoria para el producto';
        }
        
        return errors
        
    } 

    async function handleSubmit(e){
        e.preventDefault();

        const err = validate(image,name,gender,price,category)
        setErrors(err)
    
        // eslint-disable-next-line no-new-object
        var formData = new Object();
        formData.name = name;
        formData.price = parseInt(price);
        formData.image = image;
        formData.gender = gender;
        formData.category = parseInt(category);

        if (Object.keys(err).length === 0){
            const res = await axios.post('http://localhost:8080/v0/product', formData , {
                headers:{
                        'Accept': 'application/json',
                        "Content-Type":"multipart/form-data",
                        // 'Content-Type': 'application/json',
                    }
                })
                console.log(res)

                Swal.fire({
                    title: 'Producto cargado con exito!',
                    text: 'El producto se cargao en la base de datos.',
                    icon: 'success',
                    confirmButtonText: 'OK'

                })
        
                setTimeout(window.location.reload(),9000);

        }

    }

    return (
        <div className='cargar_container'>
            <h2>Cargar los productos</h2>

            <form  onSubmit= {(e) => handleSubmit(e)} >
                <label htmlFor="titulo">Titulo del Producto:
                </label>
                <input type="text" name="name" onChange={ (e)=>{setdataName(e)}} />
                <label htmlFor="gender">Genero:</label>

                <div className='cargar_genero'>
                    <input type="radio" id="gender" name="gender" value="Femele" onChange={(e) =>setdataGender(e)}/>
                    <label htmlFor="html">Mujer</label>
                    <input type="radio" id="gender" name="gender" value="Male" onChange={(e) =>setdataGender(e)}/>
                    <label htmlFor="css">Hombre</label>
                </div>

                <label htmlFor="price">Precio:</label>
                <input type="number" name="price" onChange={(e) =>setdataPrice(e)}/>

        
                <label htmlFor="image" className="cargar_addImage">
                Cargar Imagen +
                <input type="file" multiple name="image" id="image"  onChange={(e) =>setimgfile(e)}/>
                </label>

                <label htmlFor="cargory">Categoria:</label>

                <select id="cargory" name="cargory" className='cargar_caregory' onChange={(e) => setdataCargory (e)}>
                    <option value="" >Categorias</option>
                    <option value="1" >Buzo</option>
                    <option value="3" >Remera</option>
                    <option value="2" >Jeans</option>  
                </select>

                <button>Cargar Producto</button>
            </form>
            <div className='cargar_error'>
                {errors.image  && (
                <p>{errors.image }</p>
                )}
                {errors.name && (
                <p>{errors.name}</p>
                )}
                {errors.gender && (
                <p>{errors.gender}</p>
                )}
                {errors.price && (
                <p>{errors.price}</p>
                )}
                {errors.category && (
                <p>{errors.category}</p>
                )}
            </div>
        </div>
    )
}
