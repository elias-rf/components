import { connections } from "../connections.mjs";
import { upsert } from "../upsert.mjs";

await upsert(connections.plano, "diamante", "id", [
  "CdFilial",
  "NumNota",
  "Serie",
  "Modelo",
  "DtEmissao",
  "DtSaida",
  "Tipo",
  "CdCliente",
  "CdVendedor",
  "FgEstatistica",
  "FgEstoque",
  "VlTotal",
  "VlProdutos",
  "VlFrete",
  "NumPedido",
  "Nop",
]);
