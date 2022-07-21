import { CurrentUser, Id, ListArgs, Schema } from "../../../types";
import { day, isEmpty, module10 } from "../../../utils";
import { Connections } from "../dal/connections";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  kOp?: string;
  DataEmissao?: string;
  DataFechamento?: string;
  DataUltimoLancamento?: string;
  Expiracao?: string;
  IndiceRefracao?: string;
  IndiceRefracao2?: string;
  LoteFabricante?: string;
  NomeUsuario?: string;
  Obs?: string;
  QtdEmProcesso?: string;
  QtdEstExt_tmp?: string;
  Quantidade?: string;
  Selecao?: string;
  Travado?: string;
  emProcesso?: string;
  fkLoteEstExt?: string;
  fkLoteEstInt?: string;
  fkOPMestre?: string;
  fkOpPai?: string;
  fkOperacaoEmProcesso?: string;
  fkPrimeiraOperacao?: string;
  fkProdutoItem?: string;
  fkTipoOP?: string;
  loteTamboreamento?: string;
  versao?: string;
};

export type OrdemProducaoRpc = {
  ordemProducaoSchema(): any;
  ordemProducaoList(
    listArgs: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<Record[]>;
  ordemProducaoRead(
    readArgs: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<Record>;
  ordemProducaoCreate(
    createArgs: { rec: Record },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string[]>;
  ordemProducaoUpdate(
    updateArgs: {
      id: Id;
      rec: Record;
    },
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  ordemProducaoProdutoItem(
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  ordemProducaoProdutoPlano(
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoProduto(
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  ordemProducaoDataFabricacao(
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoDataValidade(
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoVersao(
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoControle(
    { id, serie }: { id: Id; serie: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoFromControle(
    { controle }: { controle: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoControleValido(
    { controle }: { controle: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<boolean>;
};

export function OrdemProducao(connection: Connections): OrdemProducaoRpc {
  const knexOftalmo = connection.oftalmo;
  const table = "tOrdemProducao";
  const pk = ["kOp"];

  const rsp = {
    async ordemProducaoSchema(): Promise<Schema> {
      return {
        pk: ["kOp"],
        fields: [
          {
            field: "kOp",
            label: "Ordem Produção",
            type: "ID",
          },
          {
            field: "fkTipoOP",
            label: "Cód Tipo",
            type: "int",
          },
          {
            field: "tipo",
            label: "Tipo",
            type: "string",
          },
          {
            field: "DataEmissao",
            label: "Emissão",
            type: "date",
          },
          {
            field: "DataFechamento",
            label: "Fechamento",
            type: "date",
          },
          {
            field: "Travado",
            label: "Travado",
            type: "int",
          },
          {
            field: "fkOpPai",
            label: "Ordem de Origem",
            type: "int",
          },
          {
            field: "opPai",
            label: "Origem",
            type: "int",
          },
          {
            field: "LoteFabricante",
            label: "Lote Mat Prima",
            type: "string",
          },
          {
            field: "NomeUsuario",
            label: "Usuário",
            type: "string",
          },
          {
            field: "fkProdutoItem",
            label: "Código Modelo",
            type: "int",
          },
          {
            field: "produtoItem",
            label: "Modelo",
            type: "string",
          },
          {
            field: "Quantidade",
            label: "Quantidade",
            type: "int",
          },
          {
            field: "QtdEmProcesso",
            label: "Qtd em Processo",
            type: "int",
          },
          {
            field: "fkLoteEstExt",
            label: "Lote Est Externa",
            type: "int",
          },
          {
            field: "fkLoteEstInt",
            label: "Lote Est Interna",
            type: "int",
          },
          {
            field: "fkPrimeiraOperacao",
            label: "Cód Operação Inicial",
            type: "int",
          },
          {
            field: "primeiraOperacao",
            label: "Operação Inicial",
            type: "int",
          },
          {
            field: "Selecao",
            label: "Selecionado",
            type: "boolean",
          },
          {
            field: "QtdEstExt_tmp",
            label: "Quantidade Est Ext",
            type: "int",
          },
          {
            field: "Obs",
            label: "Observação",
            type: "string",
          },
          {
            field: "Expiracao",
            label: "Expiração",
            type: "date",
          },
          {
            field: "fkOPMestre",
            label: "Ordem Mestre",
            type: "int",
          },
          {
            field: "opMestre",
            label: "Mestre",
            type: "int",
          },
          {
            field: "DataUltimoLancamento",
            label: "Último Lançamento",
            type: "datetime",
          },
          {
            field: "IndiceRefracao",
            label: "Índice Refração 1",
            type: "float",
          },
          {
            field: "IndiceRefracao2",
            label: "Índice Refração 2",
            type: "float",
          },
          {
            field: "versao",
            label: "Versão",
            type: "int",
          },
          {
            field: "emProcesso",
            label: "Em Processo",
            type: "boolean",
          },
          {
            field: "fkOperacaoEmProcesso",
            label: "Cód Operação em Processo",
            type: "int",
          },
          {
            field: "operacaoEmProcesso",
            label: "Operação em Processo",
            type: "int",
          },
          {
            field: "loteTamboreamento",
            label: "Lote de Tamboreamento",
            type: "string",
          },
        ],
      };
    },

    // LIST
    async ordemProducaoList(
      { where = [], orderBy = [], limit = 50 }: ListArgs,
      ctx?: { currentUser: CurrentUser }
    ): Promise<Record[]> {
      return knexOftalmo(table)
        .limit(limit)
        .where(knexWhere(where))
        .orderBy(knexOrder(orderBy));
    },

    // READ
    async ordemProducaoRead(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ): Promise<Record> {
      if (!id || !id.length || !Array.isArray(id)) {
        throw new Error("[kOp] is required");
      }
      const qry = await knexOftalmo(table).where(pk[0], id[0]);
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return {};
    },

    // CREATE
    async ordemProducaoCreate(
      { rec }: { rec: Record },
      ctx?: { currentUser: CurrentUser }
    ): Promise<string[]> {
      const qry = await knexOftalmo(table)
        .insert(rec)
        .returning([...pk]);
      return qry;
    },

    // UPDATE
    async ordemProducaoUpdate(
      {
        id,
        rec,
      }: {
        id: Id;
        rec: Record;
      },
      ctx?: { currentUser: CurrentUser }
    ): Promise<any> {
      if (!id || !id.length || !Array.isArray(id)) {
        throw new Error("[id] is required");
      }
      const qry = await knexOftalmo(table)
        .update(rec)
        .where(pk[0], id[0])
        .returning([...pk]);
      return qry;
    },

    // Retorna produtoItem a partir da ordem de producao
    async ordemProducaoProdutoItem(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      const response = await knexOftalmo(table)
        .select(["fkProdutoItem"])
        .where(pk[0], id[0]);
      if (isEmpty(response)) {
        return [];
      }
      return response[0].fkProdutoItem;
    },

    // Retorna produto do plano a partir da ordem de producao
    async ordemProducaoProdutoPlano(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      const produtoItem = await rsp.ordemProducaoProdutoItem({ id }, ctx);
      if (isEmpty(produtoItem)) {
        return [];
      }
      const response = await knexOftalmo("tbl_produto_item")
        .select(["idVisiontech"])
        .where("kprodutoitem", produtoItem);
      if (isEmpty(response)) {
        return "";
      }
      return response[0].idVisiontech.trim();
    },

    // Retorna produto do plano a partir da ordem de producao
    async ordemProducaoProduto(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      const produtoItem = await rsp.ordemProducaoProdutoItem({ id }, ctx);
      const response = await knexOftalmo("tbl_produto_item")
        .select(["fkProduto"])
        .where("kprodutoitem", produtoItem);

      return response[0].fkProduto;
    },

    // Retorna data de fabricacao
    async ordemProducaoDataFabricacao(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      let response = await knexOftalmo("tOperacaoOrdemProducao")
        .max({ dtini: "dataInicio" })
        .where({ fkOp: id[0], fkOperacao: "3059" });

      if (isEmpty(response[0].dtini)) {
        response = await knexOftalmo("tOperacaoOrdemProducao")
          .max({ dtini: "dataInicio" })
          .where({ fkOp: id[0], fkOperacao: "3060" });
        if (isEmpty(response[0].dtini)) {
          response = await knexOftalmo("tOperacaoOrdemProducao")
            .max({ dtini: "dataInicio" })
            .where({ fkOp: id[0], fkOperacao: "4020" });
        }
        if (isEmpty(response[0].dtini)) {
          response = await knexOftalmo("tOperacaoOrdemProducao")
            .max({ dtini: "dataInicio" })
            .where({ fkOp: id[0], fkOperacao: "3160" });
        }
        if (isEmpty(response[0].dtini)) {
          throw new Error(
            "Ordem de produção não possui 3059, 3060, 4020 ou 3160"
          );
        }
      }
      if (Array.isArray(response) && response.length > 0) {
        return day(response[0].dtini).toISOString();
      }
      return "";
    },

    // Retorna data de validade
    async ordemProducaoDataValidade(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      const fabricacao = await rsp.ordemProducaoDataFabricacao({ id }, ctx);
      if (fabricacao === "") {
        throw new Error(
          "Ordem de produção não possui 3059, 3060, 4020 ou 3160"
        );
      }
      const validade = day(fabricacao).add(5, "y").toISOString();
      return validade;
    },

    // Retorna data de validade
    async ordemProducaoVersao(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      const response = await knexOftalmo("tOrdemProducao")
        .select(["versao"])
        .where({ kOp: id[0] });
      return response[0].versao;
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    async ordemProducaoControle(
      { id, serie }: { id: Id; serie: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      const serial = "000000"
        .concat((parseInt(id[0]) / 100).toString())
        .slice(-6)
        .concat("00000".concat(serie.toString()).slice(-5));
      const dv = module10(serial);
      return serial.concat(dv);
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    async ordemProducaoFromControle(
      { controle }: { controle: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      return controle.slice(0, 6) + "00";
    },

    // Valida se número de série é válido
    async ordemProducaoControleValido(
      { controle }: { controle: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      if (!controle) return false;

      if (controle.length === 12) {
        const serial = controle.substring(0, 11);
        const dv = controle.substring(11);
        if (module10(serial) === dv) {
          return true;
        }
      }
      return false;
    },
  };
  return rsp;
}
