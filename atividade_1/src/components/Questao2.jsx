/*
Questão 2) Crie um componente que exiba na tela o seu nome, curso e cidade de origem, usando classes (React.Component)
*/

import React, { Component } from "react";

class Questao2 extends Component {
    render() {
        const {nome, curso, origem} = this.props;
        return (
            <div>
                <h3>Nome: {nome}</h3>
                <h3>Curso: {curso}</h3>
                <h3>Cidade de Origem: {origem}</h3>
            </div>
        )
    }
}

export default Questao2;