import { TTable } from "../../../../types/model";

export const ParamContAcesso: TTable = {
  database: "plano",
  table: "ParamContAcesso",
  fields: [
    {
      field: "Base",
      label: "Base",
      name: "Base",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",
      size: 512,
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
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 512,
    },
  ],
};
