import React from 'react';
import { useForm } from "react-hook-form";
import "./Contacto.css";

function Contacto(){
  const { register, formState:{ errors }, handleSubmit } = useForm("");
  const onSubmit = (data) =>{  
    console.log(data);
} 

    return(
        <div className='d-flex justify-content-center  text-light bgcolor'>
        
        <form className='p-5 w-75' onSubmit={handleSubmit(onSubmit)} >
        <h2> Contacto </h2>
            <div id='contenedor-input'>
            <div className='d-flex flex-column input-at'>
                <label> Ingresa tu nombre </label>
                <input type="text" placeholder='Nombre'{...register('nombre', {
                    required:true
                })}/>

                {errors.nombre?.type === 'required' && <p className='error'> El campo es obligatorio </p>}

            </div>
            <div className='d-flex flex-column input-at'>
                <label > Ingresa tu email </label>
                <input type="text" placeholder='Email' {...register('email', {
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                    required:true
                })}/>

                {errors.email?.type === 'required' && <p className='error'> El campo es obligatorio </p>}

                {errors.email?.type === 'pattern' && <p className='error'> El formato es incorrecto. Utilice ejemplo@ejemplo.com </p>}
            </div>
            </div>
            <div className='mt-3'>
                <label className='m-3'> Seleccione una categoria </label>
                <select {...register('categoria')}>
                    <option value="var"> - Varios - </option>
                    <option value="acc"> Accion </option>
                    <option value="dep"> Deportes </option>
                    <option value="rpg"> Rpg </option>
                    <option value="sho"> Shooter </option>
                    <option value="ter"> Terror </option>
                </select>
            </div>
            <div className='mt-3 d-flex flex-column textat'>
                <label> Dejanos tu consulta </label>
                <textarea cols="80" rows="10" placeholder="Mensaje" name="mensaje"></textarea>
                {/* <input type="text" placeholder='Mensaje'/> */}
            </div>
            <input className='btn btn-primary mt-3' type="submit" value="Enviar" />
        </form>
        </div>
    );
}

export default Contacto;
