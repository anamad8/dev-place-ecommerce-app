import React, { useContext } from 'react'
import { DataContext } from '../contex/DataContex';

export const BtnContador = ({item}) => {
    // Traigo del context las funciones para agregar y sacar productos del carrito 
    const { addItemToCart, deleteItemToCart} = useContext(DataContext);

    return (
        <td><button onClick={() => deleteItemToCart(item)}>-</button>{item.amount}<button onClick={() => addItemToCart(item)}>+</button></td>
    )
}
