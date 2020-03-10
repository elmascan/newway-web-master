import React from "react";

export const TaggedAlert = (props) => {
    return <div
        className="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-base">
                <span
                    className="inline-flex bg-red-600 text-white rounded-full h-6 px-3 justify-center items-center">{props.title}</span>
        <span
            className="inline-flex px-2">{props.message}</span>
    </div>
};