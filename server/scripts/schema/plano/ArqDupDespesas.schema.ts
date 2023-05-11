import { TTableDef } from "@/types/model";

export const ArqDupDespesas: TTableDef = {
  database: "plano",
  table: "ArqDupDespesas",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SeqDoc",
      label: "SeqDoc",
      name: "SeqDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumContaDespesa",
      label: "NumContaDespesa",
      name: "NumContaDespesa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Percentual",
      label: "Percentual",
      name: "Percentual",
      typeField: "float",

      scale: 4,
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
