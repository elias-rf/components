import { TTableDef } from "../../../../types/model";

export const Protocolo: TTableDef = {
  database: "plano",
  table: "Protocolo",
  fields: [
    {
      field: "CdProtocolo",
      label: "CdProtocolo",
      name: "Protocolo_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedidoAnt",
      label: "NumPedidoAnt",
      name: "NumPedidoAnt",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumPedidoAtu",
      label: "NumPedidoAtu",
      name: "NumPedidoAtu",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgNaoEnviado",
      label: "FgNaoEnviado",
      name: "FgNaoEnviado",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgEnviadoErrado",
      label: "FgEnviadoErrado",
      name: "FgEnviadoErrado",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgPedidoErrado",
      label: "FgPedidoErrado",
      name: "FgPedidoErrado",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgTrocaDocumento",
      label: "FgTrocaDocumento",
      name: "FgTrocaDocumento",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgTrocaCheque",
      label: "FgTrocaCheque",
      name: "FgTrocaCheque",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgCobrancaBoleto",
      label: "FgCobrancaBoleto",
      name: "FgCobrancaBoleto",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgEntregaDocumento",
      label: "FgEntregaDocumento",
      name: "FgEntregaDocumento",
      typeField: "string",
      size: 1,
    },
    {
      field: "Futros",
      label: "Futros",
      name: "Futros",
      typeField: "string",
      size: 1,
    },
    {
      field: "DescricaoOutros",
      label: "DescricaoOutros",
      name: "DescricaoOutros",
      typeField: "string",
      size: 255,
    },
    {
      field: "FgMedicamentoTroca",
      label: "FgMedicamentoTroca",
      name: "FgMedicamentoTroca",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgMedicamentoColeta",
      label: "FgMedicamentoColeta",
      name: "FgMedicamentoColeta",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgMedicamentoEnvio",
      label: "FgMedicamentoEnvio",
      name: "FgMedicamentoEnvio",
      typeField: "string",
      size: 1,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 1024,
    },
    {
      field: "VlCobrar",
      label: "VlCobrar",
      name: "VlCobrar",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SgUsuario",
      label: "SgUsuario",
      name: "SgUsuario",
      typeField: "string",
      size: 10,
    },
    {
      field: "DataProtocolo",
      label: "DataProtocolo",
      name: "DataProtocolo",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DataAtualizacao",
      label: "DataAtualizacao",
      name: "DataAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgExclusao",
      label: "FgExclusao",
      name: "FgExclusao",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgStatus",
      label: "FgStatus",
      name: "FgStatus",
      typeField: "string",
      size: 1,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
      size: 120,
    },
    {
      field: "HrExecucaoFinal",
      label: "HrExecucaoFinal",
      name: "HrExecucaoFinal",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DataExecucao",
      label: "DataExecucao",
      name: "DataExecucao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
