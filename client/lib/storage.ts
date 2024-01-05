type TStorage = 'local' | 'session'

export const setStringItem = (
  storage: TStorage,
  name: string,
  value: string
) => {
  try {
    window.localStorage.setItem(name, value)
  } catch (e) {
    console.info('Failed to save string to localStorage', e)
  }
}

export const getStringItem = (storage: TStorage, name: string) => {
  try {
    return window.localStorage.getItem(name) || ''
  } catch (e) {
    // ignore
    return ''
  }
}

export const setJsonItem = (
  storage: TStorage,
  name: string,
  value: unknown
) => {
  try {
    window.localStorage.setItem(name, JSON.stringify(value))
  } catch (e) {
    console.info('Failed to save json to localStorage', e)
  }
}

export const getJsonItem = (
  storage: TStorage,
  name: string
): unknown | null => {
  try {
    return JSON.parse(window.localStorage.getItem(name) || '')
  } catch (e) {
    // ignore
    return null
  }
}

export const removeItem = (storage: TStorage, name: string) => {
  try {
    window.localStorage.removeItem(name)
  } catch (e) {
    // ignore
  }
}
