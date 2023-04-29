import { TTableDef } from "@mono/types";

export const ordem_producao_operacao: TTableDef = {
  database: "oftalmo",
  table: "tOperacaoOrdemProducao",
  fields: [
    {
      field: "kOperacaoOP",
      label: "kOperacaoOP",
      name: "ordem_producao_operacao_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOp",
      label: "fkOp",
      name: "ordem_producao_id",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkOperacaoLP",
      label: "fkOperacaoLP",
      name: "fkOperacaoLP",
      typeField: "int",
      size: 4,
    },
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "operacao_id",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "empregado_id",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "maquina_id",
      typeField: "string",
      size: 30,
    },
    {
      field: "DataHoraInicio",
      label: "DataHoraInicio",
      name: "data_hora_inicio",
      typeField: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "DataHoraFim",
      label: "DataHoraFim",
      name: "data_hora_fim",
      typeField: "date",
      size: 4,
    },
    {
      field: "QtdInicial",
      label: "QtdInicial",
      name: "quantidade_inicial",
      typeField: "int",
      size: 4,
    },
    {
      field: "QtdConforme",
      label: "QtdConforme",
      name: "quantidade_conforme",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "QtdRetrabalho",
      label: "QtdRetrabalho",
      name: "quantidade_retrabalho",
      typeField: "int",
      size: 4,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkOperacaoRetrab",
      label: "fkOperacaoRetrab",
      name: "operacao_id_retrabalho",
      typeField: "int",
      size: 4,
    },
    {
      field: "Complemento",
      label: "Complemento",
      name: "complemento",
      typeField: "string",
      size: 50,
    },
    {
      field: "fkOPFilha",
      label: "fkOPFilha",
      name: "ordem_producao_id_filha",
      typeField: "int",
      size: 4,
    },
    {
      field: "ViaFilhaAntiga",
      label: "ViaFilhaAntiga",
      name: "ViaFilhaAntiga",
      typeField: "float",
      size: 4,
    },
    {
      field: "IdPagina",
      label: "IdPagina",
      name: "IdPagina",
      typeField: "int",
      size: 4,
    },
    {
      field: "OPAntiga",
      label: "OPAntiga",
      name: "OPAntiga",
      typeField: "string",
      size: 8,
    },
    {
      field: "ClasseOP",
      label: "ClasseOP",
      name: "classe",
      typeField: "int",
      size: 1,
    },
    {
      field: "EspPriAlca",
      label: "EspPriAlca",
      name: "EspPriAlca",
      typeField: "string",
      size: 6,
    },
    {
      field: "EspSegAlca",
      label: "EspSegAlca",
      name: "EspSegAlca",
      typeField: "string",
      size: 6,
    },
  ],
};
