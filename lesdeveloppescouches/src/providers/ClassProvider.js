const {getUser} = require("@/providers/AuthProvider");
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

async function getCourses(token, subjects) {
    const courses = await getAllCourses(token);
    const foundCourses = [];

    for (const course of courses) {
        for (const subject of subjects) {
            if (course.subject === subject) {
                foundCourses.push(course);
            }
        }
    }

    return foundCourses;
}

async function getCoursesBy(token, userID) {
    const courses = await getAllCourses(token);
    const foundCourses = [];

    for (const course of courses) {
        const user = await getUser(userID);

        if (course.teacherID === user.teacherID) {
            foundCourses.push(course);
        }
    }

    return foundCourses;
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

async function addCourse(data, token) {
    await fetch(BASE_URL + "courses", {
        method: "POST",
        headers: {
            "Authorization": "Token " + token,
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "subject":data.subject,
            "date":data.date,
        })
    })
}

// eslint-disable-next-line
async function registerToCourse(data, token) {
    const res = await fetch(BASE_URL + "course/register", {
        method: "POST",
        headers: {
            "Authorization": "Token " + token,
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "_id":data._id,
            "subject":data.subject,
            "teacherID":data.teacherID
        })
    })

    return await res.json();
}

module.exports = {
    getAllClasses,
    registerTeacherToClasses,
    getAllCourses,
    findClassFromId,
    getCourses,
    addCourse,
    registerToCourse,
    getCoursesBy
}