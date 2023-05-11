import { TTableDef } from "@/types/model";

export const Protocolo: TTableDef = {
  database: "plano",
  table: "Protocolo",
  fields: [
    {
      field: "CdProtocolo",
      label: "CdProtocolo",
      name: "Protocolo_id",
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
      field: "NumPedidoAnt",
      label: "NumPedidoAnt",
      name: "NumPedidoAnt",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumPedidoAtu",
      label: "NumPedidoAtu",
      name: "NumPedidoAtu",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgNaoEnviado",
      label: "FgNaoEnviado",
      name: "FgNaoEnviado",
      typeField: "string",
    },
    {
      field: "FgEnviadoErrado",
      label: "FgEnviadoErrado",
      name: "FgEnviadoErrado",
      typeField: "string",
    },
    {
      field: "FgPedidoErrado",
      label: "FgPedidoErrado",
      name: "FgPedidoErrado",
      typeField: "string",
    },
    {
      field: "FgTrocaDocumento",
      label: "FgTrocaDocumento",
      name: "FgTrocaDocumento",
      typeField: "string",
    },
    {
      field: "FgTrocaCheque",
      label: "FgTrocaCheque",
      name: "FgTrocaCheque",
      typeField: "string",
    },
    {
      field: "FgCobrancaBoleto",
      label: "FgCobrancaBoleto",
      name: "FgCobrancaBoleto",
      typeField: "string",
    },
    {
      field: "FgEntregaDocumento",
      label: "FgEntregaDocumento",
      name: "FgEntregaDocumento",
      typeField: "string",
    },
    {
      field: "Futros",
      label: "Futros",
      name: "Futros",
      typeField: "string",
    },
    {
      field: "DescricaoOutros",
      label: "DescricaoOutros",
      name: "DescricaoOutros",
      typeField: "string",
    },
    {
      field: "FgMedicamentoTroca",
      label: "FgMedicamentoTroca",
      name: "FgMedicamentoTroca",
      typeField: "string",
    },
    {
      field: "FgMedicamentoColeta",
      label: "FgMedicamentoColeta",
      name: "FgMedicamentoColeta",
      typeField: "string",
    },
    {
      field: "FgMedicamentoEnvio",
      label: "FgMedicamentoEnvio",
      name: "FgMedicamentoEnvio",
      typeField: "string",
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
    {
      field: "VlCobrar",
      label: "VlCobrar",
      name: "VlCobrar",
      typeField: "float",

      scale: 4,
    },
    {
      field: "SgUsuario",
      label: "SgUsuario",
      name: "SgUsuario",
      typeField: "string",
    },
    {
      field: "DataProtocolo",
      label: "DataProtocolo",
      name: "DataProtocolo",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DataAtualizacao",
      label: "DataAtualizacao",
      name: "DataAtualizacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgExclusao",
      label: "FgExclusao",
      name: "FgExclusao",
      typeField: "string",
    },
    {
      field: "FgStatus",
      label: "FgStatus",
      name: "FgStatus",
      typeField: "string",
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
    },
    {
      field: "HrExecucaoFinal",
      label: "HrExecucaoFinal",
      name: "HrExecucaoFinal",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DataExecucao",
      label: "DataExecucao",
      name: "DataExecucao",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
