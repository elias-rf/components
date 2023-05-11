import { TTableDef } from "@/types/model";

export const ProducaoEsterilizacaoMestreObs: TTableDef = {
  database: "plano",
  table: "ProducaoEsterilizacaoMestreObs",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoEsterilizacao",
      label: "TipoEsterilizacao",
      name: "TipoEsterilizacao",
      typeField: "string",

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
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
