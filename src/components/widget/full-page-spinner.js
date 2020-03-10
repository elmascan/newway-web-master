import React from "react";
import {keyframes} from '@emotion/core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const spin = keyframes({
    '0%': {transform: 'rotate(0deg)'},
    '100%': {transform: 'rotate(360deg)'},
})

export function FullPageSpinner() {
    return (
        <div className="container max-w-sm mx-auto min-h-screen flex flex-col items-center justify-center">
            <FontAwesomeIcon aria-label="loading"
                             icon={faSpinner}/>
        </div>
    )
}