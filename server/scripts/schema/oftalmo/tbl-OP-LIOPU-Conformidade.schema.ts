import { TTableDef } from "@/types/model";

export const tbl_OP_LIOPU_Conformidade: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_LIOPU_Conformidade",
  fields: [
    {
      field: "kOpLIOConformidade",
      label: "kOpLIOConformidade",
      name: "tbl_OP_LIOPU_Conformidade_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpLIO",
      label: "fkOpLIO",
      name: "fkOpLIO",
      typeField: "int",

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
