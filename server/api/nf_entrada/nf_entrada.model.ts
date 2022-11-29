import { TConnections } from "../../../types";
import { day } from "../../../utils/date/day";
import { isEmpty } from "../../../utils/identify/is_empty";
import { crudModel } from "../crud/crud.model";
import { estoqueModel } from "../estoque/estoque.model";
import { ordemProducaoModel } from "../ordem_producao/ordem_producao.model";
import { produtoEstatisticaModel } from "../produto_estatistica/produto_estatistica.model";

export function nfEntradaModel(connections: TConnections) {
  const ordemProducao = ordemProducaoModel(connections);
  const estoque = estoqueModel(connections);
  const produtoEstatistica = produtoEstatisticaModel(connections);
  const crud = crudModel(connections);
  return {
    // Transfere produtos acabados da matriz para filial
    async nfEntradaTransferenciaCreate({
      controles,
    }: {
      controles: string[];
    }): Promise<boolean> {
      // validateIsThrow(isNonEmptyArray(controles), "Controles devem ser array");
      const ordem_producao_id = await ordemProducao.fromControle({
        controle: controles[0],
      });

      for (const ctrl of controles) {
        const valid = await ordemProducao.isControleValid({
          controle: ctrl,
        });
        if (!valid) throw new Error(`Controle ${ctrl} inválido`);
        const op_id = await ordemProducao.fromControle({ controle: ctrl });
        if (ordem_producao_id !== op_id)
          throw new Error(
            `Controle ${ctrl} pertence a outra ordem de produção`
          );
      }
      const { produto_plano_id } = await ordemProducao.produtoPlano({
        id: { ordem_producao_id },
        select: ["produto_plano_id"],
      });

      if (isEmpty(produto_plano_id)) {
        throw new Error(
          `Ordem de produção ${ordem_producao_id} não possui vinculo com Plano`
        );
      }

      const fabricacao = await ordemProducao
        .dataFabricacao({ id: { ordem_producao_id } })
        .then((dt: any) => {
          if (isEmpty(dt)) {
            throw new Error(
              `Ordem de produção ${ordem_producao_id} não possui data de fabricação`
            );
          }
          return day(dt).format("YYYY-MM-DD");
        });

      const expiracao = await ordemProducao.dataValidade({
        id: { ordem_producao_id },
      });

      const quantidade = controles.length;

      const hoje = day().format("YYYY-MM-DD");
      const agora = day().format("HH:mm:ss");

      const nf = await crud.read({
        table: "nf_entrada",
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

      await crud.create({
        table: "nf_entrada",
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

      await crud.create({
        table: "nf_entrada_item",
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

      await estoque.increment({
        id: { filial_id: "1", produto_id: produto_plano_id || "" },
        quantidade,
      });

      await produtoEstatistica.increment({
        id: {
          filial_id: "1",
          mes: day().format("MM"),
          ano: day().format("YY"),
          produto_id: produto_plano_id || "",
        },
        quantidade,
      });

      for (const ctrl of controles) {
        await crud.create({
          table: "produto_controle",
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
        await crud.create({
          table: "nf_entrada_controle",
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

      await crud.create({
        table: "nf_entrada_log",
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
    },
  };
}
