/* eslint-disable no-undef */
import React, {createContext, useState, useEffect} from "react";
import datosMuejer from '../Datos/DatosMujer.js';
import axios from 'axios';


export const DataContext = createContext({});

export const DataProveder = ({children}) => {

    // el estado para  traer los datos de db
    const [data, setData] = useState([])

    // el estado para los articulos guardados
    const [artiduloGuardado, setArtiduloGuardado] = useState([])

    // creo el estado para el contador
    const [cantidad, setCantidad] = useState([])  

    // creo el estado para la info del comprador
    const [infoCompar, serInfoCompar] = useState([])

    // creo el estado para la info del token
    const [tokenData,setTokenData] = useState([])

    // estado del carrito
    const [cartItems, setCartItems] = useState(()=> {
        try {
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        }catch{
            return [];
        }
    });

    const getUserData = async () => {
        const res = await axios.get("http://localhost:5050/v0/product", {
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        if (res.data.data) {
            setData(res.data.data)
    
        } else {
            console.log("error")
        }
    }
    
    useEffect(() => {
        getUserData()
        
    }, [])

    useEffect(()=>{
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));

    },[cartItems])
    

//  funcion para agregar al carrito
    const addItemToCart = (product) =>{
        const inCart = cartItems.find((produtInCart) => produtInCart.id === product.id)

        if (inCart) {
            setCartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.id === product.id){
                        return {...inCart, amount: inCart.amount + 1};
                    }else return productInCart
                })
            )
        }else{
            setCartItems([...cartItems,{...product,amount: 1}]);
        }

        
    };

//  funcion para sacar al carrito
    const deleteItemToCart = (product) => {

        if (product.amount === 1) {
            setCartItems(
                cartItems.filter(productInCart => productInCart.id !== product.id)
            )
        }else{
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === product.id){
                        return {...product,amount: product.amount - 1}
                    }else return productInCart;
                })
            )
        }
        
    }
    
//-------- funcion filtar productos-------------------------------------------------------------
    const filterCategoria = (categoria) => {
        
		if (categoria === 'Todos'){
			setArticulos(datosMuejer)
			return
		}

		const filterData = datosMuejer.filter(articlulo => articlulo.categoria === categoria);
        setArticulos(filterData)
	}


//-------funcion para guardar los articulos----------------------------------------------------
    const guardarArticulos =(prenda)=> {
        setArtiduloGuardado(
            prenda
        );
    }


// ----Funcion para agregar cantidad---------------------------------------------------------------
    const cantidadRompa =(cantidad)=> {
        setCantidad(

            cantidad
        );
    }

// ----Agrega los datos de la tarjetas ---------------------------------------
const addToInfo =({user_name,user_email,num_tarjeta,fecha_tarjeta})=> {
    serInfoCompar([
        ...infoCompar,
        {
            user_name,
            user_email,
            num_tarjeta,
            fecha_tarjeta
        }]);
}

//-------funcion para guardar el token----------------------------------------------------
const guardarToken =(token)=> {
    setTokenData(
        token
    );
}

// console.log(tokenData)

    return(
        <DataContext.Provider value={{data, setData, cantidadRompa,artiduloGuardado,
                                    guardarArticulos, filterCategoria, addItemToCart, 
                                    deleteItemToCart, cartItems, addToInfo,infoCompar,
                                    guardarToken,tokenData}}>
            {children}
        </DataContext.Provider>
    )
}