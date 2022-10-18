export class User {
    private _teacherID: Number

    private _name: String
    private _surname: String
    private _email: String
    private _password: String

    private _learningXP: Number

    constructor(teacherID: Number, name: String, surname: String, email: String, password: String, learningXP: Number) {
        this._teacherID = teacherID
        this._name = name
        this._surname = surname
        this._email = email
        this._password = password
        this._learningXP = learningXP
    }


    get teacherID(): Number {
        return this._teacherID;
    }

    set teacherID(value: Number) {
        this._teacherID = value;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get surname(): String {
        return this._surname;
    }

    set surname(value: String) {
        this._surname = value;
    }

    get email(): String {
        return this._email;
    }

    set email(value: String) {
        this._email = value;
    }

    get password(): String {
        return this._password;
    }

    set password(value: String) {
        this._password = value;
    }

    get learningXP(): Number {
        return this._learningXP;
    }

    set learningXP(value: Number) {
        this._learningXP = value;
    }
}

export interface Credentials {
    email: String,
    password: String
}