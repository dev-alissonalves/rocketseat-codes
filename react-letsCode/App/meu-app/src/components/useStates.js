import React, {useState} from "react";

export default function AppHooks(){

    const [nome, setNome] = useState('');
    return(
        <>
            Nome: <input type="text" value={nome} onChange={(event) => {setNome(event.target.value)}}></input>

            <br />
            Olá, {nome}
        </>
    );
}