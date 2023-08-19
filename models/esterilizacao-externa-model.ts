import { EsterilizacaoExterna } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";
import { day } from "@/utils/date/day";
import { zsr } from "@/utils/zod/z-refine";
import { zd, zod } from "@/utils/zod/zod";

class EsterilizacaoExternaModel extends CrudObjection {
  constructor() {
    super(EsterilizacaoExterna);
  }

  async diario({
    inicio,
    fim,
  }: {
    inicio: string;
    fim: string;
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> {
    zod(inicio, zd.string().superRefine(zsr.date));
    zod(fim, zd.string().superRefine(zsr.date));
    const knex = EsterilizacaoExterna.knex();
    const qry = await knex(
      knex.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        knex.raw(
          "tEsterilizacaoExterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("tEsterilizacaoExterna.Data", "desc")
      .groupBy("tEsterilizacaoExterna.Data")
      .where(
        knex.raw("tEsterilizacaoExterna.Data between ? and ?", [inicio, fim])
      );

    return qry.map((rec: any) => {
      rec.dia_semana = day(rec.dia).format("ddd");
      rec.dia = rec.dia.toISOString().substring(0, 10);
      return rec;
    });
  }

  async mensal({ mes }: { mes: string }) {
    zod(mes, zd.string().superRefine(zsr.month));
    const knex = EsterilizacaoExterna.knex();
    const qry = await knex(
      knex.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        knex.raw(
          "CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) desc")
      .groupBy(knex.raw("CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)"))
      .where(
        knex.raw("CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)>=?", [mes])
      );
    return qry;
  }

  async modelo({ data, produto }: { data: string; produto: string }) {
    zod(data, zd.string().superRefine(zsr.date));
    zod(produto, zd.string());
    const knex = EsterilizacaoExterna.knex();
    const qry = knex(
      knex.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        knex.raw(
          "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("NomeProdutoItem", "desc")
      .groupBy("NomeProdutoItem")
      .where("tEsterilizacaoExterna.Data", data)
      .where(knex.raw("IsNull([fkCategoria],'Metil')=?", produto));

    const response = await qry;
    return response;
  }

  async produto({
    data,
  }: {
    data: string;
  }): Promise<{ produto: string; quantidade: number }[]> {
    zod(data, zd.string().superRefine(zsr.date));
    const knex = EsterilizacaoExterna.knex();
    const qry = knex(
      knex.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        knex.raw(
          "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("fkCategoria", "desc")
      .groupBy("fkCategoria")
      .where(knex.raw("tEsterilizacaoExterna.Data=?", [data]));

    const response = await qry;
    return response;
  }
}

export const esterilizacaoExternaModel = new EsterilizacaoExternaModel();
