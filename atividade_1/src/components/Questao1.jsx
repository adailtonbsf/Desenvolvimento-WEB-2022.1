/*
Questão 1) Crie um componente que exiba na tela o seu nome, curso e cidade de origem, usando apenas funções
*/

import React from "react";

function Questao1(props) {
    return (
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Curso: {props.curso}</h3>
            <h3>Cidade de Origem: {props.origem}</h3>
        </div>
    )
}

export default Questao1
