import client from "./api-client";
import {TOKEN_KEY} from "../util/constants";

function getUser() {
    const token = getToken()
    if (!token) {
        return Promise.resolve(null)
    }
    return client('auth/me').catch(error => {
        logout()
        return Promise.reject(error)
    })
}

function handleUserResponse({token}) {
    if (!token) return
    window.localStorage.setItem(TOKEN_KEY, token)
    return token
}

function login(user) {
    return client("auth/login", {body: user}).then(handleUserResponse)
}

function register(user) {
    let u = {}
    u.login = user.username
    u.password = user.password
    return client('auth/register', {body: user}).then(r => login(u))
}

function logout() {
    window.localStorage.removeItem(TOKEN_KEY)
    return Promise.resolve()
}

function getToken() {
    return window.localStorage.getItem(TOKEN_KEY)
}

export {login, register, logout, getUser, getToken}