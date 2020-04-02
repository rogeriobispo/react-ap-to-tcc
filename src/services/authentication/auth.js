import decoded from 'jwt-decode'

export const TOKEN_KEY = "token"

export const isAuthenticated = () => !!localStorage.getItem(TOKEN_KEY)

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = token => localStorage.setItem(TOKEN_KEY, token)

function decodeToken() {
  return decoded(getToken())
}

export const user = () => decodeToken().user

export const admin = () => decodeToken().user.roles.includes('Admin')

export const atendent = () => decodeToken().user.roles.includes('Recepcionist')

export const medic = () => decodeToken().user.doctor

export const logout = () => localStorage.removeItem(TOKEN_KEY)
