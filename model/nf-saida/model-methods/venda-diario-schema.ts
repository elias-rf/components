import { TField } from "../../../types";

export function vendaDiarioSchema(): () => Promise<TField[]> {
  return async () => {
    return [
      {
        name: "DtEmissao",
        label: "Dia",
        type: "string",
        primaryKey: true,
      },
      {
        name: "NmCategoria",
        label: "Produto",
        type: "string",
      },
      {
        name: "qtd",
        label: "Quantidade",
        type: "int",
      },
      {
        name: "vlr",
        label: "Valor",
        type: "float",
      },
    ];
  };
}