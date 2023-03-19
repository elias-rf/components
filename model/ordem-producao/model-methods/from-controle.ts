// Retorna ordem de producao a partir de um controle
export function fromControleFactory() {
  return ({ controle }: { controle: string }) => {
    return controle.slice(0, 6) + "00";
  };
}
