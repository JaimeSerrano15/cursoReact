import React,{Component} from 'react';
import { container, btn } from "./Form.module.css";

export const Form = (props) => {
    const {name, carnet, late, submitHandler, changeHandler} = props;

    return(
        <form className={container} onSubmit={submitHandler}>
            <input onChange={changeHandler} id="name" value={name} placeholder="Escriba el nombre" ></input>
            <input onChange={changeHandler} id="carnet" value={carnet} placeholder="Escriba el carnet" ></input>
            <label> ¿Llegó tarde? <br></br>
            <input onChange={changeHandler} id="late" type="checkbox" ></input>
            </label>

            <button type="submit" >Guardar</button>
        </form>
    );
}