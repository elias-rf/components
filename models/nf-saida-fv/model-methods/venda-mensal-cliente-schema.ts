import { TFields } from "../../../types";

export function vendaMensalClienteSchema(): () => Promise<TFields> {
  return async () => {
    return [
      {
        name: "anoMes",
        label: "Mês",
        typeField: "string",
      },
      {
        name: "cliente_id",
        label: "Cód. Cliente",
        typeField: "int",
      },
      {
        name: "NmCategoria",
        label: "Produto",
        typeField: "string",
      },
      {
        name: "quantidade",
        label: "Quantidade",
        typeField: "int",
      },
      {
        name: "valor",
        label: "Valor",
        typeField: "float",
      },
    ];
  };
}
