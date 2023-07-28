import React, { useContext, useState } from 'react';
import ver from '../img/ion_eye.png';
import carrito from '../img/carrito.png';
import editar from '../img/editar.png';
import { Modal } from './Modal';
import { DataContext } from '../contex/DataContex';
import { ModalEdita } from './ModalEdita';

export function Card({id, gender, category, image, name, price}) {
  // console.log(id, gender, categoria, image, name, price)

  const [modal, setModal] = useState(false)
  const [modalEditar, setModalEditar] = useState(false)
  const { addItemToCart } = useContext(DataContext)

  const produc = {id, image, name, price}

  const admin =  localStorage.getItem("admin")

  return (
    <div className='card_container'>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <div className='card_icon'>
            <img src={ver} onClick={() => {
                  setModal(true);
                }} alt="ver" />
            <>
            {
              admin === "true" ?
              <img src={editar} onClick={() => {
                setModalEditar(true);
                }} alt="editar" />
                :
                <></>
            }
            </>
            
            <img src={carrito} alt="carrito" onClick={() => {
                  addItemToCart(produc)
                }} />
        </div>
        
        {
          modal ? <Modal id={id} image={image}  price={price} name={name}
          setModal={setModal} modal={modal}/>
          :
          <></>
        }

        {
          modalEditar ? 
          <ModalEdita id={id} image={image} fm={gender} categorias={category} precio={price} titulo={name} setModalEditar={setModalEditar} modal={modal}/>
          :
          <></>
        }
    </div>
  )
}

