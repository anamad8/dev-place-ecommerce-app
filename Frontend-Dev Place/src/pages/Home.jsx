/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext} from 'react'
import { DataContext } from '../contex/DataContex';
import foto1 from '../img/foto.png';
import foto2 from '../img/foto2.jpg';
import { Footer } from '../components';
import { useNavigate } from 'react-router-dom';

export function Home() {

  const { data, category, setArticulos } = useContext(DataContext)
  const history = useNavigate()

  const handleClick = (e) => {
    let filtrado; 
    if(e.target.innerText){
      filtrado = data.filter(ar => ar.name.includes(e.target.innerText) )
      setArticulos(filtrado)
    }
    history('/Productos')

  }

  return (
    <div className='home_home'>
        
        <div className="carousel-wrapper">
          <span id="item-1"></span>
          <span id="item-2"></span>
          <span id="item-3"></span>
          <div className="carousel-item item-1">
            <a href="#item-3" className="arrow-prev arrow"></a>
            <a href="#item-2" className="arrow-next arrow"></a>
          </div>

          <div className="carousel-item item-2">
            <a href="#item-1" className="arrow-prev arrow"></a>
            <a href="#item-3" className="arrow-next arrow"></a>
          </div>

          <div className="carousel-item item-3">
            <a href="#item-2" className="arrow-prev arrow"></a>
            <a href="#item-1" className="arrow-next arrow"></a>
          </div>
        </div>

        <div className='home_fotos'>
          <img src={foto1} alt="" />
          <img src={foto2} alt="" />
        </div>

        <div className='home_iten'>
          <h2>Características puntuales</h2>
          <div className='home_btn'>
            {
              category.map((name,key)=> (<button key={key}onClick={handleClick}>{name.name}</button>))
            }
          </div>
        </div>

      <Footer/>
    </div>
  )
}

