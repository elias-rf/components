import { TTable } from "../../types";

export const maquina: TTable = {
  database: "oftalmo",
  table: "tMaquina",
  fields: [
    {
      field: "kMaquina",
      label: "Cód",
      name: "maquina_id",
      primaryKey: true,
      typeField: "int",
    },
    {
      field: "NomeMaquina",
      label: "Máquina",
      name: "nome",
      typeField: "int",
    },
    {
      field: "Serie",
      label: "Série",
      name: "serie",
      typeField: "int",
    },
    {
      field: "fkDivisao",
      label: "Cód Divisao",
      name: "divisao_id",
      typeField: "int",
    },
    {
      field: "fkSetor",
      label: "Cód Setor",
      name: "setor_id",
      typeField: "int",
    },
    {
      field: "Descricao",
      label: "Descrição",
      name: "descricao",
      typeField: "int",
    },
    {
      field: "FrequenciaManutencao",
      label: "Frequência",
      name: "frequencia",
      typeField: "string",
    },
    {
      field: "Ativo",
      label: "Ativo",
      name: "is_ativo",
      typeField: "boolean",
    },
  ],
};
