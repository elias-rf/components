import { TTableDef } from "@/types/model";

export const CupomFiscalTEFMestre: TTableDef = {
  database: "plano",
  table: "CupomFiscalTEFMestre",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

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
      field: "TipoCartao",
      label: "TipoCartao",
      name: "TipoCartao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdAdminitradora",
      label: "CdAdminitradora",
      name: "CdAdminitradora",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlRecebimento",
      label: "VlRecebimento",
      name: "VlRecebimento",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeParcelas",
      label: "QtdeParcelas",
      name: "QtdeParcelas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Fase",
      label: "Fase",
      name: "Fase",
      typeField: "string",

      allowNull: false,
    },
  ],
};
