/**
 * Limpa strings asciiz
 */

function trimExString(txt: string) {
  let rsp = "";
  [rsp] = txt.split("\0");
  return rsp.trim();
}

export default trimExString;
