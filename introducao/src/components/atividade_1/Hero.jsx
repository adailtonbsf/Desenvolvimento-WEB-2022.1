import React from "react";

const Hero = (props) => {
    const {name, arena} = props
    return (
        <div>
            <h1>Herói: {name}, lutando na arena: {arena} </h1>
        </div>
    )
}

export default Hero