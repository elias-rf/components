import { TEntity } from "@er/types/*";

export const tbl_Cliente: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Cliente",
  "fields": [
    {
      "field": "kCliente",
      "label": "kCliente",
      "name": "tbl_Cliente_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fKClienteClassificacao",
      "label": "fKClienteClassificacao",
      "name": "fKClienteClassificacao",
      "type": "int",
      "size": 2
    },
    {
      "field": "NomeCliente",
      "label": "NomeCliente",
      "name": "NomeCliente",
      "type": "string",
      "size": 150
    },
    {
      "field": "Contato",
      "label": "Contato",
      "name": "Contato",
      "type": "string",
      "size": 150
    },
    {
      "field": "Nascimento",
      "label": "Nascimento",
      "name": "Nascimento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Email",
      "label": "Email",
      "name": "Email",
      "type": "string",
      "size": 60
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 150
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 30
    },
    {
      "field": "CEP",
      "label": "CEP",
      "name": "CEP",
      "type": "string",
      "size": 9
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 50
    },
    {
      "field": "UF",
      "label": "UF",
      "name": "UF",
      "type": "string",
      "size": 2
    },
    {
      "field": "Pais",
      "label": "Pais",
      "name": "Pais",
      "type": "string",
      "size": 100
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 20
    },
    {
      "field": "INS",
      "label": "INS",
      "name": "INS",
      "type": "string",
      "size": 16
    },
    {
      "field": "CCM",
      "label": "CCM",
      "name": "CCM",
      "type": "string",
      "size": 20
    },
    {
      "field": "CgcCpf",
      "label": "CgcCpf",
      "name": "CgcCpf",
      "type": "string",
      "size": 18
    },
    {
      "field": "TelResidencial",
      "label": "TelResidencial",
      "name": "TelResidencial",
      "type": "string",
      "size": 25
    },
    {
      "field": "TelComercial",
      "label": "TelComercial",
      "name": "TelComercial",
      "type": "string",
      "size": 35
    },
    {
      "field": "FAX",
      "label": "FAX",
      "name": "FAX",
      "type": "string",
      "size": 25
    },
    {
      "field": "OBSGeral",
      "label": "OBSGeral",
      "name": "OBSGeral",
      "type": "string",
      "size": 2000
    },
    {
      "field": "Atualizacao",
      "label": "Atualizacao",
      "name": "Atualizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "ObsFinanceira",
      "label": "ObsFinanceira",
      "name": "ObsFinanceira",
      "type": "string",
      "size": 4000
    },
    {
      "field": "CobrarFrete",
      "label": "CobrarFrete",
      "name": "CobrarFrete",
      "type": "int",
      "size": 1
    },
    {
      "field": "EhFilantropico",
      "label": "EhFilantropico",
      "name": "EhFilantropico",
      "type": "int",
      "size": 1
    },
    {
      "field": "ListaNegra",
      "label": "ListaNegra",
      "name": "ListaNegra",
      "type": "int",
      "size": 1
    },
    {
      "field": "LimiteCredito",
      "label": "LimiteCredito",
      "name": "LimiteCredito",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "lx_DataUltPedido",
      "label": "lx_DataUltPedido",
      "name": "lx_DataUltPedido",
      "type": "date",
      "size": 4
    },
    {
      "field": "lx_UltPedido",
      "label": "lx_UltPedido",
      "name": "lx_UltPedido",
      "type": "int",
      "size": 4
    },
    {
      "field": "lx_MaiorCompra",
      "label": "lx_MaiorCompra",
      "name": "lx_MaiorCompra",
      "type": "float",
      "size": 4,
      "scale": 4
    },
    {
      "field": "lx_MédiaCompra",
      "label": "lx_MédiaCompra",
      "name": "lx_MédiaCompra",
      "type": "float",
      "size": 4,
      "scale": 4
    },
    {
      "field": "lx_Inadimplencia",
      "label": "lx_Inadimplencia",
      "name": "lx_Inadimplencia",
      "type": "float",
      "size": 9
    },
    {
      "field": "Hospital",
      "label": "Hospital",
      "name": "Hospital",
      "type": "string",
      "size": 50
    },
    {
      "field": "Atendimento2",
      "label": "Atendimento2",
      "name": "Atendimento2",
      "type": "int",
      "size": 1
    },
    {
      "field": "Atendimento3",
      "label": "Atendimento3",
      "name": "Atendimento3",
      "type": "int",
      "size": 1
    },
    {
      "field": "Atendimento4",
      "label": "Atendimento4",
      "name": "Atendimento4",
      "type": "int",
      "size": 1
    },
    {
      "field": "Atendimento5",
      "label": "Atendimento5",
      "name": "Atendimento5",
      "type": "int",
      "size": 1
    },
    {
      "field": "Atendimento6",
      "label": "Atendimento6",
      "name": "Atendimento6",
      "type": "int",
      "size": 1
    },
    {
      "field": "QtdCatarata",
      "label": "QtdCatarata",
      "name": "QtdCatarata",
      "type": "int",
      "size": 2
    },
    {
      "field": "QtdPhaco",
      "label": "QtdPhaco",
      "name": "QtdPhaco",
      "type": "int",
      "size": 2
    },
    {
      "field": "TipoLios",
      "label": "TipoLios",
      "name": "TipoLios",
      "type": "string",
      "size": 50
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 50
    },
    {
      "field": "Informante",
      "label": "Informante",
      "name": "Informante",
      "type": "string",
      "size": 50
    },
    {
      "field": "CargoInformante",
      "label": "CargoInformante",
      "name": "CargoInformante",
      "type": "string",
      "size": 50
    },
    {
      "field": "DataInformacao",
      "label": "DataInformacao",
      "name": "DataInformacao",
      "type": "date",
      "size": 4
    },
    {
      "field": "fkCategoriaFinanceira",
      "label": "fkCategoriaFinanceira",
      "name": "fkCategoriaFinanceira",
      "type": "int",
      "size": 1
    },
    {
      "field": "Humor",
      "label": "Humor",
      "name": "Humor",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "EhFimdemes",
      "label": "EhFimdemes",
      "name": "EhFimdemes",
      "type": "int",
      "size": 1
    },
    {
      "field": "DataCadastro",
      "label": "DataCadastro",
      "name": "DataCadastro",
      "type": "date",
      "size": 4
    },
    {
      "field": "UsuarioCadastro",
      "label": "UsuarioCadastro",
      "name": "UsuarioCadastro",
      "type": "string",
      "size": 50
    },
    {
      "field": "ListaSDS",
      "label": "ListaSDS",
      "name": "ListaSDS",
      "type": "int",
      "size": 1
    },
    {
      "field": "fkRegiao",
      "label": "fkRegiao",
      "name": "fkRegiao",
      "type": "int",
      "size": 4
    },
    {
      "field": "LimiteFixo",
      "label": "LimiteFixo",
      "name": "LimiteFixo",
      "type": "int",
      "size": 1
    },
    {
      "field": "LimiteCreditoClass",
      "label": "LimiteCreditoClass",
      "name": "LimiteCreditoClass",
      "type": "string",
      "size": 12
    },
    {
      "field": "ConsultaSPC",
      "label": "ConsultaSPC",
      "name": "ConsultaSPC",
      "type": "date",
      "size": 4
    },
    {
      "field": "EhClienteFerrara",
      "label": "EhClienteFerrara",
      "name": "EhClienteFerrara",
      "type": "int",
      "size": 1
    },
    {
      "field": "InteresseTrnFerrara",
      "label": "InteresseTrnFerrara",
      "name": "InteresseTrnFerrara",
      "type": "int",
      "size": 1
    },
    {
      "field": "Invisivel",
      "label": "Invisivel",
      "name": "Invisivel",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "Indicar",
      "label": "Indicar",
      "name": "Indicar",
      "type": "int",
      "size": 1
    },
    {
      "field": "Protestar",
      "label": "Protestar",
      "name": "Protestar",
      "type": "int",
      "size": 1
    },
    {
      "field": "podeapagar",
      "label": "podeapagar",
      "name": "podeapagar",
      "type": "int",
      "size": 1
    },
    {
      "field": "CADASTRADOSANKHYA",
      "label": "CADASTRADOSANKHYA",
      "name": "CADASTRADOSANKHYA",
      "type": "int",
      "size": 1
    },
    {
      "field": "REVISADOSANKHYA",
      "label": "REVISADOSANKHYA",
      "name": "REVISADOSANKHYA",
      "type": "int",
      "size": 1
    },
    {
      "field": "ts",
      "label": "ts",
      "name": "ts",
      "type": "timestamp",
      "size": 8
    }
  ]
}