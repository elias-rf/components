import { TTableDef } from "@mono/types/model";

export const CadCliEqptos: TTableDef = {
  database: "plano",
  table: "CadCliEqptos",
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
      field: "CdMarcaEqpto",
      label: "CdMarcaEqpto",
      name: "CdMarcaEqpto",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdModeloEqpto",
      label: "CdModeloEqpto",
      name: "CdModeloEqpto",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
