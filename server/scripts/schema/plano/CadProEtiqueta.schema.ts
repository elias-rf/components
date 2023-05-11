import { TTableDef } from "@/types/model";

export const CadProEtiqueta: TTableDef = {
  database: "plano",
  table: "CadProEtiqueta",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadProEtiqueta_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "ReceitaEtiqueta",
      label: "ReceitaEtiqueta",
      name: "ReceitaEtiqueta",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoEtiqueta",
      label: "TipoEtiqueta",
      name: "TipoEtiqueta",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoValidadeEtiqueta",
      label: "TipoValidadeEtiqueta",
      name: "TipoValidadeEtiqueta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ValidadeEtiqueta",
      label: "ValidadeEtiqueta",
      name: "ValidadeEtiqueta",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DeptoEtiqueta",
      label: "DeptoEtiqueta",
      name: "DeptoEtiqueta",
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
