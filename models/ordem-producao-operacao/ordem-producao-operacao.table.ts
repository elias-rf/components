import { TTableDef } from "@/types";

export const ordem_producao_operacao: TTableDef = {
  database: "oftalmo",
  table: "tOperacaoOrdemProducao",
  fields: [
    {
      field: "kOperacaoOP",
      label: "kOperacaoOP",
      name: "ordem_producao_operacao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOp",
      label: "fkOp",
      name: "ordem_producao_id",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkOperacaoLP",
      label: "fkOperacaoLP",
      name: "fkOperacaoLP",
      typeField: "int",
    },
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "operacao_id",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "empregado_id",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "maquina_id",
      typeField: "string",
    },
    {
      field: "DataHoraInicio",
      label: "DataHoraInicio",
      name: "data_hora_inicio",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "DataHoraFim",
      label: "DataHoraFim",
      name: "data_hora_fim",
      typeField: "date",
    },
    {
      field: "QtdInicial",
      label: "QtdInicial",
      name: "quantidade_inicial",
      typeField: "int",
    },
    {
      field: "QtdConforme",
      label: "QtdConforme",
      name: "quantidade_conforme",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdRetrabalho",
      label: "QtdRetrabalho",
      name: "quantidade_retrabalho",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkOperacaoRetrab",
      label: "fkOperacaoRetrab",
      name: "operacao_id_retrabalho",
      typeField: "int",
    },
    {
      field: "Complemento",
      label: "Complemento",
      name: "complemento",
      typeField: "string",
    },
    {
      field: "fkOPFilha",
      label: "fkOPFilha",
      name: "ordem_producao_id_filha",
      typeField: "int",
    },
    {
      field: "ViaFilhaAntiga",
      label: "ViaFilhaAntiga",
      name: "ViaFilhaAntiga",
      typeField: "float",
    },
    {
      field: "IdPagina",
      label: "IdPagina",
      name: "IdPagina",
      typeField: "int",
    },
    {
      field: "OPAntiga",
      label: "OPAntiga",
      name: "OPAntiga",
      typeField: "string",
    },
    {
      field: "ClasseOP",
      label: "ClasseOP",
      name: "classe",
      typeField: "int",
    },
    {
      field: "EspPriAlca",
      label: "EspPriAlca",
      name: "EspPriAlca",
      typeField: "string",
    },
    {
      field: "EspSegAlca",
      label: "EspSegAlca",
      name: "EspSegAlca",
      typeField: "string",
    },
  ],
};
