import { TEntity } from "@er/types/*";

export const diamante: TEntity = {
  database: "oftalmo",
  table: "diamante",
  fields: [
    {
      field: "id",
      label: "Cód",
      name: "diamante_id",
      primaryKey: true,
      type: "string",
      allowNull: false,
    },
    {
      field: "diamante",
      label: "Diamante",
      name: "diamante",
      type: "string",
    },
    {
      field: "tipo",
      label: "Tipo",
      name: "tipo",
      type: "string",
    },
    {
      field: "raio",
      label: "Raio",
      name: "raio",
      type: "float",
    },
    {
      field: "espessura",
      label: "Espessura",
      name: "espessura",
      type: "float",
    },
    {
      field: "fkMaquina",
      label: "Cód Maquina",
      name: "maquina_id",
      type: "int",
    },
    {
      field: "fkFuncionario",
      label: "Cód Empregado",
      name: "empregado_id",
      type: "int",
    },
    {
      field: "dataEntrada",
      label: "Entrada",
      name: "data_entrada",
      type: "date",
    },
    {
      field: "ordemInicial",
      label: "OP Inicial",
      name: "op_id_inicial",
      type: "int",
    },
    {
      field: "dataSaida",
      label: "Saída",
      name: "data_saida",
      type: "date",
    },
    {
      field: "ordemFinal",
      label: "OP Final",
      name: "op_id_final",
      type: "int",
    },
    {
      field: "qtdCortes",
      label: "Qtd Cortes",
      name: "quantidade_corte",
      type: "int",
    },
  ],
};
