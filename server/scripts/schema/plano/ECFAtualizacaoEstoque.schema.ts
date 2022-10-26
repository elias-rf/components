import { TEntity } from "../../../../types";

export const ECFAtualizacaoEstoque: TEntity = {
  database: "plano",
  table: "ECFAtualizacaoEstoque",
  schema: [
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "MFAdicional",
      label: "MFAdicional",
      name: "MFAdicional",
      type: "string",
      size: 2,
    },
    {
      field: "TipoECF",
      label: "TipoECF",
      name: "TipoECF",
      type: "string",
      size: 76,
    },
    {
      field: "MarcaECF",
      label: "MarcaECF",
      name: "MarcaECF",
      type: "string",
      size: 32,
    },
    {
      field: "ModeloECF",
      label: "ModeloECF",
      name: "ModeloECF",
      type: "string",
      size: 32,
    },
    {
      field: "DtEstoque",
      label: "DtEstoque",
      name: "DtEstoque",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrEstoque",
      label: "HrEstoque",
      name: "HrEstoque",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
