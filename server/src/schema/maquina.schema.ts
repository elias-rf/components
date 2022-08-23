import { TEntity } from "@er/types/*";

export const maquina: TEntity = {
  database: "oftalmo",
  table: "tMaquina",
  fields: [
    {
      field: "kMaquina",
      label: "Cód",
      name: "maquina_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "NomeMaquina",
      label: "Máquina",
      name: "nome",
      type: "int",
    },
    {
      field: "Serie",
      label: "Série",
      name: "serie",
      type: "int",
    },
    {
      field: "fkDivisao",
      label: "Cód Divisao",
      name: "divisao_id",
      type: "int",
    },
    {
      field: "fkSetor",
      label: "Cód Setor",
      name: "setor_id",
      type: "int",
    },
    {
      field: "Descricao",
      label: "Descrição",
      name: "descricao",
      type: "int",
    },
    {
      field: "FrequenciaManutencao",
      label: "Frequência",
      name: "frequencia",
      type: "string",
    },
    {
      field: "Ativo",
      label: "Ativo",
      name: "is_ativo",
      type: "boolean",
    },
  ],
};
