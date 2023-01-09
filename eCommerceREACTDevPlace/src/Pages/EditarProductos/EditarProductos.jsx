import React, { useState,useEffect} from 'react';
import style from './EditarProductos.module.css';
import axios from 'axios';
import EditaArticulo from '../../Componets/EditaArticulo/EditaArticulo';

function EditarProductos() {

    const [dataArticulos, setDataArticulos] = useState([]);

    const [modalEdirar, setModalEditar] = useState(false);

    const [articulUpdated, setArticulUpdated] = useState(false);

    const [image,setImage] = useState("");
    const [name, setName] = useState("");
    const [gender,setGender] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const setdataName = (e, data)=>{
        if (e.target.value === ""){
            return data
        }else{
            setName( e.target.value)
        }
        console.log(data)
        
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

    const getProductData = async () => {
        const res = await axios.get("http://localhost:5050/v0/product", {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (res.data.data) {
            setDataArticulos(res.data.data)

        } else {
            console.log("error")
        }
    }

    useEffect(() => {
        getProductData()
        setArticulUpdated(false)
    }, [articulUpdated])

    const datos = {
        name,
        price,
        gender,
        category

    }
    
    function handleUpdate(id) {
        
        setModalEditar(true)

        axios.put(`http://localhost:5050/v0/product/${id}`, datos )
    
        .then (res => console.log('Cambio!!!', res)
        .catch(err => console.log(err)))
        
        window.location.reload()
    }

    function handleDeleti(id){
        axios.delete(`http://localhost:5050/v0/product/${id}`)
        .then (res => console.log('Deleted!!!', res)
        .catch(err => console.log(err)))

        setArticulUpdated(true)
        
    }



    return (
        <div className={style.cargar}>
            <div className={style.blanco}></div>

            <h2>Editar los productos</h2>
            <div className={style.general}>
            
                <div className={style.verProductos}>
                    <EditaArticulo dataArticulos={dataArticulos} handleUpdate={handleUpdate} handleDeleti={handleDeleti}
                    setdataName={setdataName} setdataPrice={setdataPrice} setdataGender={setdataGender} setdataCargory={setdataCargory} />
                </div>

            </div>
        </div>
    )
}

export default EditarProductos
