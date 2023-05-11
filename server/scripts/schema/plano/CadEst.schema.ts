import { TTableDef } from "@/types/model";

export const CadEst: TTableDef = {
  database: "plano",
  table: "CadEst",
  fields: [
    {
      field: "Uf",
      label: "Uf",
      name: "CadEst_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmEstado",
      label: "NmEstado",
      name: "NmEstado",
      typeField: "string",
    },
    {
      field: "DescontoSub",
      label: "DescontoSub",
      name: "DescontoSub",
      typeField: "float",

      scale: 4,
    },
    {
      field: "MargemSub",
      label: "MargemSub",
      name: "MargemSub",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseCalculo",
      label: "BaseCalculo",
      name: "BaseCalculo",
      typeField: "string",
    },
    {
      field: "BaseReducao",
      label: "BaseReducao",
      name: "BaseReducao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "MargemSubPositivo",
      label: "MargemSubPositivo",
      name: "MargemSubPositivo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseReducaoPositivo",
      label: "BaseReducaoPositivo",
      name: "BaseReducaoPositivo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "MargemSubNegativo",
      label: "MargemSubNegativo",
      name: "MargemSubNegativo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseReducaoNegativo",
      label: "BaseReducaoNegativo",
      name: "BaseReducaoNegativo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercSubstituicaoTributaria",
      label: "PercSubstituicaoTributaria",
      name: "PercSubstituicaoTributaria",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliqSubstituicao",
      label: "AliqSubstituicao",
      name: "AliqSubstituicao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdIBGE",
      label: "CdIBGE",
      name: "CdIBGE",
      typeField: "int",
    },
    {
      field: "PercCombatePobreza",
      label: "PercCombatePobreza",
      name: "PercCombatePobreza",
      typeField: "float",

      scale: 4,
    },
  ],
};
