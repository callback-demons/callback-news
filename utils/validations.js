export const validateEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/
    return email.match(mailformat)
}

export const comparePasswords = (password, confirmation) => {
    if (password.length>0) return password === confirmation
    return false
}
