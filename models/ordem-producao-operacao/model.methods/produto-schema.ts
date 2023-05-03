import { TFieldDef } from "@/types";

export function produtoSchema(): () => Promise<TFieldDef[]> {
  return async () => {
    return [
      {
        name: "produto",
        label: "Produto",
        primaryKey: true,
        typeField: "string",
      },
      {
        name: "quantidade",
        label: "Quantidade",
        typeField: "int",
      },
    ];
  };
}
