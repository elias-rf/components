import { TTableDef } from "@/types/model";

export const tManutencaoCorretiva: TTableDef = {
  database: "oftalmo",
  table: "tManutencaoCorretiva",
  fields: [
    {
      field: "kManutencaoCorretiva",
      label: "kManutencaoCorretiva",
      name: "tManutencaoCorretiva_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DataHoraInicio",
      label: "DataHoraInicio",
      name: "DataHoraInicio",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "fkFuncionario",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "fkMaquina",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DescricaoProblema",
      label: "DescricaoProblema",
      name: "DescricaoProblema",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DataHoraFinal",
      label: "DataHoraFinal",
      name: "DataHoraFinal",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Diagnostico",
      label: "Diagnostico",
      name: "Diagnostico",
      typeField: "string",
    },
    {
      field: "DescricaoSolucao",
      label: "DescricaoSolucao",
      name: "DescricaoSolucao",
      typeField: "string",
    },
    {
      field: "ResponsavelManutencao",
      label: "ResponsavelManutencao",
      name: "ResponsavelManutencao",
      typeField: "string",
    },
    {
      field: "Travado",
      label: "Travado",
      name: "Travado",
      typeField: "int",

      defaultValue: "0",
    },
    {
      field: "UsuarioConclusao",
      label: "UsuarioConclusao",
      name: "UsuarioConclusao",
      typeField: "string",
    },
  ],
};
