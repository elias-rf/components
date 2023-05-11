import { TTableDef } from "@/types/model";

export const ParametrosMediaImposto: TTableDef = {
  database: "plano",
  table: "ParametrosMediaImposto",
  fields: [
    {
      field: "TipoTabela",
      label: "TipoTabela",
      name: "TipoTabela",
      typeField: "int",

      allowNull: false,
    },
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
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PercFederalNacional",
      label: "PercFederalNacional",
      name: "PercFederalNacional",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "PercFederalImportado",
      label: "PercFederalImportado",
      name: "PercFederalImportado",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "PercEstadual",
      label: "PercEstadual",
      name: "PercEstadual",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "PercMunicipal",
      label: "PercMunicipal",
      name: "PercMunicipal",
      typeField: "int",

      scale: 2,
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
