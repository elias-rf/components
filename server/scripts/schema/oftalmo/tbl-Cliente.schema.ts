import { TTableDef } from "../../../../types/model";

export const tbl_Cliente: TTableDef = {
  database: "oftalmo",
  table: "tbl_Cliente",
  fields: [
    {
      field: "kCliente",
      label: "kCliente",
      name: "tbl_Cliente_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fKClienteClassificacao",
      label: "fKClienteClassificacao",
      name: "fKClienteClassificacao",
      typeField: "int",
      size: 2,
    },
    {
      field: "NomeCliente",
      label: "NomeCliente",
      name: "NomeCliente",
      typeField: "string",
      size: 150,
    },
    {
      field: "Contato",
      label: "Contato",
      name: "Contato",
      typeField: "string",
      size: 150,
    },
    {
      field: "Nascimento",
      label: "Nascimento",
      name: "Nascimento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",
      size: 60,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
      size: 150,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
      size: 30,
    },
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      typeField: "string",
      size: 9,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",
      size: 50,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",
      size: 2,
    },
    {
      field: "Pais",
      label: "Pais",
      name: "Pais",
      typeField: "string",
      size: 100,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",
      size: 20,
    },
    {
      field: "INS",
      label: "INS",
      name: "INS",
      typeField: "string",
      size: 16,
    },
    {
      field: "CCM",
      label: "CCM",
      name: "CCM",
      typeField: "string",
      size: 20,
    },
    {
      field: "CgcCpf",
      label: "CgcCpf",
      name: "CgcCpf",
      typeField: "string",
      size: 18,
    },
    {
      field: "TelResidencial",
      label: "TelResidencial",
      name: "TelResidencial",
      typeField: "string",
      size: 25,
    },
    {
      field: "TelComercial",
      label: "TelComercial",
      name: "TelComercial",
      typeField: "string",
      size: 35,
    },
    {
      field: "FAX",
      label: "FAX",
      name: "FAX",
      typeField: "string",
      size: 25,
    },
    {
      field: "OBSGeral",
      label: "OBSGeral",
      name: "OBSGeral",
      typeField: "string",
      size: 2000,
    },
    {
      field: "Atualizacao",
      label: "Atualizacao",
      name: "Atualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "ObsFinanceira",
      label: "ObsFinanceira",
      name: "ObsFinanceira",
      typeField: "string",
      size: 4000,
    },
    {
      field: "CobrarFrete",
      label: "CobrarFrete",
      name: "CobrarFrete",
      typeField: "int",
      size: 1,
    },
    {
      field: "EhFilantropico",
      label: "EhFilantropico",
      name: "EhFilantropico",
      typeField: "int",
      size: 1,
    },
    {
      field: "ListaNegra",
      label: "ListaNegra",
      name: "ListaNegra",
      typeField: "int",
      size: 1,
    },
    {
      field: "LimiteCredito",
      label: "LimiteCredito",
      name: "LimiteCredito",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "lx_DataUltPedido",
      label: "lx_DataUltPedido",
      name: "lx_DataUltPedido",
      typeField: "date",
      size: 4,
    },
    {
      field: "lx_UltPedido",
      label: "lx_UltPedido",
      name: "lx_UltPedido",
      typeField: "int",
      size: 4,
    },
    {
      field: "lx_MaiorCompra",
      label: "lx_MaiorCompra",
      name: "lx_MaiorCompra",
      typeField: "float",
      size: 4,
      scale: 4,
    },
    {
      field: "lx_MédiaCompra",
      label: "lx_MédiaCompra",
      name: "lx_MédiaCompra",
      typeField: "float",
      size: 4,
      scale: 4,
    },
    {
      field: "lx_Inadimplencia",
      label: "lx_Inadimplencia",
      name: "lx_Inadimplencia",
      typeField: "float",
      size: 9,
    },
    {
      field: "Hospital",
      label: "Hospital",
      name: "Hospital",
      typeField: "string",
      size: 50,
    },
    {
      field: "Atendimento2",
      label: "Atendimento2",
      name: "Atendimento2",
      typeField: "int",
      size: 1,
    },
    {
      field: "Atendimento3",
      label: "Atendimento3",
      name: "Atendimento3",
      typeField: "int",
      size: 1,
    },
    {
      field: "Atendimento4",
      label: "Atendimento4",
      name: "Atendimento4",
      typeField: "int",
      size: 1,
    },
    {
      field: "Atendimento5",
      label: "Atendimento5",
      name: "Atendimento5",
      typeField: "int",
      size: 1,
    },
    {
      field: "Atendimento6",
      label: "Atendimento6",
      name: "Atendimento6",
      typeField: "int",
      size: 1,
    },
    {
      field: "QtdCatarata",
      label: "QtdCatarata",
      name: "QtdCatarata",
      typeField: "int",
      size: 2,
    },
    {
      field: "QtdPhaco",
      label: "QtdPhaco",
      name: "QtdPhaco",
      typeField: "int",
      size: 2,
    },
    {
      field: "TipoLios",
      label: "TipoLios",
      name: "TipoLios",
      typeField: "string",
      size: 50,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 50,
    },
    {
      field: "Informante",
      label: "Informante",
      name: "Informante",
      typeField: "string",
      size: 50,
    },
    {
      field: "CargoInformante",
      label: "CargoInformante",
      name: "CargoInformante",
      typeField: "string",
      size: 50,
    },
    {
      field: "DataInformacao",
      label: "DataInformacao",
      name: "DataInformacao",
      typeField: "date",
      size: 4,
    },
    {
      field: "fkCategoriaFinanceira",
      label: "fkCategoriaFinanceira",
      name: "fkCategoriaFinanceira",
      typeField: "int",
      size: 1,
    },
    {
      field: "Humor",
      label: "Humor",
      name: "Humor",
      typeField: "int",
      size: 1,
      defaultValue: "0",
    },
    {
      field: "EhFimdemes",
      label: "EhFimdemes",
      name: "EhFimdemes",
      typeField: "int",
      size: 1,
    },
    {
      field: "DataCadastro",
      label: "DataCadastro",
      name: "DataCadastro",
      typeField: "date",
      size: 4,
    },
    {
      field: "UsuarioCadastro",
      label: "UsuarioCadastro",
      name: "UsuarioCadastro",
      typeField: "string",
      size: 50,
    },
    {
      field: "ListaSDS",
      label: "ListaSDS",
      name: "ListaSDS",
      typeField: "int",
      size: 1,
    },
    {
      field: "fkRegiao",
      label: "fkRegiao",
      name: "fkRegiao",
      typeField: "int",
      size: 4,
    },
    {
      field: "LimiteFixo",
      label: "LimiteFixo",
      name: "LimiteFixo",
      typeField: "int",
      size: 1,
    },
    {
      field: "LimiteCreditoClass",
      label: "LimiteCreditoClass",
      name: "LimiteCreditoClass",
      typeField: "string",
      size: 12,
    },
    {
      field: "ConsultaSPC",
      label: "ConsultaSPC",
      name: "ConsultaSPC",
      typeField: "date",
      size: 4,
    },
    {
      field: "EhClienteFerrara",
      label: "EhClienteFerrara",
      name: "EhClienteFerrara",
      typeField: "int",
      size: 1,
    },
    {
      field: "InteresseTrnFerrara",
      label: "InteresseTrnFerrara",
      name: "InteresseTrnFerrara",
      typeField: "int",
      size: 1,
    },
    {
      field: "Invisivel",
      label: "Invisivel",
      name: "Invisivel",
      typeField: "int",
      size: 1,
      defaultValue: "0",
    },
    {
      field: "Indicar",
      label: "Indicar",
      name: "Indicar",
      typeField: "int",
      size: 1,
    },
    {
      field: "Protestar",
      label: "Protestar",
      name: "Protestar",
      typeField: "int",
      size: 1,
    },
    {
      field: "podeapagar",
      label: "podeapagar",
      name: "podeapagar",
      typeField: "int",
      size: 1,
    },
    {
      field: "CADASTRADOSANKHYA",
      label: "CADASTRADOSANKHYA",
      name: "CADASTRADOSANKHYA",
      typeField: "int",
      size: 1,
    },
    {
      field: "REVISADOSANKHYA",
      label: "REVISADOSANKHYA",
      name: "REVISADOSANKHYA",
      typeField: "int",
      size: 1,
    },
  ],
};
