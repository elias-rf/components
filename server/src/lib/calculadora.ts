import { round } from "./round";

// Calculadora de preços do comercial

function proporcao(qtd: number, quantidades: number[], valores: number[]) {
  if (qtd < quantidades[0]) {
    return 0;
  }
  for (let ct = 0; ct < valores.length; ct++) {
    const delta =
      (valores[ct] - valores[ct + 1]) / (quantidades[ct + 1] - quantidades[ct]);
    if (qtd < quantidades[ct + 1]) {
      return round(valores[ct] - (qtd - quantidades[ct]) * delta, 2);
    }
  }
  return valores[valores.length - 1];
}

export function liteflex(qtd: number) {
  const quantidades = [1, 50, 500, 1000, 2000];
  const valores = [50, 47.3, 44.5, 41.5, 39.5];
  return proporcao(qtd, quantidades, valores);
}

export function hilite(qtd: number) {
  const quantidades = [1, 50, 100, 200];
  const valores = [97, 92.2, 87.5, 83.2];
  return proporcao(qtd, quantidades, valores);
}

export function enlite(qtd: number) {
  const quantidades = [1, 50, 100, 200, 500, 1000, 2000];
  const valores = [26, 25, 24, 23, 22, 21, 20];
  return proporcao(qtd, quantidades, valores);
}

export function metil(qtd: number) {
  const quantidades = [1, 50, 100, 200, 500, 1000, 2000];
  const valores = [32, 30, 29.5, 29, 28, 26, 24];
  return proporcao(qtd, quantidades, valores);
}

export function liteflexEnlite(qtd: number) {
  const quantidades = [1, 500, 1000, 2000];
  const valores = [72.2, 63.18, 59.38, 56.53];
  return proporcao(qtd, quantidades, valores);
}

export function hiliteEnlite(qtd: number) {
  const quantidades = [1, 50, 100, 200];
  const valores = [116.85, 111.2925, 105.9654, 100.8571];
  return proporcao(qtd, quantidades, valores);
}

export function liteflexEnliteMetil(qtd: number) {
  const quantidades = [1, 500, 1000, 2000];
  const valores = [99.9, 87.4, 81.9, 72.2];
  return proporcao(qtd, quantidades, valores);
}

export function hiliteEnliteMetil(qtd: number) {
  const quantidades = [1, 50, 100, 200];
  const valores = [143.4, 121.4, 116.4, 108.1];
  return proporcao(qtd, quantidades, valores);
}
