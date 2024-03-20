import { TSchema } from '@/schemas/schema.type.js'

export const fornecedorSchema: TSchema = {
  table: 'CadFor',
  primary: ['CdFornecedor'] as const,
  fields: [
    'CdFornecedor',
    'RzSocial',
    'Endereco',
    'Bairro',
    'Cidade',
    'Uf',
    'Cep',
    'CGC',
    'InscEst',
    'EMail',
    'Telefone',
    'Fax',
    'CdTipo',
    'CdSubTipo',
    'ReduMargemSub',
    'DtUltCompra',
    'DtUltAlteracao',
    'ModeloAtualizacao',
    'CdGrupo',
    'ModeloPedido',
    'CdIdentificacao',
    'VlMoeda',
    'CdCentroCustoPadrao',
    'IdCondPagamento',
    'Observacao',
    'DirTrocaArquivo',
    'NmFantasia',
    'Classificacao',
    'FgCotacao',
    'FgSigiloso',
    'NumContaDespesa',
    'FgAtivo',
    'FgGNRE',
    'NumEndereco',
    'Complemento',
    'InscSuframa',
    'FgTipoCustoDRE',
    'CdPais',
  ] as const,
}
