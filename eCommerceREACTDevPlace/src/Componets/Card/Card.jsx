import React,{ useContext, useState } from 'react';
import style from './Card.module.css';
import ModalComprar from '../ModalComprar/ModalComprar';
import { DataContext } from '../../Contex/DataContex';

function Card({id, genero, categoria, image, img2, name, price}) {

  const [modal,setModal] = useState(false);

  const { addItemToCart } = useContext(DataContext)

  const produc = {id, genero, categoria, image, img2, name, price}
  
  // src={`/uploads/${el.userimg}`}
  // console.log("img",image)

  return (
    <div className={style.card}>
        <img className={style.img} src={image} alt="" />
        <h3>{name}</h3>
        <p>$ {price}</p>
        
        <div className={style.btn}>
          <button value={categoria} onClick={() => {
                  addItemToCart(produc)
                }}>Comprar</button>
          <button value={categoria} onClick={() => {
                  setModal(true);
                }}>Ver más</button>
        </div>
      
      {
        modal ? <ModalComprar image={image}  price={price} name={name}
        setModal={setModal} modal={modal}/>
        :
        <></>
      }
      
        

    </div>
  )
}

export default Card;