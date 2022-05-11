function replaceAll(str, de, para) {
  let rsp = str;
  do {
    str = rsp;
    rsp = str.replace(de, para);
  } while (rsp !== str);
  return rsp;
}

export default replaceAll;
