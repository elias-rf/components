import { TEntity } from "../../../../types";

export const ProgramaClientes: TEntity = {
  database: "plano",
  table: "ProgramaClientes",
  schema: [
    {
      field: "CdPrograma",
      label: "CdPrograma",
      name: "CdPrograma",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMatricula",
      label: "NumMatricula",
      name: "NumMatricula",
      type: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
