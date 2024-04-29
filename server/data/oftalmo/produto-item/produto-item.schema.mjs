export const produtoItemSchema = {
  table: 'tbl_Produto_Item',
  primary: ['kProdutoItem'],
  // relations: {
  //   produto: {
  //     method: () =>
  //       import('../produto/produto_controller.mjs').then(
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
