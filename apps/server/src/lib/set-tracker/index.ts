import { difference } from "@er/utils/src/difference";
import { RawQuery, Tracker } from "knex-mock-client";
import { cidadeQuery } from "./cidade.query";
import { clienteQuery } from "./cliente.query";
import { diamanteQuery } from "./diamante.query";
import { esterilizacaoExternaQuery } from "./esterilizacao-externa.query";
import { estoqueQuery } from "./estoque.query";
import { groupSubjectQuery } from "./group-subject.query";
import { nfEntradaControleQuery } from "./nf-entrada-controle.query";
import { nfEntradaItemQuery } from "./nf-entrada-item.query";
import { nfEntradaLogQuery } from "./nf-entrada-log.query";
import { nfEntradaQuery } from "./nf-entrada.query";
import { nfSaidaQuery } from "./nf-saida.query";
import { ordemProducaoOperacaoQuery } from "./ordem-producao-operacao.query";
import { ordemProducaoQuery } from "./ordem-producao.query";
import { phonebookQuery } from "./phoneboook.query";
import { produtoControleQuery } from "./produto-controle.query";
import { produtoEstatisticaQuery } from "./produto-estatistica.query";
import { produtoItemQuery } from "./produto-item.query";
import { produtoPlanoQuery } from "./produto-plano.query";
import { produtoQuery } from "./produto.query";
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

export function setTracker(tracker: Tracker) {
  tracker.on
    .any((rawQuery: RawQuery) => search(rawQuery) !== undefined)
    .response((rawQuery: RawQuery) => search(rawQuery)?.response);
}
