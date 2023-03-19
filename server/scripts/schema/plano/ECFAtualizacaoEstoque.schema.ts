import { TTableDef } from "../../../../types/model";

export const ECFAtualizacaoEstoque: TTableDef = {
  database: "plano",
  table: "ECFAtualizacaoEstoque",
  fields: [
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "MFAdicional",
      label: "MFAdicional",
      name: "MFAdicional",
      typeField: "string",
      size: 2,
    },
    {
      field: "TipoECF",
      label: "TipoECF",
      name: "TipoECF",
      typeField: "string",
      size: 76,
    },
    {
      field: "MarcaECF",
      label: "MarcaECF",
      name: "MarcaECF",
      typeField: "string",
      size: 32,
    },
    {
      field: "ModeloECF",
      label: "ModeloECF",
      name: "ModeloECF",
      typeField: "string",
      size: 32,
    },
    {
      field: "DtEstoque",
      label: "DtEstoque",
      name: "DtEstoque",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrEstoque",
      label: "HrEstoque",
      name: "HrEstoque",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
