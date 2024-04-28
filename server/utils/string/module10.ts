export function module10(dado: string): string {
  var i;
  var mult = 2;
  var soma = 0;
  var s = "";

  for (i = dado.length - 1; i >= 0; i--) {
    s = mult * parseInt(dado.charAt(i)) + s;
    if (--mult < 1) {
      mult = 2;
    }
  }
  for (i = 0; i < s.length; i++) {
    soma = soma + parseInt(s.charAt(i));
  }
  soma = soma % 10;
  if (soma != 0) {
    soma = 10 - soma;
  }
  return soma.toString();
}
