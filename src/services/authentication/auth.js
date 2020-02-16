import decoded from 'jwt-decode'

export const TOKEN_KEY = "token"

export const isAuthenticated = () => { return !!localStorage.getItem(TOKEN_KEY) }

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const admin = () => decodeToken().user.roles.includes('Admin')


export const user = () => decodeToken()


function decodeToken() {
  return decoded(getToken())
}
export const logout = () => localStorage.removeItem(TOKEN_KEY)
