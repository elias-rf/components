import { TField } from "../../../types";

export function produtoSchema(): () => Promise<TField[]> {
  return async () => {
    return [
      {
        name: "produto",
        label: "Produto",
        primaryKey: true,
        type: "string",
      },
      {
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
    ];
  };
}
