import { TTable } from "../../../../types/model";

export const CadProEtiqueta: TTable = {
  database: "plano",
  table: "CadProEtiqueta",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadProEtiqueta_id",
      typeField: "string",
      size: 15,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "ReceitaEtiqueta",
      label: "ReceitaEtiqueta",
      name: "ReceitaEtiqueta",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoEtiqueta",
      label: "TipoEtiqueta",
      name: "TipoEtiqueta",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoValidadeEtiqueta",
      label: "TipoValidadeEtiqueta",
      name: "TipoValidadeEtiqueta",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "ValidadeEtiqueta",
      label: "ValidadeEtiqueta",
      name: "ValidadeEtiqueta",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DeptoEtiqueta",
      label: "DeptoEtiqueta",
      name: "DeptoEtiqueta",
      typeField: "int",
      size: 2,
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
