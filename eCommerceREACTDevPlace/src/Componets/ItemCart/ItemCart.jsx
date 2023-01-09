import React, { useContext } from "react";
import { DataContext } from '../../Contex/DataContex';
import style from "./ItemCart.module.css";

export const ItemCart = ({ item }) => {
// Traigo del context las funciones para agregar y sacar productos del carrito 
    const { addItemToCart, deleteItemToCart} = useContext(DataContext);

    return (
        <div className={style.cartItem}>
            {item.titulo}
            <img src={item.image} alt={item.titulo} />
            <div className={style.dataContainer}>
                <div className={style.left}>
                    <p>{item.titulo}</p>
                    <div className={style.buttons}>
                        <button onClick={() => addItemToCart(item)}>
                        AGREGAR
                        </button>
                        <button onClick={() => deleteItemToCart(item)}>
                        SACAR
                        </button>
                    </div>
                </div>
                <div className={style.right}>
                    <div>{item.amount}</div>
                    <p>Total: ${item.amount * item.price}</p>
                </div>
            </div>
        </div>
    );
};
