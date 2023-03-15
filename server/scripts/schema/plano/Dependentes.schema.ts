import { TTable } from "../../../../types/model";

export const Dependentes: TTable = {
  database: "plano",
  table: "Dependentes",
  fields: [
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
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "float",
      size: 8,
      scale: 4,
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
      field: "NmDependente",
      label: "NmDependente",
      name: "NmDependente",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "DtNctoDependente",
      label: "DtNctoDependente",
      name: "DtNctoDependente",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
