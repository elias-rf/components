import { TTable } from "../../../../types/model";

export const ParametrosAtu: TTable = {
  database: "plano",
  table: "ParametrosAtu",
  fields: [
    {
      field: "Identificador",
      label: "Identificador",
      name: "ParametrosAtu_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "UltEstacaoProcessada",
      label: "UltEstacaoProcessada",
      name: "UltEstacaoProcessada",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrUltAtualizacao",
      label: "HrUltAtualizacao",
      name: "HrUltAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Intervalo",
      label: "Intervalo",
      name: "Intervalo",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
  ],
};
