import React from 'react';
import { useForm } from "react-hook-form";
import "./Contacto.css";

function Contacto(){
  const { register, formState:{ errors }, handleSubmit } = useForm("");
  const onSubmit = (data) =>{  
    console.log(data);
} 

    return(
        <>
        <h2> Escribenos tu consulta </h2>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label> Nombre: </label>
                <input type="text" {...register('nombre', {
                    required:true
                })}/>

                {errors.nombre?.type === 'required' && <p className='error'> El campo es obligatorio </p>}

            </div>
            <div>
                <label> Email: </label>
                <input type="text" {...register('email', {
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                    required:true
                })}/>

                {errors.email?.type === 'required' && <p className='error'> El campo es obligatorio </p>}

                {errors.email?.type === 'pattern' && <p className='error'> El formato es incorrecto. Utilice ejemplo@ejemplo.com </p>}
            </div>
            <div>
                <label> Seleccione categoria </label>
                <select {...register('categoria')}>
                    <option value="var"> - Varios - </option>
                    <option value="acc"> Accion </option>
                    <option value="dep"> Deportes </option>
                    <option value="rpg"> Rpg </option>
                    <option value="sho"> Shooter </option>
                    <option value="ter"> Terror </option>
                </select>
            </div>
            <div>
                <label> Dejanos tu consulta </label>
                <input type="text" />
            </div>
            <input type="submit" value="Enviar" />
        </form>
        </>
    );
}

export default Contacto;
