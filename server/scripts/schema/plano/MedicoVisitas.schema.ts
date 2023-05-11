import { TTableDef } from "@/types/model";

export const MedicoVisitas: TTableDef = {
  database: "plano",
  table: "MedicoVisitas",
  fields: [
    {
      field: "Crm",
      label: "Crm",
      name: "Crm",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtVisita",
      label: "DtVisita",
      name: "DtVisita",
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
      field: "CdConsultor",
      label: "CdConsultor",
      name: "CdConsultor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "TipoContato",
      label: "TipoContato",
      name: "TipoContato",
      typeField: "string",
    },
  ],
};
