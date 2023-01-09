import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import { FaFacebookSquare, FaInstagram} from 'react-icons/fa';

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footerEnlaces}>
                
                <div className={style.link}>
                    <h2>NAVEGACIÓN</h2>
                    <Link>Mujer</Link>
                    <Link>Hombre</Link> 
                    <Link>Faq</Link>
                </div>
                <div className={style.comentario}>
                    <p>Si tenés tu local mayorista y querés tener un lugar en nuestro catálogo de mayoristas en Mar del Plata, escribinos!</p>
                </div>
                <div className={style.info}>
                    <h3>INFO & CONTACTO</h3>
                    <p>Zona comercial de Mar del Plata</p>
                    <p>Mail: stellam_anabel@hotmail.com</p> 
                    <div className={style.icon}>
                        <Link><FaFacebookSquare/></Link>
                        <Link><FaInstagram/></Link>
                    </div>
                    
                </div>
            </div>
            <div className={style.footerDerechos}>
                <p>Louis Vuitton - 2022. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer
