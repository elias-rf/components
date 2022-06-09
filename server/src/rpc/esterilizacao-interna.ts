import { Connections } from "dal/connections";
import createError from "http-errors";
import type { CurrentUser } from "../../index.d";

export default function exterilizacaoInternaRpc(connections: Connections) {
  const knexOftalmo = connections.oftalmo;
  return {
    async diario(
      { inicio, fim }: { inicio: string; fim: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      if (!inicio) throw new createError.BadRequest("Início não informado");
      if (!fim) throw new createError.BadRequest("Fim não informado");

      const qry = await knexOftalmo("tOperacaoOrdemProducao")
        .select(
          knexOftalmo.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
        )
        .orderBy("DataInicio", "desc")
        .groupBy("DataInicio")
        .whereBetween("DataInicio", [inicio, fim])
        .where(knexOftalmo.raw("fkOperacao in (3058, 3158)"));
      return qry;
    },

    async mensal({ mes }: { mes: string }, ctx?: { currentUser: CurrentUser }) {
      if (!mes) throw new createError.BadRequest("Mês não informado");

      const qry = knexOftalmo("tOperacaoOrdemProducao")
        .select(
          knexOftalmo.raw(
            "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
          )
        )
        .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
        .groupBy(knexOftalmo.raw("CONVERT(CHAR(7),[DataInicio],120)"))
        .where(knexOftalmo.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
        .where(knexOftalmo.raw("fkOperacao in (3058, 3158)"));

      return qry;
    },

    async modelo(
      {
        data,
        produto,
      }: {
        data: string;
        produto: string;
      },
      ctx?: { currentUser: CurrentUser }
    ) {
      if (!data) throw new createError.BadRequest("Data não informada");
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
          DataInicio: data,
          fkCategoria: produto,
        })
        .where(knexOftalmo.raw("fkOperacao in (3058, 3158)"));
      return qry;
    },

    async produto(
      { data }: { data: string },
      { currentUser }: { currentUser: CurrentUser }
    ) {
      if (!data) throw new createError.BadRequest("Data não informada");

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
        .groupBy([
          "tbl_Produto.fkCategoria",
          "tOperacaoOrdemProducao.DataInicio",
        ])
        .where({ DataInicio: data })
        .where(knexOftalmo.raw("fkOperacao in (3058, 3158)"));
      return qry;
    },
  };
}
