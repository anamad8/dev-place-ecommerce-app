import React,{ useContext, useState, useEffect } from 'react';
import axios from 'axios';
import style from './Home.module.css';
import { Link } from 'react-router-dom';
import imgMujer from '../../img/mujer.jpg';
import imgHombre from '../../img/hombre.jpg';

import imgCrusel1 from '../../img/carusel1.jpg';
import imgCrusel4 from '../../img/carusel4.jpg';
import imgCrusel5 from '../../img/carusel5.jpg';


import Footer from '../../Componets/Footer/Footer';
import { DataContext } from '../../Contex/DataContex';
import Card from '../../Componets/Card/Card';


function Home() {

  const { data } = useContext(DataContext )

  const filtro5Articulos = data.filter(bajo => bajo.price <= 3300)

  return (
    <>
      <div className={style.contenidoCrusel}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
              <div className="carousel-item active ">
                <img src={imgCrusel1} className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={imgCrusel4} className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={imgCrusel5} className="d-block w-100" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
      </div>

      <div className={style.cardProductos}>

        {
            filtro5Articulos?.map(dato => (
                <Card  key={dato.id} id={dato.id} genero={dato.genero} image={dato.image} categoria={dato.categoria} img2={dato.img2}
                        titulo={dato.titulo} price={dato.price}/>
            ))    
        }
        
      </div>

      <div className={style.home}>

        <div className={style.ropa}>
          <h2>Ropa para ellas</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusantium sed, 
            dolor voluptas commodi, officia architecto perferendis suscipit iste quo saepe deleniti natus 
            laboriosam fugiat nostrum hic molestias doloribus dolorum!
          </p>
        </div>
          
        <Link to="/Productos" ><img src={imgMujer} alt="" /></Link>
        <Link to="/Productos"><img src={imgHombre} alt="" /></Link>
        
        <div className={style.ropa}>
          <h2>Ropa para ellos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusantium sed,
              dolor voluptas commodi, officia architecto perferendis suscipit iste quo saepe deleniti natus 
              laboriosam fugiat nostrum hic molestias doloribus dolorum!
          </p>
        </div>
      </div>
    
    <Footer/> 
    </>
  )
}

export default Home