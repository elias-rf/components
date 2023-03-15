import { TTable } from "../../../../types/model";

export const CadastroClasseTerapeutica: TTable = {
  database: "plano",
  table: "CadastroClasseTerapeutica",
  fields: [
    {
      field: "CdClasseTerapeutica",
      label: "CdClasseTerapeutica",
      name: "CdClasseTerapeutica",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NmClasseTerapeutica",
      label: "NmClasseTerapeutica",
      name: "NmClasseTerapeutica",
      typeField: "string",
      size: 40,
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
      size: 1024,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "int",
      size: 2,
    },
  ],
};
