import { TTableDef } from "@/types/model";

export const ControladosSaida: TTableDef = {
  database: "plano",
  table: "ControladosSaida",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPDV",
      label: "NumPDV",
      name: "NumPDV",
      typeField: "int",
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

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
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "QtdePrescrita",
      label: "QtdePrescrita",
      name: "QtdePrescrita",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdeVendida",
      label: "QtdeVendida",
      name: "QtdeVendida",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtReceita",
      label: "DtReceita",
      name: "DtReceita",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "NumReceita",
      label: "NumReceita",
      name: "NumReceita",
      typeField: "int",
    },
    {
      field: "CdComprador",
      label: "CdComprador",
      name: "CdComprador",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NomeComprador",
      label: "NomeComprador",
      name: "NomeComprador",
      typeField: "string",
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
    },
    {
      field: "NumIdentidade",
      label: "NumIdentidade",
      name: "NumIdentidade",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "FgStatus",
      label: "FgStatus",
      name: "FgStatus",
      typeField: "string",
    },
    {
      field: "NmPaciente",
      label: "NmPaciente",
      name: "NmPaciente",
      typeField: "string",
    },
    {
      field: "TipoReceita",
      label: "TipoReceita",
      name: "TipoReceita",
      typeField: "string",
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TipoUsoMedicamento",
      label: "TipoUsoMedicamento",
      name: "TipoUsoMedicamento",
      typeField: "int",
    },
    {
      field: "UfReceita",
      label: "UfReceita",
      name: "UfReceita",
      typeField: "string",
    },
    {
      field: "TipoIdentidade",
      label: "TipoIdentidade",
      name: "TipoIdentidade",
      typeField: "int",
    },
    {
      field: "UfIdentidade",
      label: "UfIdentidade",
      name: "UfIdentidade",
      typeField: "string",
    },
    {
      field: "EmissorIdentidade",
      label: "EmissorIdentidade",
      name: "EmissorIdentidade",
      typeField: "string",
    },
    {
      field: "NumLoteProduto",
      label: "NumLoteProduto",
      name: "NumLoteProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumRegistroProduto",
      label: "NumRegistroProduto",
      name: "NumRegistroProduto",
      typeField: "string",
    },
    {
      field: "Conselho",
      label: "Conselho",
      name: "Conselho",
      typeField: "string",
    },
    {
      field: "UfConselho",
      label: "UfConselho",
      name: "UfConselho",
      typeField: "string",
    },
    {
      field: "NumConselho",
      label: "NumConselho",
      name: "NumConselho",
      typeField: "float",
    },
    {
      field: "FgGenerico",
      label: "FgGenerico",
      name: "FgGenerico",
      typeField: "string",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",
    },
    {
      field: "MotivoPerda",
      label: "MotivoPerda",
      name: "MotivoPerda",
      typeField: "int",
    },
    {
      field: "UsoProlongado",
      label: "UsoProlongado",
      name: "UsoProlongado",
      typeField: "int",
    },
    {
      field: "unidadeIdade",
      label: "unidadeIdade",
      name: "unidadeIdade",
      typeField: "int",
    },
    {
      field: "Idade",
      label: "Idade",
      name: "Idade",
      typeField: "int",
    },
    {
      field: "Sexo",
      label: "Sexo",
      name: "Sexo",
      typeField: "string",
    },
  ],
};
