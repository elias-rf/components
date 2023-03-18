import { TField } from "../../../types";

export function modeloSchema(): () => Promise<TField[]> {
  return async () => {
    return [
      {
        name: "modelo",
        label: "Modelo",
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
