import React from 'react';
import style from './Faq.module.css'

function Faq() {
    return (
        <div className={style.faq}>
            <div className={style.blanco}></div>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        ¿Cuál es el mínimo de compra? ¿Dónde lo puedo ver?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            Cada tienda tiene establecido su monto minimo de compra.El mismo lo podés ver en el perfil de la 
                            tienda seleccionada. Recordá que para confirmar un pedido, siempre el monto de artículo 
                            solicitado debe ser igual o superior al monto establecido por la tienda.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        ¿Puedo agregar pedidos a mi consolidado?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            Si, debes tener en cuenta los siguientes aspectos: El pedido que quieres agregar debe estar 
                            en estado Pendiente y aun no haber sido abonado a la tienda. El consolidado debe tener menos de 
                            la mitad de paquetes en nuestro Centro Logístico. 
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        ¿Cómo hago para realizar una consulta sobre un artículo?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            Todas las dudas y/o consultas que tengas sobre cualquier artículo los puedes gestionar a 
                            través de las líneas de cada tienda antes de realizar el pago.El contacto de la tienda lo 
                            vas a ver registrado en el pedido que te llegó al mail o bien, en tu perfil de usuario 
                            entrando a la sección “Mis Pedidos”. Si la tienda no te brinda la informacion que vos 
                            requieres, contáctate con nuestros canales de Atención al Cliente. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
