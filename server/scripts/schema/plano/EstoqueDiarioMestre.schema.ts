import { TTableDef } from "@/types/model";

export const EstoqueDiarioMestre: TTableDef = {
  database: "plano",
  table: "EstoqueDiarioMestre",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumSerieECF",
      label: "NumSerieECF",
      name: "NumSerieECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MFAdicional",
      label: "MFAdicional",
      name: "MFAdicional",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoECF",
      label: "TipoECF",
      name: "TipoECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MarcaECF",
      label: "MarcaECF",
      name: "MarcaECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloECF",
      label: "ModeloECF",
      name: "ModeloECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
