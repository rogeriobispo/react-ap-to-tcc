import decoded from 'jwt-decode'

export const TOKEN_KEY = "token"

export const isAuthenticated = () =>  {return !!localStorage.getItem(TOKEN_KEY) }

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const admin = () => {
  return decoded(getToken()).roles.includes('Admin')
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
};