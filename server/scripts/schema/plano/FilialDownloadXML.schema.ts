import { TEntity } from "../../../../types";

export const FilialDownloadXML: TEntity = {
  database: "plano",
  table: "FilialDownloadXML",
  schema: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CNPJCPFAutorizado",
      label: "CNPJCPFAutorizado",
      name: "CNPJCPFAutorizado",
      type: "int",
      size: 9,
      allowNull: false,
    },
  ],
};
