import { TTableDef } from "@/types/model";

export const ProducaoEsterilizacaoMestre: TTableDef = {
  database: "plano",
  table: "ProducaoEsterilizacaoMestre",
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
      field: "TipoEsterilizacao",
      label: "TipoEsterilizacao",
      name: "TipoEsterilizacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtEnvio",
      label: "DtEnvio",
      name: "DtEnvio",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtRetorno",
      label: "DtRetorno",
      name: "DtRetorno",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Caixas",
      label: "Caixas",
      name: "Caixas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Resultado",
      label: "Resultado",
      name: "Resultado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
