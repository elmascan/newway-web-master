import React, {useState} from "react";
import BrandTextWDesc from "../components/widget/brand-text-w-desc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {TaggedAlert} from "../components/widget/tagged-alert";
import {useAuth} from "../context/auth-context";
import useCallbackStatus from "../service/callback-status";


const Register = () => {
    const {register} = useAuth()
    const {isPending, isRejected, error, run} = useCallbackStatus()
    const {register: reg, handleSubmit, errors} = useForm();
    const [isAgree, setIsAgree] = useState(null)

    const onSubmit = data => {
        if (isAgree !== true) {
            setIsAgree(false)
            return;
        }
        run(register(data))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container max-w-sm mx-auto min-h-screen flex flex-col">
                    <div className="flex flex-col flex-1 items-center justify-center px-6 py-8 ">
                        {isRejected ?
                            <TaggedAlert title="error" message='something went wrong'/> : null}
                        <BrandTextWDesc/>
                        <input type="text"
                               name="username"
                               placeholder="username"
                               ref={reg({required: true, min: 1})}
                               className="mt-5 block border border-gray-500 w-full p-3 text-xl rounded rounded-full mb-2 focus:outline-none"/>
                        {errors.username && "give me a name"}
                        <input type="text"
                               name="email"
                               placeholder="email"
                               ref={reg({required: true, min: 1})}
                               className="block border border-gray-500 w-full p-3 text-xl rounded rounded-full mb-2 focus:outline-none"/>
                        {errors.email && "give me a email"}
                        <input type="password"
                               name="password"
                               placeholder="password"
                               ref={reg({required: true})}
                               className="block border border-gray-500 w-full p-3 text-xl rounded rounded-full mb-2 focus:outline-none"/>
                        {errors.password && "give me a pass"}
                        <div onClick={() => setIsAgree(!isAgree)}
                             className="cursor-pointer justify-start items-stretch mb-2 focus:outline-none mt-2">
                            <FontAwesomeIcon className={`${isAgree ? "text-green-900" : "text-gray-500"}`}
                                             icon={faCheckCircle}/> i agree to the <span
                            className="text-green-nw">terms</span> and <span
                            className="text-green-nw">privacy policy</span>.
                        </div>
                        {isAgree != null && !isAgree ? 'so you are not agree with me?' : null}
                        <button className="mt-2 bg-green-nw text-white font-semibold w-full text-3xl
                hover:text-green-nw  hover:bg-white py-1 px-4 border border-green-nw rounded-full focus:outline-none"
                                disabled={isPending}>Sign Up
                        </button>
                        <NavLink to="/login"
                                 className="mt-6 text-green-800 font-bold underline focus:outline-none hover:text-green-nw">already
                            have an account
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;