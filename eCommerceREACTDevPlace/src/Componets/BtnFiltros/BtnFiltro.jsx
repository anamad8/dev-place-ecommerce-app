import React from 'react';
import style from './BtnFiltro.module.css';

function BtnFiltro({ todasCategorias, fitrarArticulo}) {
// console.log("BtnFiltro",todasCategorias)
// fitrarArticulo(categoria),
// const filCtegory = todasCategorias?.map(c=>c.name)

  return (
    <div className={style.filtro}>
        {
            todasCategorias?.map(categoria => (
                    <button
                        onClick={() =>(fitrarArticulo(categoria))}
                        key={categoria}
                    >
                        {categoria}
                    </button>
            ))
        }
    </div>
  )
}

export default BtnFiltro