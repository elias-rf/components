import { TTableDef } from "@/types/model";

export const Dependentes: TTableDef = {
  database: "plano",
  table: "Dependentes",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "float",

      scale: 4,
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
      field: "NmDependente",
      label: "NmDependente",
      name: "NmDependente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtNctoDependente",
      label: "DtNctoDependente",
      name: "DtNctoDependente",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
