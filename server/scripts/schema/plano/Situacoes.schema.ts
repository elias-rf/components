import { TTableDef } from "@mono/types/model";

export const Situacoes: TTableDef = {
  database: "plano",
  table: "Situacoes",
  fields: [
    {
      field: "CdSituacao",
      label: "CdSituacao",
      name: "Situacoes_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSituacao",
      label: "NmSituacao",
      name: "NmSituacao",
      typeField: "string",
      size: 40,
    },
    {
      field: "AlteraSolucao",
      label: "AlteraSolucao",
      name: "AlteraSolucao",
      typeField: "string",
      size: 1,
    },
    {
      field: "ExigeDetalhes",
      label: "ExigeDetalhes",
      name: "ExigeDetalhes",
      typeField: "string",
      size: 1,
    },
    {
      field: "ExigeTecnico",
      label: "ExigeTecnico",
      name: "ExigeTecnico",
      typeField: "string",
      size: 1,
    },
  ],
};
