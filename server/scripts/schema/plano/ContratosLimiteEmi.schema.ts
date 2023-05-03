import { TTableDef } from "@/types/model";

export const ContratosLimiteEmi: TTableDef = {
  database: "plano",
  table: "ContratosLimiteEmi",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DiaContr",
      label: "DiaContr",
      name: "DiaContr",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DataLimite",
      label: "DataLimite",
      name: "DataLimite",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
