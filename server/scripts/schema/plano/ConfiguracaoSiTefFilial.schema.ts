import { TTable } from "../../../../types";

export const ConfiguracaoSiTefFilial: TTable = {
  database: "plano",
  table: "ConfiguracaoSiTefFilial",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfiguracaoSiTefFilial_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "IPSiTef",
      label: "IPSiTef",
      name: "IPSiTef",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "IdLoja",
      label: "IdLoja",
      name: "IdLoja",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
