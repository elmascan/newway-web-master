import React from "react";

const ButtonWIcon = (props) => {
    return (
        <button className="text-2xl hover:text-green-nw mr-3 focus:outline-none">{props.icon}</button>
    );
};

export default ButtonWIcon