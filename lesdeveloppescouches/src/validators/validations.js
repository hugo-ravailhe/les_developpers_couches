export function validation(content) {
    return {
        validate: content.length > 0 && content !== "",
        errorMsg: 'field must not be empty'
    }
}

export function passwordValidation(password) {
    const {validate, errorMsg} = validation(password)
    if (!validate) {
        return {
            validate: false,
            errorMsg: errorMsg
        }
    }
    return {
        validate: password.length > 6 && password.match("([0-9])+") !== null,
        errorMsg: 'length must be greater than 6 characters \n must contains at least one number'
    }
}

export function rePasswordValidation(password, rePassword) {
    const {validate, errorMsg} = validation(rePassword)

    if (!validate) {
        return {
            validate: false,
            errorMsg: errorMsg
        }
    }

    return {
        validate: password === rePassword,
        errorMsg: 'password must be the same'
    }
}

export function emailValidation(email) {
    const {validate, errorMsg} = validation(email)

    if(!validate) {
        return {
            validate: false,
            errorMsg: errorMsg
        }
    }
    return {
        validate: email.match("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$") !== null,
        errorMsg: 'this is not an email'
    }
}