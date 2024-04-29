const key = 'auth'

export const authStorage = {
  getItem: () => {
    return sessionStorage?.getItem(key)
  },
  setItem: (value) => {
    return sessionStorage?.setItem(key, value)
  },
  removeItem: () => {
    return sessionStorage?.removeItem(key)
  },
}
