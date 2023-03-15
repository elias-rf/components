import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { nf_saida_fv } from "./nf-saida-fv.table";
import type { TNfSaidaFvModel } from "./nf-saida-fv.type";
//#region import
import { TField } from "../../types/model";
import { z, zod } from "../../utils/zod/z";
import { zsr } from "../../utils/zod/z-refine";
//#endregion

export function nfSaidaFvModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TNfSaidaFvModel {
  const connection = connections[nf_saida_fv.database];
  const crud = crudFactory(connection, nf_saida_fv);

  //#region def

  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      // DIARIO
      async vendaDiario({ inicio, fim, uf }) {
        zod(inicio, z.string().superRefine(zsr.date));
        zod(fim, z.string().superRefine(zsr.date));
        zod(uf, z.array(z.string()));
        const knex = crud.connection();
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

      async vendaDiarioSchema(): Promise<TField[]> {
        return [
          {
            name: "Dia",
            label: "Dia",
            typeField: "string",
          },
          {
            name: "Produto",
            label: "Produto",
            typeField: "string",
          },
          {
            name: "Quantidade",
            label: "Quantidade",
            typeField: "int",
          },
          {
            name: "Valor",
            label: "Valor",
            typeField: "float",
          },
        ];
      },

      // MENSAL
      async vendaMensalCliente({ inicio, fim, cliente }) {
        zod(inicio, z.string().superRefine(zsr.date));
        zod(fim, z.string().superRefine(zsr.date));
        zod(cliente, z.number());
        const knex = crud.connection();
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

      async vendaMensalClienteSchema(): Promise<TField[]> {
        return [
          {
            name: "anoMes",
            label: "Mês",
            typeField: "string",
          },
          {
            name: "cliente_id",
            label: "Cód. Cliente",
            typeField: "int",
          },
          {
            name: "NmCategoria",
            label: "Produto",
            typeField: "string",
          },
          {
            name: "quantidade",
            label: "Quantidade",
            typeField: "int",
          },
          {
            name: "valor",
            label: "Valor",
            typeField: "float",
          },
        ];
      },

      async vendaAnaliticoSchema() {
        return [
          {
            name: "NmCategoria",
            label: "Categoria",
            typeField: "string",
          },
          {
            name: "DtEmissao",
            label: "Emissão",
            typeField: "date",
          },
          {
            name: "NumNota",
            label: "Nota Fiscal",
            typeField: "string",
          },
          {
            name: "Serie",
            label: "Série",
            typeField: "string",
          },
          {
            name: "Tipo",
            label: "Tipo",
            typeField: "string",
          },
          {
            name: "CdProduto",
            label: "Cód Produto",
            typeField: "float",
          },
          {
            name: "Quantidade",
            label: "Quantidade",
            typeField: "float",
          },
          {
            name: "VlTotal",
            label: "Valor",
            typeField: "float",
          },
          {
            name: "Descricao",
            label: "Produto",
            typeField: "float",
          },
          {
            name: "CdVendedor",
            label: "Cód Vendedor",
            typeField: "int",
          },
          {
            name: "NmVendedor",
            label: "Vendedor",
            typeField: "string",
          },
          {
            name: "uf",
            label: "UF",
            typeField: "string",
          },
        ];
      },

      async vendaAnalitico({ inicio, fim }: { inicio: string; fim: string }) {
        zod(inicio, z.string().superRefine(zsr.date));
        zod(fim, z.string().superRefine(zsr.date));
        const knex = crud.connection();
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
      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      //#endregion
    },
    connection,
    nf_saida_fv,
  } as TNfSaidaFvModel;

  return model;
}

//#region other
//#endregion
