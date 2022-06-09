function replaceAll(str: string, de: string, para: string) {
  let rsp = str;
  do {
    str = rsp;
    rsp = str.replace(de, para);
  } while (rsp !== str);
  return rsp;
}

export default replaceAll;
