import { TTable } from "../../types";

export const diamante: TTable = {
  database: "oftalmo",
  table: "diamante",
  fields: [
    {
      field: "id",
      label: "Cód",
      name: "diamante_id",
      primaryKey: true,
      typeField: "string",
      allowNull: false,
    },
    {
      field: "diamante",
      label: "Diamante",
      name: "diamante",
      typeField: "string",
    },
    {
      field: "tipo",
      label: "Tipo",
      name: "tipo",
      typeField: "string",
    },
    {
      field: "raio",
      label: "Raio",
      name: "raio",
      typeField: "float",
    },
    {
      field: "espessura",
      label: "Espessura",
      name: "espessura",
      typeField: "float",
    },
    {
      field: "fkMaquina",
      label: "Cód Maquina",
      name: "maquina_id",
      typeField: "int",
    },
    {
      field: "fkFuncionario",
      label: "Cód Empregado",
      name: "empregado_id",
      typeField: "int",
    },
    {
      field: "dataEntrada",
      label: "Entrada",
      name: "data_entrada",
      typeField: "date",
    },
    {
      field: "ordemInicial",
      label: "OP Inicial",
      name: "op_id_inicial",
      typeField: "int",
    },
    {
      field: "dataSaida",
      label: "Saída",
      name: "data_saida",
      typeField: "date",
    },
    {
      field: "ordemFinal",
      label: "OP Final",
      name: "op_id_final",
      typeField: "int",
    },
    {
      field: "qtdCortes",
      label: "Qtd Cortes",
      name: "quantidade_corte",
      typeField: "int",
    },
  ],
};
