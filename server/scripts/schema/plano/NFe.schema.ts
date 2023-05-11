import { TTableDef } from "@/types/model";

export const NFe: TTableDef = {
  database: "plano",
  table: "NFe",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtSolicitacao",
      label: "DtSolicitacao",
      name: "DtSolicitacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtAutorizacao",
      label: "DtAutorizacao",
      name: "DtAutorizacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Situacao",
      label: "Situacao",
      name: "Situacao",
      typeField: "string",
    },
    {
      field: "fgDanfe",
      label: "fgDanfe",
      name: "fgDanfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AutorExpedida",
      label: "AutorExpedida",
      name: "AutorExpedida",
      typeField: "string",
    },
    {
      field: "ChaveNFe",
      label: "ChaveNFe",
      name: "ChaveNFe",
      typeField: "string",
    },
    {
      field: "ReciboNFe",
      label: "ReciboNFe",
      name: "ReciboNFe",
      typeField: "string",
    },
  ],
};
