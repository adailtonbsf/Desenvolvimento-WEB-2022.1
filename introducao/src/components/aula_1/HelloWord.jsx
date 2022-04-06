import React, { Component } from "react"

// FUNÇÃO CLÁSSICA \\
// function HelloWorld() {
//     return (
//         <div>
//             <h1>Hello World React!</h1>
//         </div>
//     )
// }

// FUNÇÃO ARROW \\
// const HelloWorld = () => {
//     return (
//         <div>
//             <h1>Hello World React com Arrow!</h1>
//         </div>
//     )
// }

// FUNÇÃO ARROW SIMPLIFICADA \\
// const HelloWorld = () =>
//     <div>
//         <h1>Hello World React com Arrow simplificada!</h1>
//     </div>

// COMPONENTES COM CLASSES \\
class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Hello World React com Classe!</h1>
            </div>
        )
    }
}

export default HelloWorld