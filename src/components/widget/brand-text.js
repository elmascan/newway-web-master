import React from "react";

const BrandText = (props) => {
    return (
        <span className={`text-${props.size}xl font-bold text-gray-nw hover:text-green-nw`}> newway </span>
    );
};

export default BrandText;