import { TConnections, TFieldClient } from "../../../types";
import { TNfSaida, TNfSaidaRpc } from "../../../types/nf-saida.type";
import { crudModel } from "../crud/crud.model";
import { nfSaidaFvModel } from "../nf-saida-fv/nf-saida-fv.model";

const table = "nf_saida";

export function nfSaidaModel(connections: TConnections): TNfSaidaRpc {
  const knex = connections.plano;
  const crud = crudModel(connections);
  const nfSaidaFv = nfSaidaFvModel(connections);

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
      async transferenciaDiario({ inicio, fim }) {
        // validateIsThrow(isString(inicio), "inicio dever ser AAAA-MM-DD");
        // validateIsThrow(isString(fim), "fim dever ser AAAA-MM-DD");
        const aux: any = {};
        const rsp = [];
        const qry: any = await knex<
          any,
          { dia: string; NmCategoria: string; quantidade: number }
        >(
          knex.raw(
            "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
          )
        )
          .select(
            knex.raw(
              "CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
            )
          )
          .orderByRaw("[MestreNota].[DtEmissao] desc")
          .groupByRaw("[MestreNota].[DtEmissao], CategPro.NmCategoria")
          .where(
            knex.raw("[MestreNota].[DtEmissao] between ? and ?", [inicio, fim])
          )
          .andWhere(
            knex.raw(
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

      // SCHEMA DIARIO
      async transferenciaDiarioSchema() {
        return [
          {
            name: "dia",
            label: "Dia",
            labelClass: "text-center",
            fieldClass: "text-left",
            type: "string",
            primaryKey: true,
          },
          {
            name: "LITEFLEX",
            label: "LiteFlex",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "HILITE",
            label: "HiLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "ENLITE",
            label: "EnLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "METILCELULOSE",
            label: "Metil",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "CORNEAL RING",
            label: "Corneal Ring",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "ANEL CAPSULAR",
            label: "Anel Capsular",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
        ];
      },

      // TRANSFERENCIA MENSAL
      async transferenciaMensal({ mes }) {
        // validateIsThrow(isString(mes), "mes dever ser string");

        const aux: any = {};
        const rsp = [];
        const qry = await knex(
          knex.raw(
            "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
          )
        )
          .select(
            knex.raw(
              "CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
            )
          )
          .orderByRaw("CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) desc")
          .groupBy(
            knex.raw(
              "CONVERT(CHAR(7),[MestreNota].[DtEmissao],120), CategPro.NmCategoria"
            )
          )
          .where(
            knex.raw("CONVERT(CHAR(7),[MestreNota].[DtEmissao],120)>=?", [mes])
          )
          .andWhere(
            knex.raw(
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

      // TRANSFERENCIA MODELO
      async transferenciaModelo({ data }) {
        // validateIsThrow(isString(data), "data dever ser string");

        const qry = await knex(
          knex.raw(
            "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
          )
        )
          .select(
            knex.raw(
              "CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade"
            )
          )
          .orderByRaw("CadPro.Descricao asc")
          .groupBy(knex.raw("CadPro.Descricao"))
          .where(knex.raw("MestreNota.DtEmissao = ?", [data]))
          .andWhere(
            knex.raw(
              "MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N'"
            )
          );

        return qry;
      },

      // TRANSFERENCIA SCHEMA MODELO
      async transferenciaModeloSchema() {
        return [
          {
            name: "modelo",
            label: "Modelo",
            labelClass: "text-center",
            fieldClass: "text-left",
            type: "string",
            primaryKey: true,
          },
          {
            name: "quantidade",
            label: "Quantidade",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
        ];
      },

      // TRANSFERENCIA SCHEMA MENSAL
      async transferenciaMensalSchema() {
        return [
          {
            name: "mes",
            label: "Mês",
            labelClass: "text-center",
            fieldClass: "text-left",
            type: "string",
            primaryKey: true,
          },
          {
            name: "LITEFLEX",
            label: "LiteFlex",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "HILITE",
            label: "HiLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "ENLITE",
            label: "EnLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "METILCELULOSE",
            label: "Metil",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "CORNEAL RING",
            label: "Corneal Ring",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            name: "ANEL CAPSULAR",
            label: "Anel Capsular",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
        ];
      },

      // VENDA DIARIO
      async vendaDiario({ inicio, fim, uf }) {
        // validateIsThrow(isString(inicio), "inicio dever ser string");
        // validateIsThrow(isString(fim), "fim dever ser string");
        // validateIsThrow(isNonEmptyArray(fim), "UF dever ser array de string");

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
          .where("MestreNota.cdcliente", "<>", 3158)
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

      // VENDA DIARIO SCHEMA
      async vendaDiarioSchema() {
        return [
          {
            name: "DtEmissao",
            label: "Dia",
            type: "string",
            primaryKey: true,
          },
          {
            name: "NmCategoria",
            label: "Produto",
            type: "string",
          },
          {
            name: "qtd",
            label: "Quantidade",
            type: "int",
          },
          {
            name: "vlr",
            label: "Valor",
            type: "float",
          },
        ];
      },

      // VENDA MENSAL
      async vendaMensalCliente({ inicio, fim, cliente }) {
        const rsp = await knex<
          any,
          {
            NmCategoria: string;
            CdCliente: number;
            anoMes: string;
            quantidade: number;
            valor: number;
          }
        >("MestreNota")
          .join("ItemNota", {
            "MestreNota.CdFilial": "ItemNota.CdFilial",
            "MestreNota.Serie": "ItemNota.Serie",
            "MestreNota.Modelo": "ItemNota.Modelo",
            "MestreNota.NumNota": "ItemNota.NumNota",
          })
          .join("NatOpe", { "NatOpe.Nop": "MestreNota.Nop" })
          .join("CadVen", { "CadVen.CdVendedor": "MestreNota.CdVendedor" })
          .join("CadPro", {
            "CadPro.CdProduto": "ItemNota.CdProduto",
          })
          .join("CategPro", {
            "CadPro.CdCategoria": "CategPro.CdCategoria",
          })
          .where({
            "MestreNota.FgEstatistica": "S",
            "MestreNota.CdFilial": 2,
            "CadPro.FgEstatistica": "S",
            "CadVen.FgControle": "S",
            "ItemNota.ImprimeComponentes": "N",
          })
          .select([
            "CategPro.NmCategoria",
            "MestreNota.CdCliente",
            knex.raw(
              "CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor"
            ),
          ])
          .groupBy("CdCliente", "NmCategoria")
          .groupByRaw("CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)")
          .where("ItemNota.Sequencia", ">", 0)
          .where("MestreNota.Tipo", "<>", "C")
          .whereBetween("MestreNota.DtEmissao", [inicio, fim])
          .where({ "MestreNota.CdCliente": cliente });

        return rsp as {
          NmCategoria: string;
          CdCliente: number;
          anoMes: string;
          quantidade: number;
          valor: number;
        }[];
      },

      // VENDA MENSAL SCHEMA
      async vendaMensalClienteSchema(): Promise<TFieldClient[]> {
        return [
          {
            name: "anoMes",
            label: "Mês",
            type: "string",
            primaryKey: true,
          },
          {
            name: "CdCliente",
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

      // VENDA ANALITICO SCHEMA
      async vendaAnaliticoSchema() {
        return [
          {
            name: "NmCategoria",
            label: "Categoria",
            type: "string",
            primaryKey: true,
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

      // VENDA ANALITICO
      async vendaAnalitico({ inicio, fim }) {
        const qryPlano = knex("MestreNota")
          .select(knex.raw("'VT' as origem"))
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
            "MestreNota.CdFilial": 2,
            "CadVen.FgControle": "S",
            "MestreNota.FgEstatistica": "S",
            "CadPro.FgEstatistica": "S",
            "ItemNota.ImprimeComponentes": "N",
          })
          .where("ItemNota.Sequencia", "<>", 0)
          .where("MestreNota.cdcliente", "<>", 3158)
          .whereBetween("MestreNota.DtEmissao", [inicio, fim])
          .whereIn("MestreNota.Tipo", ["E", "S"]);

        const qryFullvision = nfSaidaFv.query.vendaAnalitico({
          inicio,
          fim,
        });

        const resp: TNfSaida[][] = await Promise.all([qryPlano, qryFullvision]);
        return resp[0].concat(resp[1]);
      },
    },
    // mutation: {
    //   async nfSaidaDel({ id }) {
    //     return crud.del({ table, id });
    //   },
    //   async nfSaidaCreate({ data }) {
    //     return crud.create({ table, data });
    //   },
    //   async nfSaidaUpdate({ id, data }) {
    //     return crud.update({ table, id, data });
    //   },
    // },
  };
}
