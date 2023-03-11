import { TFieldClient } from "../../../types";

export function vendaMensalClienteSchema(): () => Promise<TFieldClient[]> {
  return async () => {
    return [
      {
        name: "anoMes",
        label: "Mês",
        type: "string",
        primaryKey: true,
      },
      {
        name: "CdCliente",
        label: "Cód. Cliente",
        type: "int",
      },
      {
        name: "NmCategoria",
        label: "Produto",
        type: "string",
      },
      {
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
      {
        name: "valor",
        label: "Valor",
        type: "float",
      },
    ];
  };
}
