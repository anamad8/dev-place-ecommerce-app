import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import logo from '../img/logo.png';

export function Footer() {
  return (
    <div className="footer_container">
            <div className="footer_footerEnlaces">
                
                <div className="footer_logo">
                  <img src={logo} alt="" />
                </div>
                <div className="footer_comentario">
                    <p>Si tenés tu local mayorista y querés tener un lugar en nuestro catálogo de mayoristas en Mar del Plata, escribinos!</p>
                </div>
                <div className="footer_info">
                    <h3>INFO & CONTACTO</h3>
                    <p>Zona comercial de Mar del Plata</p>
                    <p>Mail: stellam_anabel@hotmail.com</p> 
                    <div className="footer_icon">
                        <Link><FaFacebookSquare/></Link>
                        <Link><FaInstagram/></Link>
                    </div>
                    
                </div>
            </div>
            <div>
                <p>Louis Vuitton - 2022. Todos los derechos reservados.</p>
            </div>
        </div>
  )
}

