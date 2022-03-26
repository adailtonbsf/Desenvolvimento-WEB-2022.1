/*
Questão 4) Crie um componente que exiba na tela o seu nome, curso e cidade de origem, usando classes (React.Component)
*/

import React, { Component } from "react";
import Questao2 from "./Questao2";

class Questao4 extends Component {
    render() {
        const {nome, curso, origem} = this.props;
        return (
            <Questao2 nome={nome} curso={curso} origem={origem}/>
        )
    }
}

export default Questao4;