import { TConnections, TFieldClient } from "../../../types";
import { TNfSaidaFvRpc } from "../../../types/nf-saida-fv.type";
import { crudModel } from "../crud/crud.model";

const table = "nf_saida_fv";

export type TVendasFv = {
  origem: string;
  NmCategoria: string;
  DtEmissao: string;
  NumNota: string;
  Serie: string;
  Tipo: string;
  CdProduto: string;
  Quantidade: number;
  VlTotal: number;
  Descricao: string;
  CdVendedor: string;
  NmVendedor: string;
  uf: string;
};

export function nfSaidaFvModel(connections: TConnections): TNfSaidaFvRpc {
  const knex = connections.plano;
  const crud = crudModel(connections);

  return {
    query: {
      async schema() {
        return crud.schema({ table });
      },
      async clear() {
        return crud.clear({ table });
      },
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },
      // DIARIO
      async vendaDiario({ inicio, fim, uf }) {
        const qry = await knex<
          any,
          {
            NmCategoria: string;
            DtEmissao: string;
            quantidade: number;
            valor: number;
          }
        >(
          knex.raw(
            "MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF"
          )
        )
          .select([
            "NmCategoria",
            "MestreNota.DtEmissao",
            knex.raw(
              "sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor"
            ),
          ])
          .sum({ quantidade: "ItemNota.Quantidade" })
          .where({
            "MestreNota.FgEstatistica": "S",
            "MestreNota.CdFilial": 2,
            "CadPro.FgEstatistica": "S",
            "CadVen.FgControle": "S",
            "ItemNota.ImprimeComponentes": "N",
          })
          .where("ItemNota.Sequencia", ">", 0)
          .where("MestreNota.Tipo", "<>", "C")
          .where("mestrenota.cdcliente", "<>", 3158)
          .whereBetween("MestreNota.DtEmissao", [inicio, fim])
          .whereRaw(
            "ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE"
          )
          .whereIn("cidadeserf.uf", uf)

          .groupBy("NmCategoria", "MestreNota.DtEmissao")
          .orderBy("NmCategoria")
          .orderBy("MestreNota.DtEmissao", "desc");
        return qry as {
          NmCategoria: string;
          DtEmissao: string;
          quantidade: number;
          valor: number;
        }[];
      },

      async vendaDiarioSchema(): Promise<TFieldClient[]> {
        return [
          {
            name: "Dia",
            label: "Dia",
            type: "string",
          },
          {
            name: "Produto",
            label: "Produto",
            type: "string",
          },
          {
            name: "Quantidade",
            label: "Quantidade",
            type: "int",
          },
          {
            name: "Valor",
            label: "Valor",
            type: "float",
          },
        ];
      },

      // MENSAL
      async vendaMensalCliente({ inicio, fim, cliente }) {
        const qry = knex(
          knex.raw("MestreNota, ItemNota, CadVen, NatOpe, CadPro, CategPro")
        )
          .select([
            "CategPro.NmCategoria",
            "MestreNota.CdCliente",
            knex.raw(
              "CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor"
            ),
          ])

          .where({
            "MestreNota.FgEstatistica": "S",
            "MestreNota.CdFilial": 2,
            "CadPro.FgEstatistica": "S",
            "CadVen.FgControle": "S",
            "ItemNota.ImprimeComponentes": "N",
          })
          .where("ItemNota.Sequencia", ">", 0)
          .where("MestreNota.Tipo", "<>", "C")
          .whereBetween("MestreNota.DtEmissao", [inicio, fim])
          .where({ "MestreNota.CdCliente": cliente })
          .whereRaw(
            "ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadPro.CdProduto = ItemNota.CdProduto"
          )

          .groupBy("CdCliente", "NmCategoria")
          .groupByRaw("CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)")

          .orderByRaw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],126) DESC");

        return qry;
      },

      async vendaMensalClienteSchema(): Promise<TFieldClient[]> {
        return [
          {
            name: "anoMes",
            label: "Mês",
            type: "string",
          },
          {
            name: "cliente_id",
            label: "Cód. Cliente",
            type: "int",
          },
          {
            name: "NmCategoria",
            label: "Produto",
            type: "string",
          },
          {
            name: "quantidade",
            label: "Quantidade",
            type: "int",
          },
          {
            name: "valor",
            label: "Valor",
            type: "float",
          },
        ];
      },

      async vendaAnaliticoSchema() {
        return [
          {
            name: "NmCategoria",
            label: "Categoria",
            type: "string",
          },
          {
            name: "DtEmissao",
            label: "Emissão",
            type: "date",
          },
          {
            name: "NumNota",
            label: "Nota Fiscal",
            type: "string",
          },
          {
            name: "Serie",
            label: "Série",
            type: "string",
          },
          {
            name: "Tipo",
            label: "Tipo",
            type: "string",
          },
          {
            name: "CdProduto",
            label: "Cód Produto",
            type: "float",
          },
          {
            name: "Quantidade",
            label: "Quantidade",
            type: "float",
          },
          {
            name: "VlTotal",
            label: "Valor",
            type: "float",
          },
          {
            name: "Descricao",
            label: "Produto",
            type: "float",
          },
          {
            name: "CdVendedor",
            label: "Cód Vendedor",
            type: "int",
          },
          {
            name: "NmVendedor",
            label: "Vendedor",
            type: "string",
          },
          {
            name: "uf",
            label: "UF",
            type: "string",
          },
        ];
      },

      async vendaAnalitico({ inicio, fim }: { inicio: string; fim: string }) {
        return knex("MestreNota")
          .select(knex.raw("'FV' as origem"))
          .select([
            "CategPro.NmCategoria",
            "MestreNota.DtEmissao",
            "MestreNota.NumNota",
            "MestreNota.Serie",
            "MestreNota.Tipo",
            "ItemNota.CdProduto",
            "ItemNota.Quantidade",
            "ItemNota.VlTotal",
            "CadPro.Descricao",
            "MestreNota.CdVendedor",
            "CadVen.NmVendedor",
            "CidadesERF.uf",
          ])
          .join("ItemNota", function () {
            this.on("ItemNota.CdFilial", "=", "MestreNota.CdFilial")
              .andOn("ItemNota.NumNota", "=", "MestreNota.NumNota")
              .andOn("ItemNota.Serie", "=", "MestreNota.Serie")
              .andOn("ItemNota.Modelo", "=", "MestreNota.Modelo");
          })
          .join("CadVen", "MestreNota.CdVendedor", "CadVen.CdVendedor")
          .join("CadCli", "MestreNota.CdCliente", "CadCli.CdCliente")
          .join("cidadesErf", "CadCli.Cidade", "cidadesErf.NmCidadeIBGE")
          .join("CadPro", "ItemNota.CdProduto", "CadPro.CdProduto")
          .join("CategPro", "CadPro.CdCategoria", "CategPro.CdCategoria")
          .where({
            "MestreNota.CdFilial": 1,
            "CadVen.FgControle": "S",
            "MestreNota.FgEstatistica": "S",
            "CadPro.FgEstatistica": "S",
            "ItemNota.ImprimeComponentes": "N",
          })
          .where("ItemNota.Sequencia", "<>", 0)
          .where("mestrenota.cdcliente", "<>", 3158)
          .whereBetween("MestreNota.DtEmissao", [inicio, fim])
          .whereIn("MestreNota.Tipo", ["E", "S"]);
      },
    },
    mutation: {
      async del({ id }) {
        return crud.del({ table, id });
      },
      async create({ data }) {
        return crud.create({ table, data });
      },
      async update({ id, data }) {
        return crud.update({ table, id, data });
      },
    },
  };
}
