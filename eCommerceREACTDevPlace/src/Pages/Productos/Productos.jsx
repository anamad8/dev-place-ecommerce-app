import React, { useContext, useState, useEffect } from 'react';
import style from './Productos.module.css';
import BtnFiltro from '../../Componets/BtnFiltros/BtnFiltro';
import Articulos from '../../Componets/Articulos/Articulos';

import { DataContext } from '../../Contex/DataContex';

import axios from 'axios';


function Productos() {

    const {data, busqueda} = useContext(DataContext )

    const [category, setCategory] = useState([]);
    const todasCategorias = [
		'Todos', 
        ...new Set(category.map(articulo => articulo.name)),
	]
    

    const [articulos, setArticulos] = useState(todasCategorias)
    
    const getCartegoryData = async () => {
        const res = await axios.get("http://localhost:5050/v0/category", {
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        if (res.data.data) {
            setCategory(res.data.data)

        } else {
            console.log("error")
        }
    }
    useEffect(() => {
        getCartegoryData()
    }, [])


    function fitrarArticulo(categoria) {
        if (categoria === 'Todos'){
			setArticulos(data)
			return
		}
        const filterArticulo = data.filter(ar => ar.name.includes(categoria))
        setArticulos(filterArticulo)

    }
    
    return (
        <div className={style.mujer}>
            
            <BtnFiltro todasCategorias={todasCategorias} fitrarArticulo={fitrarArticulo} />  

            <Articulos data={data} busqueda={busqueda} articulos={articulos} />

        </div>
    )
}

export default Productos