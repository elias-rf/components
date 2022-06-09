import { Connections } from "dal/connections";
import createError from "http-errors";
import { CurrentUser } from "../..";

export default function ClienteRpc(connection: Connections) {
  const knexPlano = connection.plano;

  return {
    async diario(
      { inicio, fim }: { inicio: string; fim: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      if (!inicio) throw new createError.BadRequest("Início não informado");
      if (!fim) throw new createError.BadRequest("Fim não informado");
      const aux: any = {};
      const rsp = [];
      const qry = await knexPlano(
        knexPlano.raw(
          "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
        )
      )
        .select(
          knexPlano.raw(
            "CONVERT(CHAR(10),[mestrenota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
          )
        )
        .orderByRaw("[mestrenota].[DtEmissao] desc")
        .groupByRaw("[mestrenota].[DtEmissao], CategPro.NmCategoria")
        .where(
          knexPlano.raw("[mestrenota].[DtEmissao] between ? and ?", [
            inicio,
            fim,
          ])
        )
        .andWhere(
          knexPlano.raw(
            "MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N'"
          )
        );

      for (const item of qry) {
        aux[item.dia] = {
          ...aux[item.dia],
          ...{ [item.NmCategoria]: item.quantidade },
        };
      }

      for (const [key, value] of Object.entries(aux)) {
        const item = { dia: key, ...(<any>value) };
        rsp.push(item);
      }

      return rsp;
    },

    async mensal({ mes }: { mes: string }, ctx?: { currentUser: CurrentUser }) {
      if (!mes) throw new createError.BadRequest("Mês não informado");
      const aux: any = {};
      const rsp = [];
      const qry = await knexPlano(
        knexPlano.raw(
          "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
        )
      )
        .select(
          knexPlano.raw(
            "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
          )
        )
        .orderByRaw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) desc")
        .groupBy(
          knexPlano.raw(
            "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120), CategPro.NmCategoria"
          )
        )
        .where(
          knexPlano.raw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120)>=?", [
            mes,
          ])
        )
        .andWhere(
          knexPlano.raw(
            "MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N'"
          )
        );

      for (const item of qry) {
        aux[item.mes] = {
          ...aux[item.mes],
          ...{ [item.NmCategoria]: item.quantidade },
        };
      }

      for (const [key, value] of Object.entries(aux)) {
        const item = { mes: key, ...(<any>value) };
        rsp.push(item);
      }

      return rsp;
    },

    async modelo(
      { data }: { data: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      if (!data) throw new createError.BadRequest("Data não informada");

      const qry = await knexPlano(
        knexPlano.raw(
          "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
        )
      )
        .select(
          knexPlano.raw(
            "CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade"
          )
        )
        .orderByRaw("CadPro.Descricao asc")
        .groupBy(knexPlano.raw("CadPro.Descricao"))
        .where(knexPlano.raw("MestreNota.DtEmissao = ?", [data]))
        .andWhere(
          knexPlano.raw(
            "MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N'"
          )
        );

      return qry;
    },
  };
}
