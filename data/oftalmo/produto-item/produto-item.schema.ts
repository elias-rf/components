import { TSchema } from '@/schemas/schema.type.js'

export const produtoItemSchema: TSchema = {
  table: 'tbl_Produto_Item',
  primary: ['kProdutoItem'] as const,
  // relations: {
  //   produto: {
  //     method: () =>
  //       import('../produto/produto_controller.js').then(
  //         (m) => m.produtoController.produto_read
  //       ),
  //     where: [['kProduto', 'fkProduto']],
  //   },
  // },
  fields: [
    'kProdutoItem',
    'NomeProdutoItem',
    'fkProduto',
    'QtdMinima',
    'QtdAtual',
    'QtdMaxima',
    'QtdSeguranca',
    'ConsumoMedioMes',
    'ValorVenda',
    'IdVisiontech',
    'ForaDeLinha',
    'GrupoCredito',
    'fkProdutoItemAssociado',
    'AvisoEstoqueMinMax',
  ],
}
