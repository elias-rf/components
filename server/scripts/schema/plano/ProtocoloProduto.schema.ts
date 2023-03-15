import { TTable } from "../../../../types/model";

export const ProtocoloProduto: TTable = {
  database: "plano",
  table: "ProtocoloProduto",
  fields: [
    {
      field: "CdProtocolo",
      label: "CdProtocolo",
      name: "CdProtocolo",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "QtdeProduto",
      label: "QtdeProduto",
      name: "QtdeProduto",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "FgEnviaRetornar",
      label: "FgEnviaRetornar",
      name: "FgEnviaRetornar",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
