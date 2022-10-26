import { TEntity } from "../../../../types";

export const ConfiguracaoSiTefFilial: TEntity = {
  database: "plano",
  table: "ConfiguracaoSiTefFilial",
  schema: [
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
