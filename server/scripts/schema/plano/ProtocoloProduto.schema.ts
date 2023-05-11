import { TTableDef } from "@/types/model";

export const ProtocoloProduto: TTableDef = {
  database: "plano",
  table: "ProtocoloProduto",
  fields: [
    {
      field: "CdProtocolo",
      label: "CdProtocolo",
      name: "CdProtocolo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeProduto",
      label: "QtdeProduto",
      name: "QtdeProduto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgEnviaRetornar",
      label: "FgEnviaRetornar",
      name: "FgEnviaRetornar",
      typeField: "string",

      allowNull: false,
    },
  ],
};
