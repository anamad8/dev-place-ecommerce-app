import React from 'react';
import Card from '../Card/Card';
import style from './Articulos.module.css';

function Articulos({ data, busqueda, articulos }) {

  //  const resultado = !busqueda ?  dataArticulos : dataArticulos.filter(dato => (dato.name.toLowerCase().includes(busqueda.toLowerCase()) ))

  // console.log(resultado)

  return (
    <div className={style.container}>
      
        { 
            articulos[0] === 'Todos'  ?

            data?.map(dato => (
              <Card  key={dato.id} id={dato.id} genero={dato.genero} image={dato.image} categoria={dato.categoria} img2={dato.img2}
              name={dato.name} price={dato.price}/> 
            ))  :

            articulos?.map(dato => (
            <Card  key={dato.id} id={dato.id} genero={dato.genero} image={dato.image} categoria={dato.categoria} img2={dato.img2}
            name={dato.name} price={dato.price}/> 
          ))

        }

    </div>
  )
}

export default Articulos