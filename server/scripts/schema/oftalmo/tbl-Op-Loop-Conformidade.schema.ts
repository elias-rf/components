import { TTableDef } from "@/types/model";

export const tbl_Op_Loop_Conformidade: TTableDef = {
  database: "oftalmo",
  table: "tbl_Op_Loop_Conformidade",
  fields: [
    {
      field: "kOpLoopConformidade",
      label: "kOpLoopConformidade",
      name: "tbl_Op_Loop_Conformidade_id",
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
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
    },
    {
      field: "Conformidade",
      label: "Conformidade",
      name: "Conformidade",
      typeField: "string",
    },
    {
      field: "Analise",
      label: "Analise",
      name: "Analise",
      typeField: "string",
    },
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Disposicao",
      label: "Disposicao",
      name: "Disposicao",
      typeField: "string",
    },
    {
      field: "ConformidadeAntigo",
      label: "ConformidadeAntigo",
      name: "ConformidadeAntigo",
      typeField: "string",
    },
    {
      field: "DisposicaoAntigo",
      label: "DisposicaoAntigo",
      name: "DisposicaoAntigo",
      typeField: "string",
    },
  ],
};
