import type { TSchema } from '@/schemas/schema.type.js'

export const ordemProducaoSchema: TSchema = {
  table: 'tOrdemProducao',
  primary: ['kOp'] as const,
  // relations: {
  //   operacoes: {
  //     method: () =>
  //       import('./operacao/ordem-producao-operacao_controller.js').then(
  //         (m) => m.ordemProducaoOperacaoController.ordemProducaoOperacao_list
  //       ),
  //     where: [['fkOp', 'kOp']],
  //   },
  //   produtoItem: {
  //     method: () =>
  //       import('../produto/produto-item_controller.js').then(
  //         (m) => m.produtoItemController.produtoItem_read
  //       ),

  //     where: [['kProdutoItem', 'fkProdutoItem']],
  //   },
  // },
  fields: [
    'kOp',
    'ChaveAntiga',
    'fkTipoOP',
    'DataEmissao',
    'DataFechamento',
    'Travado',
    'fkOpPai',
    'LoteFabricante',
    'NomeUsuario',
    'fkOPBotao',
    'fkOPBotaoAntiga',
    'ViaAntiga',
    'fkOPLoop',
    'fkOPLoopAntiga',
    'fkProdutoItem',
    'Quantidade',
    'QtdEmProcesso',
    'Broca',
    'fkLoteEstExt',
    'fkLoteEstInt',
    'EspessuraBotao',
    'DiametroBotao',
    'LoteBotaoTerceiro',
    'QtdFilamentosLoop',
    'EspessuraLoop',
    'ModeloLoop',
    'TamanhoLoop',
    'Partida',
    'ClasseOP',
    'fkPrimeiraOperacao',
    'CalcularEmProcesso',
    'Selecao',
    'QtdEstExt_tmp',
    'Obs',
    'Expiracao',
    'OPVerificada',
    'CriticaLancamento',
    'fkOPMestre',
    'DataUltimoLancamento',
    'IndiceRefracao',
    'IndiceRefracao2',
    'EtiqInternaImpressa',
    'ExportadoSANKHYA',
    'deleted',
    'ts',
    'versao',
    'emProcesso',
    'fkOperacaoEmProcesso',
    'loteTamboreamento',
    'raio',
  ] as const,
}
