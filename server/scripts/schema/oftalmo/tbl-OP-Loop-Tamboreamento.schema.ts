import { TTableDef } from "@/types/model";

export const tbl_OP_Loop_Tamboreamento: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Loop_Tamboreamento",
  fields: [
    {
      field: "kOpLoopTamboreamento",
      label: "kOpLoopTamboreamento",
      name: "tbl_OP_Loop_Tamboreamento_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpLoop",
      label: "fkOpLoop",
      name: "fkOpLoop",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DataHoraInicial",
      label: "DataHoraInicial",
      name: "DataHoraInicial",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DataHoraFinal",
      label: "DataHoraFinal",
      name: "DataHoraFinal",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Tempo",
      label: "Tempo",
      name: "Tempo",
      typeField: "int",
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "fkFuncionario",
      typeField: "int",
    },
    {
      field: "DataTamboreamento",
      label: "DataTamboreamento",
      name: "DataTamboreamento",
      typeField: "date",
    },
  ],
};
