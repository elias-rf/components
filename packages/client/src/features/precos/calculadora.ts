import round from "../../utils/number/round";

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

export type Calculadora = {};

const calculadora = {
  liteflex(qtd: number) {
    const quantidades = [1, 50, 500, 1000, 2000];
    // const valores = [50, 47.3, 44.5, 41.5, 39.5]; // 2021/12
    // const valores = [50, 47.5, 44.7, 41.8, 39.8]; // 2022/01
    // const valores = [50, 47.8, 45.0, 42.2, 40.2]; // 2022/02
    const valores = [55.0, 53.0, 47.5, 44.5, 42.0]; // 2022/03
    return proporcao(qtd, quantidades, valores);
  },

  hilite(qtd: number) {
    const quantidades = [1, 50, 100, 200];
    const valores = [97, 92.2, 87.5, 83.2]; // 2021/12
    return proporcao(qtd, quantidades, valores);
  },

  enlite(qtd: number) {
    const quantidades = [1, 50, 100, 200, 500, 1000, 2000];
    const valores = [26, 25, 24, 23, 22, 21, 20]; // 2021/12
    return proporcao(qtd, quantidades, valores);
  },

  metil(qtd: number) {
    const quantidades = [1, 50, 100, 200, 500, 1000, 2000];
    // const valores = [32, 30, 29.5, 29, 28, 26, 24]; // 2021/12
    const valores = [32, 30, 29.5, 29, 28, 27, 26]; // 2022/01
    return proporcao(qtd, quantidades, valores);
  },

  liteflexEnlite(qtd: number) {
    const quantidades = [1, 500, 1000, 2000];
    // const valores = [72.2, 63.18, 59.38, 56.53]; // 2021/12
    const valores = [76.95, 68.16, 63.6, 59.04]; // 2022/03
    return proporcao(qtd, quantidades, valores);
  },

  hiliteEnlite(qtd: number) {
    const quantidades = [1, 50, 100, 200];
    // const valores = [116.85, 111.2925, 105.9654, 100.8571]; // 2021/12
    const valores = [116.85, 111.3, 105.97, 100.86]; // 2022/01
    return proporcao(qtd, quantidades, valores);
  },

  liteflexEnliteMetil(qtd: number) {
    const quantidades = [1, 500, 1000, 2000];
    // const valores = [99.9, 87.4, 81.9, 72.2]; // 2021/12
    const valores = [104.53, 90.17, 85.6, 76.09]; // 2022/03
    return proporcao(qtd, quantidades, valores);
  },

  hiliteEnliteMetil(qtd: number) {
    const quantidades = [1, 50, 100, 200];
    const valores = [143.4, 121.4, 116.4, 108.1]; // 2021/12
    return proporcao(qtd, quantidades, valores);
  },
};

export default calculadora;
