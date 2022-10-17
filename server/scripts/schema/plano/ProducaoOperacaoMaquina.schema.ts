import { TEntity } from "../../../../types";

export const ProducaoOperacaoMaquina: TEntity = {
  database: "plano",
  table: "ProducaoOperacaoMaquina",
  fields: [
    {
      field: "CdOperacao",
      label: "CdOperacao",
      name: "CdOperacao",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdMaquina",
      label: "CdMaquina",
      name: "CdMaquina",
      type: "string",
      size: 8,
      allowNull: false,
    },
  ],
};
