import { TTable } from "../../../../types/model";

export const FilialDownloadXML: TTable = {
  database: "plano",
  table: "FilialDownloadXML",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CNPJCPFAutorizado",
      label: "CNPJCPFAutorizado",
      name: "CNPJCPFAutorizado",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
  ],
};
