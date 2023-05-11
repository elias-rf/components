import { TTableDef } from "@/types/model";

export const CadCliEqptos: TTableDef = {
  database: "plano",
  table: "CadCliEqptos",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdMarcaEqpto",
      label: "CdMarcaEqpto",
      name: "CdMarcaEqpto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdModeloEqpto",
      label: "CdModeloEqpto",
      name: "CdModeloEqpto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",

      allowNull: false,
    },
  ],
};
