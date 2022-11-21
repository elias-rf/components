import { TTable } from "../../../../types";

export const ParMediaImposto: TTable = {
  database: "plano",
  table: "ParMediaImposto",
  fields: [
    {
      field: "CodigoNCMNBS",
      label: "CodigoNCMNBS",
      name: "CodigoNCMNBS",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CodigoEX",
      label: "CodigoEX",
      name: "CodigoEX",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoTabela",
      label: "TipoTabela",
      name: "TipoTabela",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "AliquotaNacional",
      label: "AliquotaNacional",
      name: "AliquotaNacional",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "AliquotaImportado",
      label: "AliquotaImportado",
      name: "AliquotaImportado",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
