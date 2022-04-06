import React, { Component } from "react";
import Personagem from "./Personagem";

// class Casa extends Component {
//     render() {
//         return(
//             <div>
//                 <Personagem nome="Arya" casa="Stark"/>
//                 <Personagem nome="Robert" casa="Stark"/>
//                 <Personagem nome="Sansa" casa="Stark"/>
//             </div>
//         )
//     }
// }

class Casa extends Component {
    render() {
        return(
            <div>
                <h1>Casa {this.props.titulo}</h1>
                ===============================
                {
                    React.Children.map(
                        this.props.children,
                        (personagem) => {
                            return React.cloneElement(personagem, {casa: this.props.titulo})
                        }
                    )
                }
            </div>
        )
    }
}

export default Casa