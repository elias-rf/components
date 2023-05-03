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
      size: 2,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdServico",
      label: "CdServico",
      name: "CdServico",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NopItem",
      label: "NopItem",
      name: "NopItem",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescItem",
      label: "VlDescItem",
      name: "VlDescItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLiquidoUnit",
      label: "VlLiquidoUnit",
      name: "VlLiquidoUnit",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Origem",
      label: "Origem",
      name: "Origem",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdCSTICMS",
      label: "CdCSTICMS",
      name: "CdCSTICMS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdCSTPIS",
      label: "CdCSTPIS",
      name: "CdCSTPIS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdCSTCOFINS",
      label: "CdCSTCOFINS",
      name: "CdCSTCOFINS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "ICMSBasCalc",
      label: "ICMSBasCalc",
      name: "ICMSBasCalc",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIcms",
      label: "VlIcms",
      name: "VlIcms",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PISBasCalc",
      label: "PISBasCalc",
      name: "PISBasCalc",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CofinsBasCalc",
      label: "CofinsBasCalc",
      name: "CofinsBasCalc",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCofins",
      label: "AliquotaCofins",
      name: "AliquotaCofins",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCofins",
      label: "VlCofins",
      name: "VlCofins",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Classif",
      label: "Classif",
      name: "Classif",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoTributacao",
      label: "TipoTributacao",
      name: "TipoTributacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "PlanoContaSped",
      label: "PlanoContaSped",
      name: "PlanoContaSped",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
