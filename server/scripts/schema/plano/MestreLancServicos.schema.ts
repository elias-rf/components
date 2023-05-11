import { TTableDef } from "@/types/model";

export const MestreLancServicos: TTableDef = {
  database: "plano",
  table: "MestreLancServicos",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SubSerie",
      label: "SubSerie",
      name: "SubSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtEntrada",
      label: "DtEntrada",
      name: "DtEntrada",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlDocumento",
      label: "VlDocumento",
      name: "VlDocumento",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlServico",
      label: "VlServico",
      name: "VlServico",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTerceiros",
      label: "VlTerceiros",
      name: "VlTerceiros",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDespesas",
      label: "VlDespesas",
      name: "VlDespesas",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMSST",
      label: "VlBaseCalculoICMSST",
      name: "VlBaseCalculoICMSST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSST",
      label: "VlICMSST",
      name: "VlICMSST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlNaoTributado",
      label: "VlNaoTributado",
      name: "VlNaoTributado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCOFINS",
      label: "VlCOFINS",
      name: "VlCOFINS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdLigacao",
      label: "CdLigacao",
      name: "CdLigacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdTensao",
      label: "CdTensao",
      name: "CdTensao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SituacaoDoc",
      label: "SituacaoDoc",
      name: "SituacaoDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoServico",
      label: "TipoServico",
      name: "TipoServico",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdClasse",
      label: "CdClasse",
      name: "CdClasse",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdAssinante",
      label: "CdAssinante",
      name: "CdAssinante",
      typeField: "int",

      allowNull: false,
    },
  ],
};
