function getTitle(file, title) {
  const start = file.indexOf(`//#region ${title}`)
  const end = file.indexOf(`//#endregion`, start) + 12
  if (start === -1) return `//#region ${title}\n//#endregion`
  return file.substring(start, end)
}

export function getSegments(file) {
  const resp = {
    import: '',
    def: '',
    other: '',
    query: '',
    mutation: '',
    type: '',
    store: '',
    service: '',
    inject: '',
  }
  let title
  for (title in resp) {
    resp[title] = getTitle(file, title)
  }
  return resp
}
