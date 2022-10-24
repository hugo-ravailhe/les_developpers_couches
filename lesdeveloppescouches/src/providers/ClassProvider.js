const BASE_URL = 'http://127.0.0.1:3000/api/'

async function getAllClasses(token) {
    const res = await fetch(BASE_URL + "classes", {
       headers: {
           "Authorization": "Token " + token
       },
        method: "GET"
    });

    return await res.json();
}
// eslint-disable-next-line
async function findClassFromId(token, subject) {
    const classes = await getAllClasses(token);
    for (const clazz of classes) {
        if (clazz.name === subject) {
            return clazz;
        }
    }

    return null;
}

async function getAllCourses(token) {
    const res = await fetch(BASE_URL + "courses", {
       headers: {
           "Authorization": "Token " + token
       },
        method: "GET",
    });

    return await res.json();
}

async function registerTeacherToClasses(data) {
    const res = await fetch(BASE_URL + "teacher/register", {
        method: "POST",
        headers: {
          "Authorization": "Token " + data.token,
        },
        body: JSON.stringify({
          "subjects": data.classes,
        })
    });

    return await res.json();
}

module.exports = {
    getAllClasses,
    registerTeacherToClasses,
    getAllCourses,
    findClassFromId
}