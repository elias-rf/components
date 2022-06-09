import createError from "http-errors";
import { CurrentUser } from "../..";
import knexOftalmo from "../dal/oftalmo.connection";

export async function diario(
  {
    operacao,
    inicio,
    fim,
  }: {
    operacao: string;
    inicio: string;
    fim: string;
  },
  { currentUser }: { currentUser: CurrentUser }
) {
  if (!inicio) throw new createError.BadRequest("Início não informado");
  if (!fim) throw new createError.BadRequest("Fim não informado");
  if (!operacao) throw new createError.BadRequest("Operação não informada");
  const qry = await knexOftalmo("tOperacaoOrdemProducao")
    .select(
      knexOftalmo.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
    )
    .orderBy("DataInicio", "desc")
    .groupBy("DataInicio")
    .where({ fkOperacao: operacao })
    .whereBetween("DataInicio", [inicio, fim]);
  return qry;
}

export async function mensal(
  {
    operacao,
    mes,
  }: {
    operacao: string;
    mes: string;
  },
  { currentUser }: { currentUser: CurrentUser }
) {
  if (!mes) throw new createError.BadRequest("Mês não informado");
  if (!operacao) throw new createError.BadRequest("Operação não informada");
  const qry = await knexOftalmo("tOperacaoOrdemProducao")
    .select(
      knexOftalmo.raw(
        "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
      )
    )
    .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
    .groupBy(knexOftalmo.raw("CONVERT(CHAR(7),[DataInicio],120)"))
    .having(knexOftalmo.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
    .where({ fkOperacao: operacao });
  return qry;
}

export async function modelo(
  {
    data,
    operacao,
    produto,
  }: {
    data: string;
    operacao: string;
    produto: string;
  },
  { currentUser }: { currentUser: CurrentUser }
) {
  if (!data) throw new createError.BadRequest("Data não informada");
  if (!operacao) throw new createError.BadRequest("Operação não informada");
  if (!produto) throw new createError.BadRequest("Produto não informado");

  const qry = await knexOftalmo(
    knexOftalmo.raw(
      "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
    )
  )
    .select(
      knexOftalmo.raw(
        "tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
      )
    )
    .groupBy(
      knexOftalmo.raw(
        "tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria"
      )
    )
    .where({
      fkOperacao: operacao,
      DataInicio: data,
      fkCategoria: produto,
    });
  return qry;
}

export async function produto(
  {
    operacao,
    data,
  }: {
    operacao: string;
    data: string;
  },
  { currentUser }: { currentUser: CurrentUser }
) {
  if (!data) throw new createError.BadRequest("Data não informada");
  if (!operacao) throw new createError.BadRequest("Operação não informada");

  const qry = await knexOftalmo(
    knexOftalmo.raw(
      "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
    )
  )
    .select(
      knexOftalmo.raw(
        "tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
      )
    )
    .orderBy("tbl_Produto.fkCategoria", "asc")
    .groupBy(["tbl_Produto.fkCategoria", "tOperacaoOrdemProducao.DataInicio"])
    .where({ fkOperacao: operacao, DataInicio: data });
  return qry;
}

export async function turno(
  {
    operacao,
    data,
  }: {
    operacao: string;
    data: string;
  },
  { currentUser }: { currentUser: CurrentUser }
) {
  if (!data) throw new createError.BadRequest("Data não informada");
  if (!operacao) throw new createError.BadRequest("Operação não informada");
  const qry = await knexOftalmo(
    knexOftalmo.raw(
      "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
    )
  )
    .select(
      knexOftalmo.raw(
        "	case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
      )
    )
    .groupBy(
      knexOftalmo.raw(
        "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end"
      )
    )
    .where({ fkOperacao: operacao, DataInicio: data });
  return qry;
}
