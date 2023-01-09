import React,{useState, useContext} from 'react';
import style from './Contador.module.css';
import { DataContext } from '../../Contex/DataContex';

function Contador({ stock, initial }) {

    const [contador, setContador] = useState(1)

    const {cantidadRompa} = useContext(DataContext )

    cantidadRompa(contador)

  return (
    <div className={style.contador}>
        <button onClick={() => {
            if (contador > initial) {
                setContador(contador - 1);
            }
        }}> - </button>

        <span>{ contador }</span>
        
        <button onClick={() => { 
            if (contador< stock) {
                setContador(contador + 1);
            }
        }}> + </button>

    </div>
  )
}

export default Contador