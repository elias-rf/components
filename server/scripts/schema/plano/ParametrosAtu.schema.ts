import { TTableDef } from "@/types/model";

export const ParametrosAtu: TTableDef = {
  database: "plano",
  table: "ParametrosAtu",
  fields: [
    {
      field: "Identificador",
      label: "Identificador",
      name: "ParametrosAtu_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "UltEstacaoProcessada",
      label: "UltEstacaoProcessada",
      name: "UltEstacaoProcessada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrUltAtualizacao",
      label: "HrUltAtualizacao",
      name: "HrUltAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Intervalo",
      label: "Intervalo",
      name: "Intervalo",
      typeField: "int",

      allowNull: false,
    },
  ],
};
