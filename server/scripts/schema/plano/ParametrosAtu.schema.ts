import { TEntity } from "../../../../types";

export const ParametrosAtu: TEntity = {
  database: "plano",
  table: "ParametrosAtu",
  fields: [
    {
      field: "Identificador",
      label: "Identificador",
      name: "ParametrosAtu_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "UltEstacaoProcessada",
      label: "UltEstacaoProcessada",
      name: "UltEstacaoProcessada",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrUltAtualizacao",
      label: "HrUltAtualizacao",
      name: "HrUltAtualizacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Intervalo",
      label: "Intervalo",
      name: "Intervalo",
      type: "int",
      size: 2,
      allowNull: false,
    },
  ],
};
