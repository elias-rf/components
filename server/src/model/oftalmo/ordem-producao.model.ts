import { Id, Schema } from "@er/types";
import { day } from "@er/utils/src/day";
import { isEmpty } from "@er/utils/src/is-empty";
import { module10 } from "@er/utils/src/module10";
import { Connections } from "../../dal/connections";
import { Model } from "../model";
import { ProdutoPlanoModel } from "../plano/produto-plano.model";
import { OrdemProducaoOperacaoModel } from "./ordem-producao-operacao.model";
import { ProdutoItemModel } from "./produto-item.model";
import { ProdutoModel } from "./produto.model";

export type OrdemProducaoRecord = {
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

export class OrdemProducaoModel extends Model<OrdemProducaoRecord> {
  produtoItemModel: ProdutoItemModel;
  produtoModel: ProdutoModel;
  produtoPlanoModel: ProdutoPlanoModel;
  ordemProducaoOperacaoModel: OrdemProducaoOperacaoModel;

  constructor(connections: Connections) {
    super(connections.oftalmo, "cliente", "tOrdemProducao", ["kOp"]);
    this.produtoItemModel = new ProdutoItemModel(connections);
    this.produtoModel = new ProdutoModel(connections);
    this.produtoPlanoModel = new ProdutoPlanoModel(connections);
    this.ordemProducaoOperacaoModel = new OrdemProducaoOperacaoModel(
      connections
    );
  }

  // Retorna Produto item
  async produtoItem(id: Id, select?: string[]) {
    const { fkProdutoItem } = await this.read(id, ["fkProdutoItem"]);
    return this.produtoItemModel.read([fkProdutoItem || ""]);
  }
  async produto(id: Id, select?: string[]) {
    const { fkProdutoItem } = await this.read(id, ["fkProdutoItem"]);
    const { fkProduto } = await this.produtoItemModel.read([
      fkProdutoItem || "",
    ]);
    return this.produtoModel.read([fkProduto || ""]);
  }
  async produtoPlano(id: Id, select?: string[]) {
    const { fkProdutoItem } = await this.read(id, ["fkProdutoItem"]);
    let { idVisiontech } = await this.produtoItemModel.read([
      fkProdutoItem || "",
    ]);
    if (!idVisiontech === undefined) {
      idVisiontech = idVisiontech?.trim();
    }
    return this.produtoPlanoModel.read([idVisiontech || ""]);
  }

  // Retorna data de fabricacao
  async dataFabricacao(id: Id) {
    let response = await this.ordemProducaoOperacaoModel.list(
      [
        ["fkOperacao", "=", "3059"],
        ["fkOp", "=", id[0]],
      ],
      [["DataHoraInicio", "desc"]]
    );

    if (isEmpty(response[0].DataInicio)) {
      let response = await this.ordemProducaoOperacaoModel.list(
        [
          ["fkOperacao", "=", "3060"],
          ["fkOp", "=", id[0]],
        ],
        [["DataHoraInicio", "desc"]]
      );
      if (isEmpty(response[0].DataInicio)) {
        let response = await this.ordemProducaoOperacaoModel.list(
          [
            ["fkOperacao", "=", "4020"],
            ["fkOp", "=", id[0]],
          ],
          [["DataHoraInicio", "desc"]]
        );
      }
      if (isEmpty(response[0].DataInicio)) {
        let response = await this.ordemProducaoOperacaoModel.list(
          [
            ["fkOperacao", "=", "3160"],
            ["fkOp", "=", id[0]],
          ],
          [["DataHoraInicio", "desc"]]
        );
      }
      if (isEmpty(response[0].DataInicio)) {
        throw new Error(
          "Ordem de produção não possui 3059, 3060, 4020 ou 3160"
        );
      }
    }
    if (Array.isArray(response) && response.length > 0) {
      return day(response[0].DataInicio).toISOString();
    }
    return "";
  }

  // Retorna data de validade
  async dataValidade(id: Id) {
    const fabricacao = await this.dataFabricacao(id);
    if (fabricacao === "") {
      throw new Error("Ordem de produção não possui 3059, 3060, 4020 ou 3160");
    }
    const validade = day(fabricacao).add(5, "y").toISOString();
    return validade;
  }

  // Retorna data de validade
  async versao(id: Id) {
    const rec = (await this.read(id)) as OrdemProducaoRecord;
    return rec.versao || "";
  }

  // Retorna numero de controle a partir da ordem de producao e numero de serie
  async controle(id: Id, serie: string) {
    const serial = "000000"
      .concat((parseInt(id[0]) / 100).toString())
      .slice(-6)
      .concat("00000".concat(serie.toString()).slice(-5));
    const dv = module10(serial);
    return serial.concat(dv);
  }

  // Retorna ordem de producao a partir de um controle
  fromControle(controle: string) {
    return controle.slice(0, 6) + "00";
  }

  // Valida se número de série é válido
  isControleValid(controle: string) {
    if (!controle) return false;

    if (controle.length === 12) {
      const serial = controle.substring(0, 11);
      const dv = controle.substring(11);
      if (module10(serial) === dv) {
        return true;
      }
    }
    return false;
  }

  async schema(): Promise<Schema> {
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
  }
}
