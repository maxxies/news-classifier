import React from "react";

function Button(props) {
    return (
        <>
            {" "}
            <button
                onClick={() => {
                    props.functionCall(props.item);
                }}
            >
                {props.name}
            </button>
        </>
    );
}

export default Button;
