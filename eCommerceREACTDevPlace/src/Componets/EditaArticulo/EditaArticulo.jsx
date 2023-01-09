import React from 'react';
import style from './EditaArticulo.module.css'

export default function EditaArticulo({dataArticulos, handleUpdate , handleDeleti,setdataName,setdataPrice, setdataGender,
                                        setdataCargory}) {

 

    return (
    <div className={style.conteiner}>
        {dataArticulos?.map(dato => (
            <div className={style.card} key={dato.id}>
                <button className={style.btnBorrar} onClick={() => handleDeleti(dato.id)}>X</button>
                <img src={dato.image} alt=""  />

                <div className={style.name}>
                    <p>{dato.name}</p> 
                    <input type="text" name="name"  onChange={(e) =>setdataName(e, dato.name)}/>
                </div>

                <div className={style.price}>
                    <p>{dato.price}</p>
                    <input type="number" name="price" onChange={(e) =>setdataPrice(e)} />
                </div>

                <p className={style.gender}>{dato.gender}</p>
                <div className={style.genero}>
                        <input type="radio" id="gender" name="gender" value="Femele"  onChange={(e) =>setdataGender(e)} />
                        <label htmlFor="html">Mujer</label>
                        <input type="radio" id="gender" name="gender" value="Male"  onChange={(e) =>setdataGender(e)} />
                        <label htmlFor="css">Hombre</label>
                </div>

                
                <p>{dato.category === 1 ?  "buzo" : dato.category === 2 ? "Jeans" :  "Remera"}</p>
                <select id="cargory" name="cargory"  onChange={(e) => setdataCargory (e)}>
                            <option value="" >Categorias</option>
                            <option value="1" >Buzo</option>
                            <option value="3" >Remera</option>
                            <option value="2" >Jeans</option>  
                </select>    

                <button className={style.btnEditar} onClick={() => handleUpdate(dato.id)}>Editar</button>
            </div>

        ))}
        
    </div>
    )
}
