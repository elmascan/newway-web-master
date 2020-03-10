import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAtom, faCode, faQuestionCircle, faRadiationAlt, faRoad} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

    let divCss = "flex font-bold p-1 pr-6 text-lg rounded hover:bg-green-nw hover:text-white items-center mb-1";
    let activeDivCss = "bg-green-nw text-white rounded";

    return (
        <div>
            <ul className="flex">
                <div className="overflow-auto">
                    <li>
                        <NavLink exact to="/home" className={divCss} activeClassName={activeDivCss}>
                            <FontAwesomeIcon icon={faQuestionCircle}/>
                            <span className="ml-2 focus:outline-none">questions</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/project" className={divCss} activeClassName={activeDivCss}>
                            <FontAwesomeIcon icon={faAtom}/>
                            <span className="ml-2 focus:outline-none">projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/developer" className={divCss} activeClassName={activeDivCss}>
                            <FontAwesomeIcon icon={faCode}/>
                            <span className="ml-2 focus:outline-none">developers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/road-map" className={divCss} activeClassName={activeDivCss}>
                            <FontAwesomeIcon icon={faRoad}/>
                            <span className="ml-2 focus:outline-none">road-maps</span>
                        </NavLink>
                    </li>
                </div>
            </ul>
            <div className="mt-12 text-center items-center justify-center">
                <ul className="w-full flex text-sm">
                    <li>
                        <button className="hover:text-green-nw font-bold">about</button>
                    </li>
                    <li>
                        <button className="ml-3 hover:text-green-nw font-bold">help</button>
                    </li>
                    <li>
                        <button className="ml-3 hover:text-green-nw font-bold">contact</button>
                    </li>
                    <li>
                        <button className="ml-3 hover:text-green-nw font-bold">terms</button>
                    </li>
                    <li>
                        <button className="ml-3 mr-3 hover:text-green-nw font-bold">privacy</button>
                    </li>
                </ul>
            </div>
            <div className="mt-1 w-48 text-center">
                <p className="text-xs">© 2020 newway. any rights reserved. made with <FontAwesomeIcon
                    className="text-green-nw"
                    icon={faRadiationAlt}/></p>
            </div>
        </div>
    );
}

export default Nav;