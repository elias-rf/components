import { TTableDef } from "../../../../types/model";

export const tbl_OP_LIO_Conformidade: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_LIO_Conformidade",
  fields: [
    {
      field: "kOpLIOConformidade",
      label: "kOpLIOConformidade",
      name: "tbl_OP_LIO_Conformidade_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpLIO",
      label: "fkOpLIO",
      name: "fkOpLIO",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 4,
    },
    {
      field: "Conformidade",
      label: "Conformidade",
      name: "Conformidade",
      typeField: "string",
      size: 100,
    },
    {
      field: "Analise",
      label: "Analise",
      name: "Analise",
      typeField: "string",
      size: 100,
    },
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Disposicao",
      label: "Disposicao",
      name: "Disposicao",
      typeField: "string",
      size: 100,
    },
    {
      field: "ConformidadeAntigo",
      label: "ConformidadeAntigo",
      name: "ConformidadeAntigo",
      typeField: "string",
      size: 100,
    },
    {
      field: "DisposicaoAntigo",
      label: "DisposicaoAntigo",
      name: "DisposicaoAntigo",
      typeField: "string",
      size: 100,
    },
  ],
};
