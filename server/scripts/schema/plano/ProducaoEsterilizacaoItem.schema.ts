import { TTableDef } from "@/types/model";

export const ProducaoEsterilizacaoItem: TTableDef = {
  database: "plano",
  table: "ProducaoEsterilizacaoItem",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumLoteEsterilizacao",
      label: "NumLoteEsterilizacao",
      name: "NumLoteEsterilizacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",

      allowNull: false,
    },
  ],
};
