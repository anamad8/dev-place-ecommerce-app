import React, { useContext } from 'react';
import { DataContext } from '../contex/DataContex';

export const Modal = ({id, image, name, price, setModal}) => {

    const { addItemToCart } = useContext(DataContext)
    const produc = {id, image, name, price}

    return (
        <div className='modal_container' >
            <div className='modal_detalles'>
                <button className='modal_cerrar' onClick={() => {setModal(false)}}>X</button>
                <div className='modal_titulo'>
                    <h2>{name}</h2>
                    <img src={image} alt="" />
                </div>

                <div className='modal_compra'>
                    <p>Precio: ${price}</p>
                    <button onClick={() => {
                  addItemToCart(produc)
                }} >Comprar</button>
                </div>
            </div>
        </div>
    )
}
