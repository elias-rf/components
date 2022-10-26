import { TEntity } from "../../../../types";

export const ProtocoloProduto: TEntity = {
  database: "plano",
  table: "ProtocoloProduto",
  schema: [
    {
      field: "CdProtocolo",
      label: "CdProtocolo",
      name: "CdProtocolo",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "QtdeProduto",
      label: "QtdeProduto",
      name: "QtdeProduto",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "FgEnviaRetornar",
      label: "FgEnviaRetornar",
      name: "FgEnviaRetornar",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
