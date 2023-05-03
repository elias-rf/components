import { TFields } from "@/types";

export function vendaDiarioSchema(): () => Promise<TFields> {
  return async () => {
    return [
      {
        name: "Dia",
        label: "Dia",
        typeField: "string",
      },
      {
        name: "Produto",
        label: "Produto",
        typeField: "string",
      },
      {
        name: "Quantidade",
        label: "Quantidade",
        typeField: "int",
      },
      {
        name: "Valor",
        label: "Valor",
        typeField: "float",
      },
    ];
  };
}
