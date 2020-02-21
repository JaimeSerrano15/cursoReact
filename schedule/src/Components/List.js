import React,{Component} from 'react';
import {Item} from './Item';

export const List = ({list, deleteHandler}) => {
    return(
        <div>
            {list.map((line) => {
                return (
                    <Item key={line.carnet} line={line} deleteHandler={() => {
                        deleteHandler(line.carnet);
                    }} />
                );
            })}
        </div>
    );
}