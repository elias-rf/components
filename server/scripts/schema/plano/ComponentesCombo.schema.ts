import { TTable } from "../../../../types";

export const ComponentesCombo: TTable = {
  database: "plano",
  table: "ComponentesCombo",
  fields: [
    {
      field: "CdKit",
      label: "CdKit",
      name: "ComponentesCombo_id",
      type: "string",
      size: 18,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "QtdeMinimaCombo",
      label: "QtdeMinimaCombo",
      name: "QtdeMinimaCombo",
      type: "int",
      size: 5,
      scale: 5,
      allowNull: false,
    },
    {
      field: "QtdeMaximaCombo",
      label: "QtdeMaximaCombo",
      name: "QtdeMaximaCombo",
      type: "int",
      size: 5,
      scale: 5,
      allowNull: false,
    },
    {
      field: "VlUnitarioCombo",
      label: "VlUnitarioCombo",
      name: "VlUnitarioCombo",
      type: "int",
      size: 9,
      scale: 5,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
