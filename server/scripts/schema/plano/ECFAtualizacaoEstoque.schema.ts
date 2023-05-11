import { TTableDef } from "@/types/model";

export const ECFAtualizacaoEstoque: TTableDef = {
  database: "plano",
  table: "ECFAtualizacaoEstoque",
  fields: [
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MFAdicional",
      label: "MFAdicional",
      name: "MFAdicional",
      typeField: "string",
    },
    {
      field: "TipoECF",
      label: "TipoECF",
      name: "TipoECF",
      typeField: "string",
    },
    {
      field: "MarcaECF",
      label: "MarcaECF",
      name: "MarcaECF",
      typeField: "string",
    },
    {
      field: "ModeloECF",
      label: "ModeloECF",
      name: "ModeloECF",
      typeField: "string",
    },
    {
      field: "DtEstoque",
      label: "DtEstoque",
      name: "DtEstoque",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrEstoque",
      label: "HrEstoque",
      name: "HrEstoque",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
