import * as React from "react";

function useIsMounted() {
    const mounted = React.useRef(false)
    React.useLayoutEffect(() => {
        mounted.current = true
        return () => (mounted.current = false)
    }, [])

    return mounted
}

function useCallbackStatus() {
    const isMounted = useIsMounted()

    const [{status, error}, setState] = React.useReducer(
        (s, a) => ({...s, ...a}),
        {status: 'rest', error: null})

    const safeSetState = (...args) => isMounted ? setState(...args) : null

    const isPending = status === 'pending'
    const isRejected = status === 'rejected'

    function run(promise) {
        if (!promise || !promise.then) {
            throw new Error(`The argument passed to useCallbackStatus().run must be a promise.`)
        }

        safeSetState({status: 'pending'})
        return promise.then(
            value => {
                safeSetState({status: 'rest'})
                return value
            }).catch(error => {
            safeSetState({status: 'rejected', error})
            return Promise.reject(error)
        })
    }

    console.log(isPending, isRejected, error, status);

    return {isPending, isRejected, error, status, run}
}

export default useCallbackStatus
