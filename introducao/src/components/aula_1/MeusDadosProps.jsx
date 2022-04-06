import React, { Component } from "react";

// const MeusDadosProps = (props) => {
//     return (
//         <div>
//             <h3>Nome: {props.nome}</h3>
//             <h3>Curso: {props.curso}</h3>
//             <h3>Universidade: {props.universidade}</h3>
//         </div>
//     )
// }

class MeusDadosProps extends Component {
    render() {
        const {nome, curso, universidade} = this.props;
        return (
            <div>
                <h3> Nome: {nome} </h3>
                <h3> Curso: {curso} </h3>
                <h3> Universidade: {universidade} </h3>
            </div>
        )
    }
}

export default MeusDadosProps;