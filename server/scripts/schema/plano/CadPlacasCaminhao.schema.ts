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
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmVeiculo",
      label: "NmVeiculo",
      name: "NmVeiculo",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "NmMotorista",
      label: "NmMotorista",
      name: "NmMotorista",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "NumTara",
      label: "NumTara",
      name: "NumTara",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
