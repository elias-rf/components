import { TTableDef } from "@/types/model";

export const ECFDocumentoNaoFiscal: TTableDef = {
  database: "plano",
  table: "ECFDocumentoNaoFiscal",
  fields: [
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoDoc",
      label: "TipoDoc",
      name: "TipoDoc",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumGNF",
      label: "NumGNF",
      name: "NumGNF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumGRG",
      label: "NumGRG",
      name: "NumGRG",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "numCDC",
      label: "numCDC",
      name: "numCDC",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrEmissao",
      label: "HrEmissao",
      name: "HrEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "ControleSerie",
      label: "ControleSerie",
      name: "ControleSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ControleCOO",
      label: "ControleCOO",
      name: "ControleCOO",
      typeField: "int",

      allowNull: false,
    },
  ],
};
