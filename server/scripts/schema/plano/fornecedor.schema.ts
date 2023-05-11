import { TTableDef } from "@/types/model";

export const fornecedor: TTableDef = {
  database: "plano",
  table: "CadFor",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CadFor_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",
    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CGC",
      label: "CGC",
      name: "CGC",
      typeField: "float",

      scale: 4,
    },
    {
      field: "InscEst",
      label: "InscEst",
      name: "InscEst",
      typeField: "string",
    },
    {
      field: "EMail",
      label: "EMail",
      name: "EMail",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      typeField: "string",
    },
    {
      field: "CdTipo",
      label: "CdTipo",
      name: "CdTipo",
      typeField: "int",
    },
    {
      field: "CdSubTipo",
      label: "CdSubTipo",
      name: "CdSubTipo",
      typeField: "int",
    },
    {
      field: "ReduMargemSub",
      label: "ReduMargemSub",
      name: "ReduMargemSub",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtUltCompra",
      label: "DtUltCompra",
      name: "DtUltCompra",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "ModeloAtualizacao",
      label: "ModeloAtualizacao",
      name: "ModeloAtualizacao",
      typeField: "string",
    },
    {
      field: "CdGrupo",
      label: "CdGrupo",
      name: "CdGrupo",
      typeField: "int",
    },
    {
      field: "ModeloPedido",
      label: "ModeloPedido",
      name: "ModeloPedido",
      typeField: "string",
    },
    {
      field: "CdIdentificacao",
      label: "CdIdentificacao",
      name: "CdIdentificacao",
      typeField: "string",
    },
    {
      field: "VlMoeda",
      label: "VlMoeda",
      name: "VlMoeda",
      typeField: "float",
    },
    {
      field: "CdCentroCustoPadrao",
      label: "CdCentroCustoPadrao",
      name: "CdCentroCustoPadrao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "IdCondPagamento",
      label: "IdCondPagamento",
      name: "IdCondPagamento",
      typeField: "int",
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
    {
      field: "DirTrocaArquivo",
      label: "DirTrocaArquivo",
      name: "DirTrocaArquivo",
      typeField: "string",
    },
    {
      field: "NmFantasia",
      label: "NmFantasia",
      name: "NmFantasia",
      typeField: "string",
    },
    {
      field: "Classificacao",
      label: "Classificacao",
      name: "Classificacao",
      typeField: "string",
    },
    {
      field: "FgCotacao",
      label: "FgCotacao",
      name: "FgCotacao",
      typeField: "string",
    },
    {
      field: "FgSigiloso",
      label: "FgSigiloso",
      name: "FgSigiloso",
      typeField: "string",
    },
    {
      field: "NumContaDespesa",
      label: "NumContaDespesa",
      name: "NumContaDespesa",
      typeField: "int",
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
    {
      field: "FgGNRE",
      label: "FgGNRE",
      name: "FgGNRE",
      typeField: "string",
    },
    {
      field: "NumEndereco",
      label: "NumEndereco",
      name: "NumEndereco",
      typeField: "int",
    },
    {
      field: "Complemento",
      label: "Complemento",
      name: "Complemento",
      typeField: "string",
    },
    {
      field: "InscSuframa",
      label: "InscSuframa",
      name: "InscSuframa",
      typeField: "string",
    },
    {
      field: "FgTipoCustoDRE",
      label: "FgTipoCustoDRE",
      name: "FgTipoCustoDRE",
      typeField: "string",
    },
    {
      field: "CdPais",
      label: "CdPais",
      name: "CdPais",
      typeField: "int",
    },
  ],
};
