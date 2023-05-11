import { TTableDef } from "@/types/model";

export const ComponentesCombo: TTableDef = {
  database: "plano",
  table: "ComponentesCombo",
  fields: [
    {
      field: "CdKit",
      label: "CdKit",
      name: "ComponentesCombo_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "QtdeMinimaCombo",
      label: "QtdeMinimaCombo",
      name: "QtdeMinimaCombo",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
    {
      field: "QtdeMaximaCombo",
      label: "QtdeMaximaCombo",
      name: "QtdeMaximaCombo",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
    {
      field: "VlUnitarioCombo",
      label: "VlUnitarioCombo",
      name: "VlUnitarioCombo",
      typeField: "int",

      scale: 5,
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
