import { TTableDef } from "@/types/model";

export const CadPlacasCaminhao: TTableDef = {
  database: "plano",
  table: "CadPlacasCaminhao",
  fields: [
    {
      field: "NumPlaca",
      label: "NumPlaca",
      name: "CadPlacasCaminhao_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmVeiculo",
      label: "NmVeiculo",
      name: "NmVeiculo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmMotorista",
      label: "NmMotorista",
      name: "NmMotorista",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumTara",
      label: "NumTara",
      name: "NumTara",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
