import { TTableDef } from "@/types/model";

export const FilialDownloadXML: TTableDef = {
  database: "plano",
  table: "FilialDownloadXML",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CNPJCPFAutorizado",
      label: "CNPJCPFAutorizado",
      name: "CNPJCPFAutorizado",
      typeField: "int",

      allowNull: false,
    },
  ],
};
