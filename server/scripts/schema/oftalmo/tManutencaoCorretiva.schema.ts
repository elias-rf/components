import { TTable } from "../../../../types/model";

export const tManutencaoCorretiva: TTable = {
  database: "oftalmo",
  table: "tManutencaoCorretiva",
  fields: [
    {
      field: "kManutencaoCorretiva",
      label: "kManutencaoCorretiva",
      name: "tManutencaoCorretiva_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DataHoraInicio",
      label: "DataHoraInicio",
      name: "DataHoraInicio",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "fkFuncionario",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "fkMaquina",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "DescricaoProblema",
      label: "DescricaoProblema",
      name: "DescricaoProblema",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "DataHoraFinal",
      label: "DataHoraFinal",
      name: "DataHoraFinal",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Diagnostico",
      label: "Diagnostico",
      name: "Diagnostico",
      typeField: "string",
      size: 16,
    },
    {
      field: "DescricaoSolucao",
      label: "DescricaoSolucao",
      name: "DescricaoSolucao",
      typeField: "string",
      size: 16,
    },
    {
      field: "ResponsavelManutencao",
      label: "ResponsavelManutencao",
      name: "ResponsavelManutencao",
      typeField: "string",
      size: 100,
    },
    {
      field: "Travado",
      label: "Travado",
      name: "Travado",
      typeField: "int",
      size: 1,
      defaultValue: "0",
    },
    {
      field: "UsuarioConclusao",
      label: "UsuarioConclusao",
      name: "UsuarioConclusao",
      typeField: "string",
      size: 50,
    },
  ],
};
