import React from "react";

const Enemy = (props) => {
    const {name, arena} = props
    return (
        <div>
            <h1>Inimigo: {name}, lutando na arena: {arena}</h1>
        </div>
    )
}

export default Enemy