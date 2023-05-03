import { TTableDef } from "@/types/model";

export const ProgramaClientes: TTableDef = {
  database: "plano",
  table: "ProgramaClientes",
  fields: [
    {
      field: "CdPrograma",
      label: "CdPrograma",
      name: "CdPrograma",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMatricula",
      label: "NumMatricula",
      name: "NumMatricula",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
