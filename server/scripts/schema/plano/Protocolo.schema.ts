import { TEntity } from "@er/types/*";

export const Protocolo: TEntity =
  {
  "database": "plano",
  "table": "Protocolo",
  "fields": [
    {
      "field": "CdProtocolo",
      "label": "CdProtocolo",
      "name": "Protocolo_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumPedidoAnt",
      "label": "NumPedidoAnt",
      "name": "NumPedidoAnt",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumPedidoAtu",
      "label": "NumPedidoAtu",
      "name": "NumPedidoAtu",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumMapa",
      "label": "NumMapa",
      "name": "NumMapa",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgNaoEnviado",
      "label": "FgNaoEnviado",
      "name": "FgNaoEnviado",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEnviadoErrado",
      "label": "FgEnviadoErrado",
      "name": "FgEnviadoErrado",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPedidoErrado",
      "label": "FgPedidoErrado",
      "name": "FgPedidoErrado",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTrocaDocumento",
      "label": "FgTrocaDocumento",
      "name": "FgTrocaDocumento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTrocaCheque",
      "label": "FgTrocaCheque",
      "name": "FgTrocaCheque",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCobrancaBoleto",
      "label": "FgCobrancaBoleto",
      "name": "FgCobrancaBoleto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEntregaDocumento",
      "label": "FgEntregaDocumento",
      "name": "FgEntregaDocumento",
      "type": "string",
      "size": 1
    },
    {
      "field": "Futros",
      "label": "Futros",
      "name": "Futros",
      "type": "string",
      "size": 1
    },
    {
      "field": "DescricaoOutros",
      "label": "DescricaoOutros",
      "name": "DescricaoOutros",
      "type": "string",
      "size": 255
    },
    {
      "field": "FgMedicamentoTroca",
      "label": "FgMedicamentoTroca",
      "name": "FgMedicamentoTroca",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgMedicamentoColeta",
      "label": "FgMedicamentoColeta",
      "name": "FgMedicamentoColeta",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgMedicamentoEnvio",
      "label": "FgMedicamentoEnvio",
      "name": "FgMedicamentoEnvio",
      "type": "string",
      "size": 1
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024
    },
    {
      "field": "VlCobrar",
      "label": "VlCobrar",
      "name": "VlCobrar",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SgUsuario",
      "label": "SgUsuario",
      "name": "SgUsuario",
      "type": "string",
      "size": 10
    },
    {
      "field": "DataProtocolo",
      "label": "DataProtocolo",
      "name": "DataProtocolo",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DataAtualizacao",
      "label": "DataAtualizacao",
      "name": "DataAtualizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgExclusao",
      "label": "FgExclusao",
      "name": "FgExclusao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgStatus",
      "label": "FgStatus",
      "name": "FgStatus",
      "type": "string",
      "size": 1
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 120
    },
    {
      "field": "HrExecucaoFinal",
      "label": "HrExecucaoFinal",
      "name": "HrExecucaoFinal",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DataExecucao",
      "label": "DataExecucao",
      "name": "DataExecucao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    }
  ]
}
