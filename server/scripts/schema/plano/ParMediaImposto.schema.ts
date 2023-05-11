import { TTableDef } from "@/types/model";

export const ParMediaImposto: TTableDef = {
  database: "plano",
  table: "ParMediaImposto",
  fields: [
    {
      field: "CodigoNCMNBS",
      label: "CodigoNCMNBS",
      name: "CodigoNCMNBS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CodigoEX",
      label: "CodigoEX",
      name: "CodigoEX",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoTabela",
      label: "TipoTabela",
      name: "TipoTabela",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AliquotaNacional",
      label: "AliquotaNacional",
      name: "AliquotaNacional",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AliquotaImportado",
      label: "AliquotaImportado",
      name: "AliquotaImportado",
      typeField: "int",

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
