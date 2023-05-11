import { TSchema } from "@/types";

export function produtoSchema(): () => Promise<TSchema> {
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
