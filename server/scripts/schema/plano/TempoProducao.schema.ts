import { TTableDef } from "@/types/model";

export const TempoProducao: TTableDef = {
  database: "plano",
  table: "TempoProducao",
  fields: [
    {
      field: "NumItens",
      label: "NumItens",
      name: "TempoProducao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumCapsulas",
      label: "NumCapsulas",
      name: "NumCapsulas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TempoLaboratorio",
      label: "TempoLaboratorio",
      name: "TempoLaboratorio",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TempoTelemarketing",
      label: "TempoTelemarketing",
      name: "TempoTelemarketing",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TempoBalcao",
      label: "TempoBalcao",
      name: "TempoBalcao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TempoControleQualidade",
      label: "TempoControleQualidade",
      name: "TempoControleQualidade",
      typeField: "int",

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
