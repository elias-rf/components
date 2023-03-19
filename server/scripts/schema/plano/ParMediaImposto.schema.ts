import { TTableDef } from "../../../../types/model";

export const ParMediaImposto: TTableDef = {
  database: "plano",
  table: "ParMediaImposto",
  fields: [
    {
      field: "CodigoNCMNBS",
      label: "CodigoNCMNBS",
      name: "CodigoNCMNBS",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CodigoEX",
      label: "CodigoEX",
      name: "CodigoEX",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoTabela",
      label: "TipoTabela",
      name: "TipoTabela",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "AliquotaNacional",
      label: "AliquotaNacional",
      name: "AliquotaNacional",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "AliquotaImportado",
      label: "AliquotaImportado",
      name: "AliquotaImportado",
      typeField: "int",
      size: 5,
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
