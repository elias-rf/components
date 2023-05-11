import { TTableDef } from "@/types/model";

export const ChamadoFuncoesAfetadas: TTableDef = {
  database: "plano",
  table: "ChamadoFuncoesAfetadas",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
