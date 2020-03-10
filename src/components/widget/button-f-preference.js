import React from "react";

const ButtonFPreference = (props) => {
    return (
        <button onClick={() => props.logout}
                className="p-1 hover:text-green-nw hover:font-bold text-sm no-underline hover:no-underline block focus:outline-none">
            {props.text}
        </button>
    );
};

export default ButtonFPreference;