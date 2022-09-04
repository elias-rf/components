export function difference(palavra1: string, palavra2: string): any {
  if (palavra1.length === 0) return palavra2.length;
  if (palavra2.length === 0) return palavra1.length;

  return Math.min(
    difference(palavra1.substr(1), palavra2) + 1,
    difference(palavra2.substr(1), palavra1) + 1,
    difference(palavra1.substr(1), palavra2.substr(1)) +
      (palavra1[0] !== palavra2[0] ? 1 : 0)
  );
}

export function similarity(palavra: string, listaPalavras: string[]) {
  let max = palavra.length / 2;
  const placar = listaPalavras.map((w) => {
    const dif = difference(palavra, w);
    if (dif === 0) max = 0;
    return dif;
  });
  return listaPalavras.filter((item, index) => {
    return placar[index] <= max;
  });
}
