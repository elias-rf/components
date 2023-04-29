import { TTableDef } from "@mono/types/model";

export const ManutPreventiva: TTableDef = {
  database: "plano",
  table: "ManutPreventiva",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdEquipamento",
      label: "CdEquipamento",
      name: "CdEquipamento",
      typeField: "int",
      size: 4,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
      size: 20,
    },
    {
      field: "Periodo",
      label: "Periodo",
      name: "Periodo",
      typeField: "int",
      size: 4,
    },
    {
      field: "DtultPreventiva",
      label: "DtultPreventiva",
      name: "DtultPreventiva",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
