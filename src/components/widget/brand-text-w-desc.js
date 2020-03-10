import React from "react";
import {NavLink} from "react-router-dom";

const BrandTextWDesc = () => {
    return (
        <div className="flex flex-col items-center">
            <NavLink to="/" className={`text-6xl font-bold text-gray-nw hover:text-green-nw`}> newway </NavLink>
            <span className="text-3xl -mt-6 font-bold">create-new-people</span>
        </div>
    );
};

export default BrandTextWDesc;


