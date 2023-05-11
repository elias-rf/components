import { TTableDef } from "@/types/model";

export const ECFIdentificacaoPAFECF: TTableDef = {
  database: "plano",
  table: "ECFIdentificacaoPAFECF",
  fields: [
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "ECFIdentificacaoPAFECF_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MFAdicional",
      label: "MFAdicional",
      name: "MFAdicional",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoECF",
      label: "TipoECF",
      name: "TipoECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MarcaECF",
      label: "MarcaECF",
      name: "MarcaECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloECF",
      label: "ModeloECF",
      name: "ModeloECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VersaoSB",
      label: "VersaoSB",
      name: "VersaoSB",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtInstalacaoSB",
      label: "DtInstalacaoSB",
      name: "DtInstalacaoSB",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrInstalacaoSB",
      label: "HrInstalacaoSB",
      name: "HrInstalacaoSB",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumSequencialECF",
      label: "NumSequencialECF",
      name: "NumSequencialECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CNPJUsuario",
      label: "CNPJUsuario",
      name: "CNPJUsuario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "IEUsuario",
      label: "IEUsuario",
      name: "IEUsuario",
      typeField: "string",

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
      field: "DtUltAlteracaoEstoque",
      label: "DtUltAlteracaoEstoque",
      name: "DtUltAlteracaoEstoque",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "ControleSerie",
      label: "ControleSerie",
      name: "ControleSerie",
      typeField: "string",
    },
  ],
};
