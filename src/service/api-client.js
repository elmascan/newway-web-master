import {TOKEN_KEY} from '../util/constants'
import axios from "axios";

// global client
function client(endpoint, {body, ...customConfig} = {}) {
    const token = window.localStorage.getItem(TOKEN_KEY)
    const headers = {'content-type': 'application/json'}

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }

    if (body) {
        config.data = JSON.stringify(body)
    }

    // function handleErrors(response) {
    //     if (!response.ok) {
    //         throw Error(response.statusText);
    //     }
    //     return response;
    // }

    console.log(`${process.env.REACT_APP_NEWWAY_API_URL}api/${endpoint}`)
    console.log(`${process.env.REACT_APP_NEWWAY_API_URL}`)

    return axios({
        method: config.method,
        headers: config.headers,
        url: `${process.env.REACT_APP_NEWWAY_API_URL}api/${endpoint}`,
        data: config.data
    }).then(r => r.data)

    // return window.fetch(`${process.env.REACT_APP_NEWWAY_API_URL}/${endpoint}`, config).then(r => r.json()).then(handleErrors)
}

export default client