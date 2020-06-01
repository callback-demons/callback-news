export const validateUsername = (username) => {
  if (username) {
    return !(username.indexOf(' ') !== -1)
  }
  return false
}

export const validateEmail = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/
  return email.match(mailFormat)
}

export const comparePasswords = (password, confirmation) => {
  if (password.length > 0) return password === confirmation
  return false
}

export const cleanText = (text) => {
  const stringFormat = /[^\w\s ]/gi
  return text.replace(stringFormat, '')
}
