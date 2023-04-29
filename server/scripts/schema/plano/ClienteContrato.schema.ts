import { TTableDef } from "@mono/types/model";

export const ClienteContrato: TTableDef = {
  database: "plano",
  table: "ClienteContrato",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "ClienteContrato_id",
      typeField: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtEnvioTermo",
      label: "DtEnvioTermo",
      name: "DtEnvioTermo",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtRecebimentoTermo",
      label: "DtRecebimentoTermo",
      name: "DtRecebimentoTermo",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtEnvioContrato",
      label: "DtEnvioContrato",
      name: "DtEnvioContrato",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtRecebimentoContrato",
      label: "DtRecebimentoContrato",
      name: "DtRecebimentoContrato",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
