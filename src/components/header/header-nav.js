import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import ButtonFPreference from "../widget/button-f-preference";
import ButtonWIcon from "../widget/button-w-icon";
import {useAuth} from "../../context/auth-context";
import {useUser} from "../../context/user-context";

const HeaderNav = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const {logout} = useAuth();
    const user = useUser()
    return (
        <div>
            <ul className="flex justify-end flex-1 md:flex-none items-center">
                <li>
                    <ButtonWIcon icon={<FontAwesomeIcon icon={faBell}/>}/>
                </li>
                <li>
                    <ButtonWIcon icon={<FontAwesomeIcon icon={faEnvelope}/>}/>
                </li>
                <li className="flex-1 md:flex-none md:mr-3">
                    <div onClick={() => {
                        setIsVisible(current => !current)
                    }}
                         className="flex relative inline-block items-center hover:text-green-nw">
                        <button className="font-bold  focus:outline-none">@{user.username}</button>
                        <FontAwesomeIcon className="ml-1" icon={faEllipsisV}/>
                    </div>
                    <div
                        className={`${isVisible ? "" : "invisible"} absolute bg-gray-100 mt-3 p-3 overflow-auto`}
                        style={{marginLeft: 30}}>
                        <ButtonFPreference text="Profile"/>
                        <ButtonFPreference text="Settings"/>
                        <div className="border border-gray-nw"/>
                        <button onClick={logout}
                                className="p-1 hover:text-green-nw hover:font-bold text-sm no-underline hover:no-underline block focus:outline-none">
                            Log Out
                        </button>
                        {/*<ButtonFPreference onClick={logout}  text="Log Out"/>*/}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default HeaderNav;