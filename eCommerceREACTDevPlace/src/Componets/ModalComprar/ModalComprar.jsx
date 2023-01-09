import React from 'react';
import style from './ModalComponente.module.css';
import Contador from '../Contador/Contador';

function ModalComprar({image, name, price, setModal}) {

  return (
    <div className={style.modal}>
        <div className={style.container}>
            <button className={style.btnX} onClick={() => {
                setModal(false);
              }}>
                X
            </button>
        <div className={style.producto}>
            <div className={style.card}>
                <img src={image} alt="" />
                {/* <img src={img2} alt="" /> */}
                <div className={style.info}>
                    <h2>{name}</h2>
                    <p>Precio: $ {price}</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tempore aspernatur ex expedita 
                    sapiente sed vero eveniet, dolorum numquam dicta aliquid dolor totam ab dolorem obcaecati deleniti
                    deserunt quos esse!
                </p>
                
                
                </div>
            </div>
            
            
          </div>
        </div>
    </div>
  )
}

export default ModalComprar