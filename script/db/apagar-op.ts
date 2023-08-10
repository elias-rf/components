import { source } from "./source";

async function delNaoConforme(lista: { kOperacaoOp: string }[]) {
  for (const item of lista) {
    const resp = await source("tNaoConformidadeOperacaoProducao")
      .where("fkOperacaoOP", item.kOperacaoOp)
      .del();
    console.log(item, resp);
  }
}

async function listOP() {
  const operacaoProducao = await source("tOperacaoOrdemProducaoOld")
    .select(["kOperacaoOP"])
    .limit(10);
  // delete tNaoConformidadeOperacaoProducao where fkOperacaoOP in (select kOperacaoOP from tOperacaoOrdemProducaoOld);
  return operacaoProducao;
}

async function main() {
  const lista = await listOP(); // (, );
  await delNaoConforme(lista);
  process.exit(0);
}

main();
