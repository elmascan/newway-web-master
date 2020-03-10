import React from "react";
import HeaderNav from "./header-nav";
import JoinUs from "./join-us.";
import BrandText from "../widget/brand-text";
import SearchBox from "../widget/search-box";
import {Link} from "react-router-dom";
import {useUser} from "../../context/user-context";

const Header = () => {
    const user = useUser()
    return (
        <header className="flex flex-wrap justify-between items-center w-full">
            <div className="w-3/12">
                <Link to="/home">
                    <BrandText size={5}/>
                </Link>
            </div>
            <div className="w-6/12">
                <SearchBox/>
            </div>
            <div className="w-3/12">
                {user ? <HeaderNav/> : <JoinUs/>}
            </div>
        </header>
    );
};

export default Header;