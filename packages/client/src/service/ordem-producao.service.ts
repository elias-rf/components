import type { Where, OrderBy, Schema } from "../..";
import module10 from "@/utils/string/module10";
import isEmpty from "@/utils/is/is-empty";
import type { KnexRequest } from "../lib/knex/knex-request";
import day from "../utils/date/day";

interface OrdemProducaoInput {
  kOp?: string;
  DataEmissao: string;
  DataFechamento: string;
  DataUltimoLancamento: string;
  Expiracao: string;
  IndiceRefracao: string;
  IndiceRefracao2: string;
  LoteFabricante: string;
  NomeUsuario: string;
  Obs: string;
  QtdEmProcesso: string;
  QtdEstExt_tmp: string;
  Quantidade: string;
  Selecao: string;
  Travado: string;
  emProcesso: string;
  fkLoteEstExt: string;
  fkLoteEstInt: string;
  fkOPMestre: string;
  fkOpPai: string;
  fkOperacaoEmProcesso: string;
  fkPrimeiraOperacao: string;
  fkProdutoItem: string;
  fkTipoOP: string;
  loteTamboreamento: string;
  versao: string;
}

export default function ordemProducaoService(client: KnexRequest) {
  const resp = {
    async schema(target?: "form" | "table"): Promise<Schema> {
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

    async list(where?: Where[], order?: OrderBy[]) {
      const response = await client("oftalmo", {
        from: "tOrdemProducao",
        limit: 1000,
        where,
        order,
      });
      return response;
    },

    async read([kOp]: string[]) {
      const response = await client("oftalmo", {
        from: "tOrdemProducao",
        where: [["kOp", "=", kOp]],
      });
      return response;
    },

    async create(input: OrdemProducaoInput) {
      const response = await client("oftalmo", {
        from: "tOrdemProducao",
        insert: input,
      });
      return response;
    },

    async update([kOp]: string[], input: OrdemProducaoInput) {
      const inputAux = { ...input };
      delete inputAux.kOp;

      const response = await client("oftalmo", {
        from: "tOrdemProducao",
        where: [["kOp", "=", kOp]],
        update: input,
      });
      return response;
    },

    async del([kOp]: string[]) {
      if (Array.isArray(kOp)) {
        kOp = kOp[0];
      }
      const response = await client("oftalmo", {
        from: "tOrdemProducao",
        where: [["kOp", "=", kOp]],
        del: ["kOp"],
      });
      return response;
    },

    clear() {
      return {
        id: "",
        name: "",
        department: "",
        email: "",
      };
    },

    // Retorna produtoItem a partir da ordem de producao
    async getProdutoItem(kOp: string) {
      const response = await client("oftalmo", {
        from: "tOrdemProducao",
        select: ["fkProdutoItem"],
        where: [["kOp", "=", kOp]],
      });
      return response[0].fkProdutoItem;
    },

    // Retorna produto do plano a partir da ordem de producao
    async getProdutoPlano(kOp: string) {
      const produtoItem = await this.getProdutoItem(kOp);
      const response = await client("oftalmo", {
        from: "tbl_produto_item",
        select: ["idVisiontech"],
        where: [["kprodutoitem", "=", produtoItem]],
      });
      const resp: string = response[0].idVisiontech;
      return resp.toString().trim();
    },

    // Retorna produto a partir da ordem de producao
    async getProduto(kOp: string) {
      const produtoItem = await resp.getProdutoItem(kOp);
      const response = await client("oftalmo", {
        from: "tbl_produto_item",
        select: ["fkProduto"],
        where: [["kprodutoitem", "=", produtoItem]],
      });
      return response[0].fkProduto;
    },

    // Retorna data de fabricacao
    async getDataFabricacao(kOp: string) {
      let response = await client("oftalmo", {
        from: "tOperacaoOrdemProducao",
        max: { dtini: "dataInicio" },
        where: [
          ["fkOp", "=", kOp],
          ["fkOperacao", "=", "3059"],
        ],
      });
      if (isEmpty(response)) {
        response = await client("oftalmo", {
          from: "tOperacaoOrdemProducao",
          max: { dtini: "dataInicio" },
          where: [
            ["fkOp", "=", kOp],
            ["fkOperacao", "=", "3060"],
          ],
        });
      }
      if (isEmpty(response)) {
        response = await client("oftalmo", {
          from: "tOperacaoOrdemProducao",
          max: { dtini: "dataInicio" },
          where: [
            ["fkOp", "=", kOp],
            ["fkOperacao", "=", "4020"],
          ],
        });
      }
      if (isEmpty(response)) {
        response = await client("oftalmo", {
          from: "tOperacaoOrdemProducao",
          max: { dtini: "dataInicio" },
          where: [
            ["fkOp", "=", kOp],
            ["fkOperacao", "=", "3160"],
          ],
        });
      }
      if (isEmpty(response)) {
        throw new Error(
          "Ordem de produção não possui 3059, 3060, 3160 ou 4020"
        );
      }
      return day(response[0].dtini);
    },

    // Retorna data de validade
    async getDataValidade(kOp: string) {
      const fabricacao = await resp.getDataFabricacao(kOp);
      const validade = day(fabricacao).add(5, "y");
      return validade;
    },

    // Retorna data de validade
    async getVersao(kOp: string) {
      const response = await client("oftalmo", {
        from: "tOrdemProducao",
        select: ["versao"],
        where: [["kOp", "=", kOp]],
      });
      return response[0].versao;
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    async getControle(kOp: string, serie: number) {
      const serial = "000000"
        .concat((parseInt(kOp) / 100).toString())
        .slice(-6)
        .concat("00000".concat(serie.toString()).slice(-5));
      const dv = module10(serial);
      return serial.concat(dv);
    },

    // Valida se número de série é válido
    isSerieValida(serie: string) {
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
  return resp;
}
