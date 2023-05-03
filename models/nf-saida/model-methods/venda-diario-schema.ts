import { TFieldDef } from "@/types";

export function vendaDiarioSchema(): () => Promise<TFieldDef[]> {
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
