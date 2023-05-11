import { TTableDef } from "@/types/model";

export const NotaConcessionariaMestre: TTableDef = {
  database: "plano",
  table: "NotaConcessionariaMestre",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

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
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",

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
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",

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
      field: "DtOperacao",
      label: "DtOperacao",
      name: "DtOperacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdClasseConsumo",
      label: "CdClasseConsumo",
      name: "CdClasseConsumo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdTipoLigacao",
      label: "CdTipoLigacao",
      name: "CdTipoLigacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdGrupoTensao",
      label: "CdGrupoTensao",
      name: "CdGrupoTensao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdInfComplementar",
      label: "CdInfComplementar",
      name: "CdInfComplementar",
      typeField: "string",

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
      field: "VlConsumido",
      label: "VlConsumido",
      name: "VlConsumido",
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
      field: "VlTerceiros",
      label: "VlTerceiros",
      name: "VlTerceiros",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDespesaAcessoria",
      label: "VlDespesaAcessoria",
      name: "VlDespesaAcessoria",
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
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
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
      field: "VlBaseCalculoCOFINS",
      label: "VlBaseCalculoCOFINS",
      name: "VlBaseCalculoCOFINS",
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
  ],
};
