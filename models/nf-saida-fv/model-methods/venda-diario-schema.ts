import { TSchema } from "@/types";

export function vendaDiarioSchema(): () => Promise<TSchema> {
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
