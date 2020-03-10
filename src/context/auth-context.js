import React from 'react'
import {useAsync} from 'react-async'
import initAppData from '../service/init'
import * as authClient from '../service/auth-client'
import {FullPageSpinner} from '../components/widget/full-page-spinner'

const AuthContext = React.createContext()

function AuthProvider(props) {
    const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false)
    const {
        data = {user: null,},
        error,
        isRejected,
        isPending,
        isSettled,
        reload,
    } = useAsync({promiseFn: initAppData,})

    React.useLayoutEffect(() => {
        if (isSettled) {
            setFirstAttemptFinished(true)
        }
    }, [isSettled])

    if (!firstAttemptFinished) {
        if (isPending) {
            return <FullPageSpinner/>
        }

        if (isRejected) {
            return (
                <div className="text-red-500">
                    <p>Uh oh... There's a problem. Try refreshing the app.</p>
                    <pre>{error.message}</pre>
                </div>
            )
        }
    }

    const login = form => authClient.login(form).then(reload);
    const register = form => authClient.register(form).then(reload)
    const logout = () => authClient.logout().then(reload)
    return (
        <AuthContext.Provider value={{data, login, register, logout}} {...props}/>
    )
}

function useAuth() {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
        throw new Error(`useAuth must be used with in a AuthProvider`)
    }
    return context
}

export {AuthProvider, useAuth}