import {Credentials, User} from "./models/User"

const BASE_URL: String = '127.0.0.1:3000/api/'

export async function signUp(user: User) {

    const res = await fetch(BASE_URL + 'register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'email': user.email,
            'name': user.name,
            'surname': user.surname,
            'password': user.password,
            'learningXP': user.password
        })
    })

    return await res.json()
}

export async function logIn(credentials: Credentials) {

    const res = await fetch(BASE_URL + 'login', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            'email': credentials.email,
            'password': credentials.password
        })
    })

    return await res.json()
}