import { TTableDef } from "../../../../types/model";

export const TabelaAuxiliar: TTableDef = {
  database: "plano",
  table: "TabelaAuxiliar",
  fields: [
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Codigo",
      label: "Codigo",
      name: "Codigo",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
      size: 1,
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
