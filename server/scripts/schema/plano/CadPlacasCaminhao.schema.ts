import { TEntity } from "../../../../types";

export const CadPlacasCaminhao: TEntity = {
  database: "plano",
  table: "CadPlacasCaminhao",
  schema: [
    {
      field: "NumPlaca",
      label: "NumPlaca",
      name: "CadPlacasCaminhao_id",
      type: "string",
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmVeiculo",
      label: "NmVeiculo",
      name: "NmVeiculo",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "NmMotorista",
      label: "NmMotorista",
      name: "NmMotorista",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "NumTara",
      label: "NumTara",
      name: "NumTara",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      type: "string",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
