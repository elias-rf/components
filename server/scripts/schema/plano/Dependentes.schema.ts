import { TEntity } from "../../../../types";

export const Dependentes: TEntity = {
  database: "plano",
  table: "Dependentes",
  schema: [
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
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NmDependente",
      label: "NmDependente",
      name: "NmDependente",
      type: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "DtNctoDependente",
      label: "DtNctoDependente",
      name: "DtNctoDependente",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
