import { TEntity } from "../../../../types";

export const tbl_OP_Loop_Tamboreamento: TEntity = {
  database: "oftalmo",
  table: "tbl_OP_Loop_Tamboreamento",
  fields: [
    {
      field: "kOpLoopTamboreamento",
      label: "kOpLoopTamboreamento",
      name: "tbl_OP_Loop_Tamboreamento_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpLoop",
      label: "fkOpLoop",
      name: "fkOpLoop",
      type: "string",
      size: 8,
      allowNull: false,
    },
    {
      field: "DataHoraInicial",
      label: "DataHoraInicial",
      name: "DataHoraInicial",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DataHoraFinal",
      label: "DataHoraFinal",
      name: "DataHoraFinal",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Tempo",
      label: "Tempo",
      name: "Tempo",
      type: "int",
      size: 4,
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "fkFuncionario",
      type: "int",
      size: 4,
    },
    {
      field: "DataTamboreamento",
      label: "DataTamboreamento",
      name: "DataTamboreamento",
      type: "date",
      size: 4,
    },
  ],
};
