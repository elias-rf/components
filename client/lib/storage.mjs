export const setStringItem = (storage, name, value) => {
  try {
    window.localStorage.setItem(name, value)
  } catch (e) {
    console.info('Failed to save string to localStorage', e)
  }
}

export const getStringItem = (storage, name) => {
  try {
    return window.localStorage.getItem(name) || ''
  } catch (e) {
    // ignore
    return ''
  }
}

export const setJsonItem = (storage, name, value) => {
  try {
    window.localStorage.setItem(name, JSON.stringify(value))
  } catch (e) {
    console.info('Failed to save json to localStorage', e)
  }
}

export const getJsonItem = (storage, name) => {
  try {
    return JSON.parse(window.localStorage.getItem(name) || '')
  } catch (e) {
    // ignore
    return null
  }
}

export const removeItem = (storage, name) => {
  try {
    window.localStorage.removeItem(name)
  } catch (e) {
    // ignore
  }
}
