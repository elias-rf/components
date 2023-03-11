function getTitle(file: string, title: string) {
  const start = file.indexOf(`//#region ${title}`);
  const end = file.indexOf(`//#endregion`, start) + 12;
  if (start === -1) return `//#region ${title}\n//#endregion`;
  return file.substring(start, end);
}

export function getSegments(file: string) {
  const resp = {
    import: "",
    def: "",
    other: "",
    query: "",
    mutation: "",
    type: "",
    store: "",
    service: "",
    inject: "",
  };
  let title: keyof typeof resp;
  for (title in resp) {
    resp[title] = getTitle(file, title);
  }
  return resp;
}
