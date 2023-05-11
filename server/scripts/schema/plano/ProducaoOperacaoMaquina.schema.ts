import { TTableDef } from "@/types/model";

export const ProducaoOperacaoMaquina: TTableDef = {
  database: "plano",
  table: "ProducaoOperacaoMaquina",
  fields: [
    {
      field: "CdOperacao",
      label: "CdOperacao",
      name: "CdOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdMaquina",
      label: "CdMaquina",
      name: "CdMaquina",
      typeField: "string",

      allowNull: false,
    },
  ],
};
