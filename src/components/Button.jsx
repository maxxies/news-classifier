import React from "react";

function Button(props) {
    return (
        <>
            {" "}
            <button
                onClick={() => {
                    props.functionCall(props.item);
                    console.log("clicked");
                }}
            >
                {props.name}
            </button>
        </>
    );
}

export default Button;
