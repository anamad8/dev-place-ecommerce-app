import React, { useContext } from 'react'
import { DataContext } from '../contex/DataContex';
import {Card} from '../components';

export function Productos() {
  const { data, category,articulos, setArticulos } = useContext(DataContext)


  const nameCategory = category.map((name,key) => (name.name ))
  
  // console.log(data)

  const handleClick = (e) => {
    let filtrado;
    if(e.target.innerText){
      filtrado = data.filter(ar => ar.name.includes(e.target.innerText) )
      setArticulos(filtrado)
    }
  }

  return (
    <div className='productos_container'>

          <div className='productos_filtro'>
            <h3>Filtros</h3>
              <button onClick={()=> setArticulos(data)} >Todos los productos</button>
            <div>
              <p>Categorías</p>
              <div className='productos_category'>
                {
                  nameCategory.map((name,key) => (<button id={key} onClick={handleClick} >{name}</button>))
                }
              </div>
            </div>
          </div>
          <div className='productos_producto'>

            {
              articulos === undefined ?

              data?.map(dato => (
                <Card  key={dato.id} id={dato.id} gender={dato.gender} image={dato.image} category={dato.category} name={dato.name} price={dato.price}/>))
              :

              articulos?.map(dato => (
                <Card  key={dato.id} id={dato.id} gender={dato.gender} image={dato.image} category={dato.category} name={dato.name} price={dato.price}/>))
            }       

          </div>

    </div>
  )
}

