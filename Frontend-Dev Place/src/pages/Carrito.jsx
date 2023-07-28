import React, { useContext, useState } from 'react'
import { DataContext } from '../contex/DataContex';
import { BtnContador } from '../components';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Carrito = () => {
    const history = useNavigate()

    const [verTotal, setVerTotal] = useState(); 
    const { cartItems,setCartItems} = useContext(DataContext);
    const totalTitulo = cartItems.map( i => i.name )
    const totalPrecio = cartItems.map( i => i.price )
    const totalAmount = cartItems.map( i => i.amount )
    const total = cartItems.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );

    const compra = () => {
        setCartItems([])

        Swal.fire({
            title: 'Compra Exitosa',
            text: 'Su compra fue correcta.',
            icon: 'success',
            confirmButtonText: 'OK'
        })

        history('/')
    }

    return (
        <div className='carrrito_container'>
            <div className='carrrito_caja'>
                <h2>Realise su compra</h2>
                <table>
                    <thead>
                        <tr>
                            <th>titulo</th>
                            {
                                totalTitulo.map(i => (<td key={i}>{i}</td>))
                            }       
                        </tr>
                    </thead>

                        <thead>
                            <tr>
                                <th>precio</th>
                                {
                                    totalPrecio.map(i => (<td key={i}>{i}</td>))
                                }
                            </tr>
                        </thead>

                        <thead>
                            <tr>
                                <th>cantidad</th>
                                {
            
                                    cartItems.map((item, i) => ( 
                                        <BtnContador key={i} item={item} />
                                    ))

                                }
                                </tr>
                        </thead>
                </table>

                <>
                    {
                        cartItems.length === 0 ?
                        <><p>Total: <span>{total}</span></p></>
                        :
                        <>
                            <p>Total: <span>{total}</span></p>
                            <button className='carrrito_btnFinalizar' onClick={()=>(compra())}>Finalizar</button>
                        </>
                    }
                    
                </>

            </div>
        </div>
    )
}
