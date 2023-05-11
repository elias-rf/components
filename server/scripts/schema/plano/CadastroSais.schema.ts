import { TTableDef } from "@/types/model";

export const CadastroSais: TTableDef = {
  database: "plano",
  table: "CadastroSais",
  fields: [
    {
      field: "CdSal",
      label: "CdSal",
      name: "CadastroSais_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSal",
      label: "NmSal",
      name: "NmSal",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AbreviaturaSal",
      label: "AbreviaturaSal",
      name: "AbreviaturaSal",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DoseMinima",
      label: "DoseMinima",
      name: "DoseMinima",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "DoseMaxima",
      label: "DoseMaxima",
      name: "DoseMaxima",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "Volume",
      label: "Volume",
      name: "Volume",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "FgControlado",
      label: "FgControlado",
      name: "FgControlado",
      typeField: "string",

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
