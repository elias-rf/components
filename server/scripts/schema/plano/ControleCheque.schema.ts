import { TTableDef } from "@/types/model";

export const ControleCheque: TTableDef = {
  database: "plano",
  table: "ControleCheque",
  fields: [
    {
      field: "CdControleCheque",
      label: "CdControleCheque",
      name: "ControleCheque_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NrConta",
      label: "NrConta",
      name: "NrConta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NrCheque",
      label: "NrCheque",
      name: "NrCheque",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmEmitente",
      label: "NmEmitente",
      name: "NmEmitente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdStatus",
      label: "CdStatus",
      name: "CdStatus",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Numdoc",
      label: "Numdoc",
      name: "Numdoc",
      typeField: "int",
    },
    {
      field: "SeqDoc",
      label: "SeqDoc",
      name: "SeqDoc",
      typeField: "int",
    },
  ],
};
