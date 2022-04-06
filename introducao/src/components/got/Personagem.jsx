import React, { Component } from "react"

class Personagem extends Component {
    render() {
        const {nome,casa} = this.props
        return(
            <div>
                Personagem {nome} da Casa {casa}.
            </div>
        )
    }
}

export default Personagem