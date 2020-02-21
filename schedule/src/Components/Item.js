import React,{Component} from 'react';
import { container, sub, deleteBtn } from "./Item.module.css";

export const Item = (props) => {
    const {deleteHandler} = props;
    const {name, carnet, late} = props.line;

    return(
        <div className={container}>
            <div className={sub}>
            <h4>{name}</h4>
            <span onClick={id => {
                deleteHandler(id);
            }} className={deleteBtn} >X</span>
            </div>
            <div className={sub}>
                <p>{`${carnet} --- ${late ? "Llegó tarde" : "No llegó tarde"}`}</p>
            </div>           

        </div>
    );
}