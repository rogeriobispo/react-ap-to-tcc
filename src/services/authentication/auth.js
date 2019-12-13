import decoded from 'jwt-decode'

export const TOKEN_KEY = "token"

export const isAuthenticated = () =>  {return !!localStorage.getItem(TOKEN_KEY) }

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const admin = () => {
  console.dir(decodeToken())
  return decodeToken().roles.includes('Admin')
}

export const user = () => {
  return decodeToken()
}

function decodeToken() {
  return decoded(getToken())
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  console.log("logout: authenticated: ",isAuthenticated())
};