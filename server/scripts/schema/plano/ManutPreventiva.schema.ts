import { TTableDef } from "@/types/model";

export const ManutPreventiva: TTableDef = {
  database: "plano",
  table: "ManutPreventiva",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdEquipamento",
      label: "CdEquipamento",
      name: "CdEquipamento",
      typeField: "int",
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
    },
    {
      field: "Periodo",
      label: "Periodo",
      name: "Periodo",
      typeField: "int",
    },
    {
      field: "DtultPreventiva",
      label: "DtultPreventiva",
      name: "DtultPreventiva",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
