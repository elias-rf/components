import { TTableDef } from "@/types/model";

export const CadastroClasseTerapeutica: TTableDef = {
  database: "plano",
  table: "CadastroClasseTerapeutica",
  fields: [
    {
      field: "CdClasseTerapeutica",
      label: "CdClasseTerapeutica",
      name: "CdClasseTerapeutica",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmClasseTerapeutica",
      label: "NmClasseTerapeutica",
      name: "NmClasseTerapeutica",
      typeField: "string",

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
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "int",
    },
  ],
};
