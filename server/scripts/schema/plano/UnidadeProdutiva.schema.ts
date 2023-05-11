import { TTableDef } from "@/types/model";

export const UnidadeProdutiva: TTableDef = {
  database: "plano",
  table: "UnidadeProdutiva",
  fields: [
    {
      field: "Identificacao",
      label: "Identificacao",
      name: "UnidadeProdutiva_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CustoLaboratorio",
      label: "CustoLaboratorio",
      name: "CustoLaboratorio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CustoTelemarketing",
      label: "CustoTelemarketing",
      name: "CustoTelemarketing",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CustoBalcao",
      label: "CustoBalcao",
      name: "CustoBalcao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CustoControleQualidade",
      label: "CustoControleQualidade",
      name: "CustoControleQualidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CustoExpedicao",
      label: "CustoExpedicao",
      name: "CustoExpedicao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
