import { TTableDef } from "@/types/model";

export const ContratoAluguelItem: TTableDef = {
  database: "plano",
  table: "ContratoAluguelItem",
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
      field: "DiaContr",
      label: "DiaContr",
      name: "DiaContr",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Localizacao",
      label: "Localizacao",
      name: "Localizacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",

      allowNull: false,
    },
  ],
};
