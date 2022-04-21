import React from "react";

const Arena = (props) => {
    return (
        <div>
            {
                React.Children.map(
                    props.children,
                    (player) => {
                        return React.cloneElement(player, { arena: props.arena })
                    }
                )
            }
        </div>
    )
}

export default Arena