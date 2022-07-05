import React from 'react';

//Maneira utilizando funções normais
/*
export default function Hello(props){
    return(
        <>
            {props.children}
        </>
    );
}*/

//Maneira utilizando arrow functions

const Hello = ({children}) => (
    <h1>{children}</h1>
);
export default Hello;