import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
    return (
        <span className="flex relative w-full">
            <input type="search" placeholder="search"
                   className="w-full text-lg text-gray-nw transition border border-gray-600 focus:outline-none
                   focus:border-green-nw rounded py-2 px-2 pl-10 appearance-none leading-normal"/>
            <div className="absolute" style={{top: ".65rem", left: ".8rem"}}>
                <FontAwesomeIcon className="text-2xl text-gray-500" icon={faSearch}/>
            </div>
        </span>
    );
};

export default SearchBox;