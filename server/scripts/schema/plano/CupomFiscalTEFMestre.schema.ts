import { TTableDef } from "../../../../types/model";

export const CupomFiscalTEFMestre: TTableDef = {
  database: "plano",
  table: "CupomFiscalTEFMestre",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "float",
      size: 8,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrEmissao",
      label: "HrEmissao",
      name: "HrEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "TipoCartao",
      label: "TipoCartao",
      name: "TipoCartao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "CdAdminitradora",
      label: "CdAdminitradora",
      name: "CdAdminitradora",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "VlRecebimento",
      label: "VlRecebimento",
      name: "VlRecebimento",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeParcelas",
      label: "QtdeParcelas",
      name: "QtdeParcelas",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Fase",
      label: "Fase",
      name: "Fase",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
  ],
};
