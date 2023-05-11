import { TTableDef } from "@/types/model";

export const Situacoes: TTableDef = {
  database: "plano",
  table: "Situacoes",
  fields: [
    {
      field: "CdSituacao",
      label: "CdSituacao",
      name: "Situacoes_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSituacao",
      label: "NmSituacao",
      name: "NmSituacao",
      typeField: "string",
    },
    {
      field: "AlteraSolucao",
      label: "AlteraSolucao",
      name: "AlteraSolucao",
      typeField: "string",
    },
    {
      field: "ExigeDetalhes",
      label: "ExigeDetalhes",
      name: "ExigeDetalhes",
      typeField: "string",
    },
    {
      field: "ExigeTecnico",
      label: "ExigeTecnico",
      name: "ExigeTecnico",
      typeField: "string",
    },
  ],
};
