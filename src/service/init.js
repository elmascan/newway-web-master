import {getUser} from './auth-client'

async function initAppData() {
    const user = await getUser()
    if (!user) {
        return {user: null}
    }
    return {user}
}

export default initAppData