import { Connections } from "dal/connections";
import { CurrentUser, ListArgs } from "../..";
import { Id } from "../../../index.d";
import knexOrder from "../lib/knex/knex-order";
import knexWhere from "../lib/knex/knex-where";
import day from "../utils/date/day";
import isEmpty from "../utils/is/is-empty";
import module10 from "../utils/string/module10";

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

export default function OrdemProducaoRpc(connection: Connections) {
  const knexOftalmo = connection.oftalmo;
  const table = "tOrdemProducao";
  const pk = ["kOp"];

  const rsp = {
    async list(
      { where, orderBy, limit = 50 }: ListArgs,
      { currentUser }: { currentUser: CurrentUser }
    ): Promise<Record[]> {
      return knexOftalmo(table)
        .limit(limit)
        .where(knexWhere(where))
        .orderBy(knexOrder(orderBy));
    },

    async read(
      { id }: { id: Id },
      { currentUser }: { currentUser: CurrentUser }
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

    async create(
      { rec }: { rec: Record },
      { currentUser }: { currentUser: CurrentUser }
    ): Promise<string[]> {
      const qry = await knexOftalmo(table)
        .insert(rec)
        .returning([...pk]);
      return qry;
    },

    async update(
      {
        id,
        rec,
      }: {
        id: Id;
        rec: Record;
      },
      { currentUser }: { currentUser: CurrentUser }
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
    async getProdutoItem(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      const response = await knexOftalmo(table)
        .select(["fkProdutoItem"])
        .where(pk[0], id[0]);

      return response[0].fkProdutoItem;
    },

    // Retorna produto do plano a partir da ordem de producao
    async getProdutoPlano(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      const produtoItem = await rsp.getProdutoItem({ id }, ctx);
      const response = await knexOftalmo("tbl_produto_item")
        .select(["idVisiontech"])
        .where("kprodutoitem", produtoItem);

      return response[0].fkProdutoItem;
    },

    // Retorna produto do plano a partir da ordem de producao
    async getProduto({ id }: { id: Id }, ctx?: { currentUser: CurrentUser }) {
      const produtoItem = await rsp.getProdutoItem({ id }, ctx);
      const response = await knexOftalmo("tbl_produto_item")
        .select(["fkProduto"])
        .where("kprodutoitem", produtoItem);

      return response[0].fkProduto;
    },

    // Retorna data de fabricacao
    async getDataFabricacao(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      let response = await knexOftalmo("tOperacaoOrdemProducao")
        .max({ dtini: "dataInicio" })
        .where({ fkOp: id[0], fkOperacao: "3059" });
      if (isEmpty(response)) {
        let response = await knexOftalmo("tOperacaoOrdemProducao")
          .max({ dtini: "dataInicio" })
          .where({ fkOp: id[0], fkOperacao: "3060" });
        if (isEmpty(response)) {
          let response = await knexOftalmo("tOperacaoOrdemProducao")
            .max({ dtini: "dataInicio" })
            .where({ fkOp: id[0], fkOperacao: "4020" });
        }
        if (isEmpty(response)) {
          let response = await knexOftalmo("tOperacaoOrdemProducao")
            .max({ dtini: "dataInicio" })
            .where({ fkOp: id[0], fkOperacao: "3160" });
        }
        if (isEmpty(response)) {
          throw new Error(
            "Ordem de produção não possui 3059, 3060, 4020 ou 3160"
          );
        }

        return "";
      }
      if (Array.isArray(response) && response.length > 0) {
        return day(response[0].dtini);
      }
    },

    // Retorna data de validade
    async getDataValidade(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      const fabricacao = await rsp.getDataFabricacao({ id }, ctx);
      const validade = day(fabricacao).add(5, "y");
      return validade;
    },

    // Retorna data de validade
    async getVersao({ id }: { id: Id }, ctx?: { currentUser: CurrentUser }) {
      const response = await knexOftalmo("tOrdemProducao")
        .select(["versao"])
        .where({ kOp: id[0] });
      return response[0].versao;
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    getControle(
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

    // Valida se número de série é válido
    isControleValido(
      { serie }: { serie: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      if (!serie) return false;

      if (serie.length === 12) {
        const serial = serie.substring(0, 11);
        const dv = serie.substring(11);
        if (module10(serial) === dv) {
          return true;
        }
      }
      return false;
    },
  };
  return rsp;
}
