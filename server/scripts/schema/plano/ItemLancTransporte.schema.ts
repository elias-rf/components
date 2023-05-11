import { TTableDef } from "@/types/model";

export const ItemLancTransporte: TTableDef = {
  database: "plano",
  table: "ItemLancTransporte",
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
      field: "CdServico",
      label: "CdServico",
      name: "CdServico",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NopItem",
      label: "NopItem",
      name: "NopItem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescItem",
      label: "VlDescItem",
      name: "VlDescItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLiquidoUnit",
      label: "VlLiquidoUnit",
      name: "VlLiquidoUnit",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Origem",
      label: "Origem",
      name: "Origem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCSTICMS",
      label: "CdCSTICMS",
      name: "CdCSTICMS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCSTPIS",
      label: "CdCSTPIS",
      name: "CdCSTPIS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCSTCOFINS",
      label: "CdCSTCOFINS",
      name: "CdCSTCOFINS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ICMSBasCalc",
      label: "ICMSBasCalc",
      name: "ICMSBasCalc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIcms",
      label: "VlIcms",
      name: "VlIcms",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PISBasCalc",
      label: "PISBasCalc",
      name: "PISBasCalc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
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
      field: "CofinsBasCalc",
      label: "CofinsBasCalc",
      name: "CofinsBasCalc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCofins",
      label: "AliquotaCofins",
      name: "AliquotaCofins",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCofins",
      label: "VlCofins",
      name: "VlCofins",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Classif",
      label: "Classif",
      name: "Classif",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoTributacao",
      label: "TipoTributacao",
      name: "TipoTributacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PlanoContaSped",
      label: "PlanoContaSped",
      name: "PlanoContaSped",
      typeField: "float",

      scale: 4,
    },
  ],
};
