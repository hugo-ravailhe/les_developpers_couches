export class User {

    constructor(teacherID, name, surname, email, password, learningXP) {
        this._teacherID = teacherID
        this._name = name
        this._surname = surname
        this._email = email
        this._password = password
        this._learningXP = learningXP
    }


    get teacherID() {
        return this._teacherID;
    }

    set teacherID(value) {
        this._teacherID = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get learningXP() {
        return this._learningXP;
    }

    set learningXP(value) {
        this._learningXP = value;
    }
}

export class Credentials {
    constructor(email, password) {
        this._email = email
        this._password = password
    }

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return this._password
    }

    set password(value) {
        this._password = value
    }
}