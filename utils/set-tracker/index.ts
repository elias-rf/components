import { difference } from "@/utils/array/difference";
import { RawQuery, Tracker } from "knex-mock-client";
import { cidadeQuery } from "./cidade.query";
import { clienteQuery } from "./cliente.query";
import { diamanteQuery } from "./diamante.query";
import { esterilizacaoExternaQuery } from "./esterilizacao_externa.query";
import { estoqueQuery } from "./estoque.query";
import { groupSubjectQuery } from "./group_subject.query";
import { nfEntradaQuery } from "./nf_entrada.query";
import { nfEntradaControleQuery } from "./nf_entrada_controle.query";
import { nfEntradaItemQuery } from "./nf_entrada_item.query";
import { nfEntradaLogQuery } from "./nf_entrada_log.query";
import { nfSaidaQuery } from "./nf_saida.query";
import { ordemProducaoQuery } from "./ordem_producao.query";
import { ordemProducaoOperacaoQuery } from "./ordem_producao_operacao.query";
import { phonebookQuery } from "./phoneboook.query";
import { produtoQuery } from "./produto.query";
import { produtoControleQuery } from "./produto_controle.query";
import { produtoEstatisticaQuery } from "./produto_estatistica.query";
import { produtoItemQuery } from "./produto_item.query";
import { produtoPlanoQuery } from "./produto_plano.query";
import { usuarioQuery } from "./usuario.query";

const db: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  ...cidadeQuery,
  ...clienteQuery,
  ...diamanteQuery,
  ...esterilizacaoExternaQuery,
  ...estoqueQuery,
  ...groupSubjectQuery,
  ...nfEntradaControleQuery,
  ...nfEntradaItemQuery,
  ...nfEntradaLogQuery,
  ...nfEntradaQuery,
  ...nfSaidaQuery,
  ...ordemProducaoOperacaoQuery,
  ...ordemProducaoQuery,
  ...phonebookQuery,
  ...produtoControleQuery,
  ...produtoEstatisticaQuery,
  ...produtoItemQuery,
  ...produtoPlanoQuery,
  ...produtoQuery,
  ...usuarioQuery,
];

function search({ method, sql, bindings }: RawQuery) {
  const rsp = db.find((qry) => {
    const m = qry.method.includes(method);
    const b = difference(qry.bindings || [], bindings).length === 0;
    const s = sql.includes(qry.sql);
    return m && b && s;
  });
  if (rsp === undefined) {
    console.log("🟡", method, "\n", "🟡", bindings, "\n", "🟡", sql);
  } else {
    // console.log(
    //   "🟢",
    //   method,
    //   "\n",
    //   "🟢",
    //   bindings,
    //   "\n",
    //   "🟢",
    //   sql,
    //   "\n",
    //   "🟢",
    //   rsp
    // );
  }
  return rsp;
}

/**
 * Mock para knex com respostas pré estabelecidas
 **/
export function setTracker(tracker: Tracker) {
  tracker.on
    .any((rawQuery: RawQuery) => search(rawQuery) !== undefined)
    .response((rawQuery: RawQuery) => search(rawQuery)?.response);
}
