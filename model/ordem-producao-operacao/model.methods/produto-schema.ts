import { TFieldClient } from "../../../types";

export function produtoSchema(): () => Promise<TFieldClient[]> {
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
