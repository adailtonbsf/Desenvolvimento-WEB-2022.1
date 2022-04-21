/*
Questão 3) 
*/

import React from "react";
import Questao1 from "./Questao1";

function Questao3(props) {
    return (
        <Questao1 nome={props.nome} curso={props.curso} origem={props.origem}/>
    )
}

export default Questao3;