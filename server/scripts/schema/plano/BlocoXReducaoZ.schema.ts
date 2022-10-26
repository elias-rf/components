import { TEntity } from "../../../../types";

export const BlocoXReducaoZ: TEntity = {
  database: "plano",
  table: "BlocoXReducaoZ",
  schema: [
    {
      field: "CNPJFilial",
      label: "CNPJFilial",
      name: "CNPJFilial",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Situacao",
      label: "Situacao",
      name: "Situacao",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "StatusRetorno",
      label: "StatusRetorno",
      name: "StatusRetorno",
      type: "string",
      size: 1024,
      allowNull: false,
    },
    {
      field: "Recibo",
      label: "Recibo",
      name: "Recibo",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};