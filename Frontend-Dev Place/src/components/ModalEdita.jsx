import axios from 'axios';
import {useState} from 'react'

export const ModalEdita = ({id,image,fm,categorias,precio,titulo,setModalEditar}) => {

    const [name, setName] = useState(titulo);
    const [price, setPrice] = useState(precio);
    const [gender,setGender] = useState(fm);
    const [category, setCategory] = useState(categorias);

    const categoria = categorias === 1 ? "Buzo" :  categorias === 2 ? "Jeans" :  "Remera";
    const genero = fm === "Femele" ? "Femenino" : "Masculino";

    const setdataName = (e, titulo)=>{
        if (e.target.value === ""){
            setName(titulo)
        }else{
            setName( e.target.value)
        }
    } 

    const setdataPrice = (e,precio)=>{
        if (e.target.value === ""){
            setPrice(precio)
        }else{
            setPrice( e.target.value)
        }
        
    } 

    const setdataGender = (e)=>{
        if (e.target.value === ""){
            setGender(genero)
        }else{
            setGender( e.target.value)
        }
    }

    const setdataCargory = (e)=>{
        if (e.target.value === ""){
            setCategory(category)
        }else{
            setCategory( e.target.value)
        }
    }

    const datos = {
        name,
        price,
        gender,
        category
    }

    //Funcion para editar producto
    function handleUpdate(id) {
        setModalEditar(true)

        axios.put(`http://localhost:8080/v0/product/${id}`, datos )
        .then (res => console.log('Cambio!!!', res)
        .catch(err => console.log(err)))
        window.location.reload()
    }

    // Funcion para eliminar producto
    function handleDeleti(id){
        axios.delete(`http://localhost:8080/v0/product/${id}`)
        .then (res => console.log('Deleted!!!', res)
        .catch(err => console.log(err)))
        window.location.reload()
        
    }


    return (
        <div className='modalEditar_container'>
            <div className='modalEditar_detalles'>
                <button className='modalEditar_cerrar' onClick={() => {setModalEditar(false)}}>X</button>
                <div className='modalEditar_titulo'>
                        <input type="text" name="name" placeholder={titulo} onChange={(e) =>setdataName(e, titulo)}/>
                        <img src={image} alt="" />
                        <input type="number" name="price" id="" placeholder={precio} onChange={(e) =>setdataPrice(e,precio)}/>
                        <select className='modalEditar_genero' id="genero" name="genero" onChange={(e) =>setdataGender(e,genero)}>
                            <option value="" >{genero}</option>
                            <option value="Femele" >Femenino</option>
                            <option value="Male" >Masculino</option>
                        </select> 
                        <select className='modalEditar_caregory' id="cargory" name="cargory"  onChange={(e) =>setdataCargory(e,category)}>
                            <option value="" >{categoria}</option>
                            <option value="1" >Buzo</option>
                            <option value="3" >Remera</option>
                            <option value="2" >Jeans</option>  
                        </select> 
                        <div className='modalEditar_btn'>
                            <button className='modalEditar_eliminar'onClick={() => handleDeleti(id)}>Eliminar</button>
                            <button className='modalEditar_editar' onClick={() => handleUpdate(id)}>Editar</button>
                        </div>
                        
                </div>
            </div>
            
        </div>
    )
}
