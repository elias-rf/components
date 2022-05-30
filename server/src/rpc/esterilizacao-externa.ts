import createError from "http-errors";
import type { CurrentUser } from "../../index.d";
import knexOftalmo from "../dal/oftalmo.connection";

export async function diario(
  { inicio, fim }: { inicio: string; fim: string },
  { currentUser }: { currentUser: CurrentUser }
) {
  if (!inicio) throw new createError.BadRequest("Início não informado");
  if (!fim) throw new createError.BadRequest("Fim não informado");

  const qry = await knexOftalmo(
    knexOftalmo.raw(
      "tEsterilizacaoexterna LEFT JOIN (SELECT	tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
    )
  )
    .select(
      knexOftalmo.raw(
        "tEsterilizacaoexterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
      )
    )
    .orderBy("tEsterilizacaoexterna.Data", "desc")
    .groupBy("tEsterilizacaoexterna.Data")
    .where(
      knexOftalmo.raw("tEsterilizacaoexterna.Data between ? and ?", [
        inicio,
        fim,
      ])
    );
  return qry;
}

export async function mensal(
  { mes }: { mes: string },
  { currentUser }: { currentUser: CurrentUser }
) {
  if (!mes) throw new createError.BadRequest("Mês não informado");

  const qry = await knexOftalmo(
    knexOftalmo.raw(
      "tEsterilizacaoexterna LEFT JOIN (SELECT	tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
    )
  )
    .select(
      knexOftalmo.raw(
        "CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
      )
    )
    .orderByRaw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) desc")
    .groupBy(knexOftalmo.raw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)"))
    .where(
      knexOftalmo.raw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)>=?", [
        mes,
      ])
    );
  return qry;
}

export async function modelo(
  {
    data,
    produto,
  }: {
    data: string;
    produto: string;
  },
  { currentUser }: { currentUser: CurrentUser }
) {
  if (!data) throw new createError.BadRequest("Data não informada");
  if (!produto) throw new createError.BadRequest("Produto não informado");

  const qry = await knexOftalmo(
    knexOftalmo.raw(
      "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
    )
  )
    .select(
      knexOftalmo.raw(
        "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
      )
    )
    .orderBy("NomeProdutoItem", "desc")
    .groupBy("NomeProdutoItem")
    .where("tEsterilizacaoexterna.Data", data)
    .where(knexOftalmo.raw("IsNull([fkCategoria],'Metil')=?", produto));

  return qry;
}

export async function produto(
  { data }: { data: string },
  { currentUser }: { currentUser: CurrentUser }
) {
  if (!data) throw new createError.BadRequest("Data não informada");

  try {
    const qry = await knexOftalmo(
      knexOftalmo.raw(
        "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        knexOftalmo.raw(
          "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("fkCategoria", "desc")
      .groupBy("fkCategoria")
      .where(knexOftalmo.raw("tEsterilizacaoexterna.Data=?", [data]));
    return qry;
  } catch (e) {
    console.log(e);
  }
}
