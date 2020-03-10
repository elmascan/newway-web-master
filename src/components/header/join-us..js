import React from "react";
import {NavLink} from "react-router-dom";

const JoinUs = () => {
    return (
        <div className="flex items-end justify-end">
            <NavLink to="/login"
                     className="bg-green-nw text-white font-semibold
                hover:text-green-nw  hover:bg-white py-2 px-10 border border-green-nw  rounded-full">
                Join Us
            </NavLink>
        </div>
    )
};

export default JoinUs;