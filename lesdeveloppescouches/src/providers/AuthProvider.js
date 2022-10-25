const BASE_URL = 'http://127.0.0.1:3000/api/'

export async function signUp(user) {
    return await fetch(BASE_URL + 'auth/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'email': user.email,
            'name': user.name,
            'surname': user.surname,
            'password': user.password,
            'learningXP': 0
        })
    })
}

export async function logIn(credentials) {
    return await fetch(BASE_URL + 'auth/login', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            'email': credentials._email,
            'password': credentials._password
        })
    })
}

export async function getUsers() {
    const res = await fetch(BASE_URL + "users");
    return await res.json();
}

export async function getUser(id) {
    const res = await fetch(BASE_URL + "users/" + id);
    return await res.json();
}

export async function getUserFromTeacher(teacherID) {
    const users = await getUsers();
    let userTeacher = null;
    users.forEach(user => {
        if (user.teacherID !== undefined) {
            if (user.teacherID === teacherID) {
                userTeacher = user;
            }
        }
    });

    return userTeacher;
}