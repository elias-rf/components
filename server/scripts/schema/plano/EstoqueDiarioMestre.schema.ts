import { TTableDef } from "@mono/types/model";

export const EstoqueDiarioMestre: TTableDef = {
  database: "plano",
  table: "EstoqueDiarioMestre",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "NumSerieECF",
      label: "NumSerieECF",
      name: "NumSerieECF",
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
      allowNull: false,
    },
    {
      field: "TipoECF",
      label: "TipoECF",
      name: "TipoECF",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "MarcaECF",
      label: "MarcaECF",
      name: "MarcaECF",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "ModeloECF",
      label: "ModeloECF",
      name: "ModeloECF",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
