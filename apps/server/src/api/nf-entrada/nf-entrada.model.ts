import { day } from "@er/utils/src/day";
import { isEmpty } from "@er/utils/src/is-empty";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { EstoqueModel } from "../estoque/estoque.model";
import { NfEntradaControleModel } from "../nf-entrada-controle/nf-entrada-controle.model";
import { NfEntradaItemModel } from "../nf-entrada-item/nf-entrada-item.model";
import { NfEntradaLogModel } from "../nf-entrada-log/nf-entrada-log.model";
import { OrdemProducaoModel } from "../ordem-producao/ordem-producao.model";
import { ProdutoControleModel } from "../produto-controle/produto-controle.model";
import { ProdutoEstatisticaModel } from "../produto-estatistica/produto-estatistica.model";
import { TNfEntrada } from "./nf-entrada.type";

export class NfEntradaModel extends Entity<TNfEntrada> {
  ordemProducao: OrdemProducaoModel;
  nfEntradaControle: NfEntradaControleModel;
  nfEntradaItem: NfEntradaItemModel;
  nfEntradaLog: NfEntradaLogModel;
  estoque: EstoqueModel;
  produtoEstatistica: ProdutoEstatisticaModel;
  produtoControle: ProdutoControleModel;

  constructor(connections: TConnections) {
    super(connections, "nf_entrada");
    this.ordemProducao = new OrdemProducaoModel(connections);
    this.nfEntradaControle = new NfEntradaControleModel(connections);
    this.nfEntradaItem = new NfEntradaItemModel(connections);
    this.nfEntradaLog = new NfEntradaLogModel(connections);
    this.estoque = new EstoqueModel(connections);
    this.produtoEstatistica = new ProdutoEstatisticaModel(connections);
    this.produtoControle = new ProdutoControleModel(connections);
  }

  // Transfere produtos acabados da matriz para filial
  async nfEntradaTransferenciaCreate({
    controle,
  }: {
    controle: string[];
  }): Promise<boolean> {
    // validateIsThrow(isNonEmptyArray(controles), "Controles devem ser array");
    const ordem_producao_id = await this.ordemProducao.fromControle({
      controle: controle[0],
    });

    for (const ctrl of controle) {
      const valid = await this.ordemProducao.isControleValid({
        controle: ctrl,
      });
      if (!valid) throw new Error(`Controle ${ctrl} inválido`);
      const op_id = await this.ordemProducao.fromControle({ controle: ctrl });
      if (ordem_producao_id !== op_id)
        throw new Error(`Controle ${ctrl} pertence a outra ordem de produção`);
    }
    const { produto_plano_id } = await this.ordemProducao.produtoPlano({
      id: { ordem_producao_id },
      select: ["produto_plano_id"],
    });

    if (isEmpty(produto_plano_id)) {
      throw new Error(
        `Ordem de produção ${ordem_producao_id} não possui vinculo com Plano`
      );
    }

    const fabricacao = await this.ordemProducao
      .dataFabricacao({ id: { ordem_producao_id } })
      .then((dt) => {
        if (isEmpty(dt)) {
          throw new Error(
            `Ordem de produção ${ordem_producao_id} não possui data de fabricação`
          );
        }
        return day(dt).format("YYYY-MM-DD");
      });

    const expiracao = await this.ordemProducao.dataValidade({
      id: { ordem_producao_id },
    });

    const quantidade = controle.length;

    const hoje = day().format("YYYY-MM-DD");
    const agora = day().format("HH:mm:ss");

    const nf = await this.read({
      id: {
        filial_id: "0",
        nota_id: ordem_producao_id,
        serie_id: "XX",
        modelo_id: "1",
      },
      select: ["nota_id"],
    });

    if (!isEmpty(nf)) {
      throw new Error(
        `Ordem de produção ${ordem_producao_id} já está cadastrada`
      );
    }

    await this.create({
      data: {
        filial_id: -1,
        nota_id: ordem_producao_id,
        serie_id: "XX",
        modelo_id: "1",
        fornecedor_id: 1,
        data_emissao: `${hoje} ${agora}`,
        data_entrada: `${hoje} ${agora}`,
        cfop: 1102,
        cfop_fiscal: 1102,
        total_nf: quantidade * 2,
        BaseSubstituicao: 0,
        IPIBasCalc: 0,
        IPIVlr: 0,
        IPIFrete: 0,
        ICMSBasCalc: 0,
        ICMSVlr: 0,
        ICMSRetido: 0,
        ICMSOperPropria: 0,
        ICMSFrete: 0,
        Frete: 0,
        Seguro: 0,
        DtValidacao: hoje,
        VlMercadorias: quantidade * 2,
        ConPag: "P",
        Tipo: "N",
        Horario: agora,
        FgIPICompoeBase: "N",
        VlNfComplementar: 0,
        FgIPICompoeBaseSub: "N",
        FgEstoque: "S",
        IdParametro: 0,
        GrupoFiscal: 0,
        FgConferencia: "P",
        VlRepasseICMS: 0,
        FgSomaICMSSub: "S",
        DtConferencia: "1900-01-01 00:00:00",
        SgUsuario: "ERIBEIRO",
        dsObservacao: " ",
        FgUtilizaPercRedBCIcms: "N",
        VlDespAcessorias: 0,
        NumNotaRelacionada: 0,
        VlNotaRelacionada: 0,
        FgDespesasCompoeTotal: "N",
        NumChaveNfe: " ",
        FgXML: "N",
        FgGNRE: "A",
        FgFreteCompoeBaseICMS: "N",
        FgFreteCompoeBaseIPI: "N",
        FgFreteCompoeVlProdutos: "N",
        FgFreteCompoeTotal: "N",
        FgDespesasCompoeBaseICMS: "N",
        FgDespesasCompoeBaseIPI: "N",
        FgDespesasCompoeVlProdutos: "N",
        FgSeguroCompoeVlProdutos: "N",
        FgSeguroCompoeBaseICMS: "N",
        FgSeguroCompoeBaseIPI: "N",
        FgSeguroCompoeTotal: "N",
      },
    });

    await this.nfEntradaItem.create({
      data: {
        filial_id: 1,
        nota_id: ordem_producao_id,
        serie_id: "XX",
        modelo_id: "1",
        fornecedor_id: 1,
        produto_id: produto_plano_id,
        is_custo: "S",
        is_etiqueta: "N",
        percentual_icms: 0,
        percentual_ipi: 0,
        quantidade: quantidade,
        movimentacao: "N",
        valor_acrescimo: 0,
        valor_desconto: 0,
        valor_icms: 0,
        valor_ipi: 0,
        valor_total: quantidade * 2,
        tipo_tributacao: "T",
        valor_base_substituicao: 0,
        valor_icms_substituicao: 0,
        data_entrada: `${hoje} ${agora}`,
        is_estoque: "S",
        valor_repasse_icms: 0,
        is_icms_recolhido: 0,
        preco_pmc: 0,
        valor_relacionado: 0,
        is_compoe_base_substituicao: "S",
        cfop: 0,
        cfop_fiscal_item: 0,
        valor_base_calculo_icms: 0,
        valor_bruto_unitario: 2,
        valor_liquido_unitario: 2,
        base_calculo_credito_pis_cofins: 0,
        tipo_credito_pis_cofins: 0,
        contribuicao_apurada_pis_cofins: 0,
        sequencia: 1,
        valor_base_calculo_ipi: 0,
        is_conferido: " ",
      },
    });

    await this.estoque.increment({
      id: { filial_id: "1", produto_id: produto_plano_id || "" },
      quantidade,
    });

    await this.produtoEstatistica.increment({
      id: {
        filial_id: "1",
        mes: day().format("MM"),
        ano: day().format("YY"),
        produto_id: produto_plano_id || "",
      },
      quantidade,
    });

    for (const ctrl of controle) {
      await this.produtoControle.create({
        data: {
          filial_id: 1,
          nota_id: produto_plano_id,
          serie_id: "XX",
          modelo_id: "1",
          fornecedor_id: 1,
          aspecto: " ",
          controle: ctrl,
          nra_id: " ",
          produto_id: produto_plano_id || "",
          densidade: 0,
          data_analise: fabricacao || "",
          data_entrada: hoje,
          data_fabricacao: fabricacao || "",
          data_limite_uso: expiracao || "",
          data_validade: expiracao || "",
          fator_correcao: 0,
          percentual_diluicao: 0,
          quantidade_adquirida: 1,
          saldo_peso: 1,
          situacao_lote: "A",
          tipo_lote: "C",
        },
      });
      await this.nfEntradaControle.create({
        data: {
          filial_id: "1",
          nota_id: ordem_producao_id,
          serie_id: "XX",
          fornecedor_id: "1",
          modelo_id: "1",
          controle: ctrl,
          produto_id: produto_plano_id || "",
          quantidade: "1",
        },
      });
    }

    await this.nfEntradaLog.create({
      data: {
        filial_id: "1",
        nota_id: ordem_producao_id,
        serie_id: "XX",
        modelo_id: "1",
        fornecedor_id: "1",
        data: `${hoje} ${agora}`,
        usuario: "ERIBEIRO",
        operacao: "INCLUSAO DA CONFERENCIA",
      },
    });

    return true;
  }
}
