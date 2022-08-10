import { connections } from "../connections.mjs";
import { upsert } from "../upsert.mjs";

await upsert(connections.oftalmo, "tOrdemProducao", "kOp", [
  "kOP",
  "fkTipoOP",
  "DataEmissao",
  "DataFechamento",
  "Travado",
  "fkOPPai",
  "LoteFabricante",
  "NomeUsuario",
  "fkProdutoItem",
  "Quantidade",
  "QtdEmProcesso",
  "fkLoteEstExt",
  "fkLoteEstInt",
  "QtdEstExt_tmp",
  "Obs",
  "Expiracao",
  "fkOpMestre",
  "emProcesso",
  "fkOperacaoEmProcesso",
  "loteTamboreamento",
]);
