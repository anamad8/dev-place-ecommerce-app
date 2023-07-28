import React, {createContext, useState, useEffect} from "react";
import axios from 'axios';

export const DataContext = createContext({});

export const DataProveder = ({children}) => {

      //estado para saver que categoria pertenese
    const [articulos, setArticulos] = useState()

    // el estado para  traer todos los productos de db
    const [data, setData] = useState([])

    const getUserData = async () => {
        const res = await axios.get("http://localhost:8080/v0/product", {
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


    // el estado para  traer todas las categorias de db
    const [category, setCategory] = useState([])

    const getCategory = async () => {
        const res = await axios.get("http://localhost:8080/v0/category", {
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

    // creo el estado para la info del token
    const [tokenData,setTokenData] = useState([])
    
    const guardarToken =(token)=> {
        setTokenData(
            token
        );
    }

    // estado del carrito
    const [cartItems, setCartItems] = useState(()=> {
        try {
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        }catch{
            return [];
        }
    });

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

    useEffect(() => {
        getUserData()
        getCategory()
        
    }, [])
    
    return(
        <DataContext.Provider value={{data, category, tokenData, setTokenData, guardarToken,articulos, setArticulos,cartItems,addItemToCart,deleteItemToCart,setCartItems}}>
            {children}
        </DataContext.Provider>
    )

}