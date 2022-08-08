import { connections } from "../connections.mjs";
import { copy } from "../copy.mjs";

await copy(connections.oftalmo, "tOrdemProducao", "kOp", [
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
  "fkLoteEstInt",
  "QtdEstExt_tmp",
  "Obs",
  "Expiracao",
  "fkOpMestre",
  "emProcesso",
  "fkOperacaoEmProcesso",
  "loteTamboreamento",
]);
