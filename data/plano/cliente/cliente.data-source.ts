import {
  TClienteDtoFields,
  TClienteDtoKeys,
} from '@/core/cliente/cliente.type.js'
import { clienteMapFields } from '@/data/plano/cliente/cliente.map-fields.js'
import { clienteToDto } from '@/data/plano/cliente/cliente.to-dto.js'
import { TSchema } from '@/schemas/schema.type.js'
import {
  TCount,
  TCreate,
  TData,
  TDel,
  TIncrement,
  TList,
  TRead,
  TUpdate,
} from '@/types/query.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTableDataSource } from '@/utils/orm/orm-data-source/index.js'
import { argsFromDto } from '@/utils/orm/utils/args-from-dto.js'

export const clienteSchema: TSchema = {
  table: 'CadCli',
  primary: ['CdCliente'] as const,
  fields: [
    'AcrescimoCusto',
    'Alergia',
    'Altura',
    'Bairro',
    'BairroCob',
    'BairroTrab',
    'CapSocial',
    'Cargo1',
    'Cargo2',
    'Cargo3',
    'CartPro',
    'CdAgencia',
    'CdAlternativo',
    'CdBanco',
    'CdCidade',
    'CdCliente',
    'CdClienteAgrupador',
    'CdConvAssociado',
    'CdEnderecoEntregaPadrao',
    'CdFilial',
    'CdPais',
    'CdRamoAtividade',
    'CdTecnico',
    'CdTipo',
    'CdTipoContrato',
    'CdTipoLiberacao',
    'CdTipoVenda',
    'CdVendedor',
    'CdVendedorExtra',
    'Cep',
    'CepCob',
    'CepTrab',
    'CGC',
    'CGCConjugue',
    'Cidade',
    'CidadeCob',
    'CidadeTrab',
    'Classificacao',
    'CNAE',
    'Complemento',
    'Cota1',
    'Cota2',
    'Cota3',
    'CPFAssociado',
    'Credito',
    'CxPostal',
    'DiaLimiteFaturamento',
    'DiaLimiteFaturamento2',
    'DiaVencimento',
    'DiaVencimento2',
    'DtAdmissao',
    'DtAprovacaoCadastro',
    'DtCadastro',
    'DtConsulta',
    'DtFundacao',
    'DtInicioFidelidade',
    'DtMaiorAcumulo',
    'DtMaiorAtraso',
    'DtMaiorCompra',
    'DtNasc',
    'DtNascConjugue',
    'DtPriCompra',
    'DtResidencia',
    'DtUltAlteracao',
    'DtUltAtraso',
    'DtUltCompra',
    'DtUltRetorno',
    'DtValidade',
    'DtValidadeBalanco',
    'DtValidadeLicencaSanitaria',
    'EMail',
    'EmailCobranca',
    'EmailProcNfe',
    'EndBuscaReceita',
    'Endereco',
    'EnderecoCob',
    'EnderecoRef1',
    'EnderecoRef2',
    'EnderecoRef3',
    'EnderecoTrab',
    'EstadoCivil',
    'Experiencia',
    'Fax',
    'FgAmiVida',
    'FgAtivo',
    'FgBancoHoras',
    'FgBloqueio',
    'FgBloqueioCadastro',
    'FgConsumidorFinal',
    'FgContribuinte',
    'FgDifalPorDentro',
    'FgFaturamento',
    'FgFichaCadastro',
    'FgInformarICMSSTAnterior',
    'FgIsentoICMS',
    'FgObrigaNotaFiscal',
    'FgOptanteSimples',
    'FgPropria',
    'FgTipoPessoa',
    'Fidelidade',
    'FoneRec',
    'FoneRef1',
    'FoneRef2',
    'FoneRef3',
    'FoneTrabalho',
    'Funcao',
    'HabPgtoAnt',
    'HabPgtoAtu',
    'IdentificacaoEstrangeiro',
    'IdWeb',
    'InscEst',
    'InscMunicipal',
    'LocalEntregaAnterior',
    'LocalTrabalho',
    'LocalTrabalhoConjuge',
    'Nacionalidade',
    'NmCobranca',
    'NmContatoCliente',
    'NmFantasia',
    'NmPaciente',
    'NmPais',
    'NomeRef1',
    'NomeRef2',
    'NomeRef3',
    'NroDiasAtraso',
    'NumCartaoFidelidade',
    'NumCartPlanoSaude',
    'NumContaReceita',
    'NumEndereco',
    'NumIdentidade',
    'NumLicencas',
    'NumMatricula',
    'NumRetorno',
    'Observacao',
    'OutrosRen',
    'Pagto',
    'PercAcrescimoAtacado',
    'PercCargaTributariaMedia',
    'PercComissaoAtacadoPrazo',
    'PercComissaoAtacadoVista',
    'PercComissaoPrazo',
    'PercComissaoVarejoPrazo',
    'PercComissaoVarejoVista',
    'PercComissaoVista',
    'Peso',
    'PrazoFaturamento',
    'Profissao',
    'Proximidades',
    'ProximidadesAnterior',
    'QtdeAtraso',
    'RamalTrab',
    'Regiao',
    'RenFam',
    'Responsavel',
    'RG',
    'RGConjugue',
    'RzSocial',
    'Salario',
    'Serasa',
    'SerieCartPro',
    'Sexo',
    'Socio1',
    'Socio2',
    'Socio3',
    'Spc',
    'Telefone',
    'TelefoneAdicional',
    'TempoLib',
    'TempoResposta',
    'TempoSolucao',
    'TipoCobranca',
    'TipoDocumento',
    'TipoFaturamento',
    'TipoPreco',
    'TipoTributacaoIPI',
    'Tolerancia',
    'Uf',
    'UfCob',
    'UfTrab',
    'Unidade',
    'VideoCheque',
    'VlCredito',
    'VlLimite',
    'VlMaiorAcumulo',
    'VlMaiorAtraso',
    'VlMaiorCompra',
    'VlPriCompra',
    'VlUltCompra',
  ] as const,
}

export type TClienteSchema = {
  CdCliente: number
  RzSocial: string
  CdCidade: string
  CdPais: string
  CdVendedor: string
  CGC: string
  Cidade: string
}

export type TClienteFields = (typeof clienteSchema.fields)[number]
export type TClienteKeys = (typeof clienteSchema.primary)[number]

export function clienteDataSource(ds: TAdapterKnex) {
  const orm = ormTableDataSource(ds, clienteSchema)

  const list: TList<TClienteDtoFields> = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, clienteMapFields))
    return response.map((record) => clienteToDto(record))
  }

  const read: TRead<TClienteDtoFields, TClienteDtoKeys> = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, clienteMapFields))
    return clienteToDto(response)
  }

  const count: TCount<TClienteDtoFields> = (args) => {
    return orm.rpc.count(argsFromDto(args, clienteMapFields))
  }

  const update: TUpdate<TClienteDtoFields> = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, clienteMapFields))

    if (typeof response === 'number') {
      return response
    }
    return response.map((record) =>
      clienteToDto(record as TData<TClienteDtoFields>)
    )
  }

  const del: TDel<TClienteDtoFields> = (args) => {
    return orm.rpc.del(argsFromDto(args, clienteMapFields))
  }

  const increment: TIncrement<TClienteDtoFields> = (args) => {
    return orm.rpc.increment(argsFromDto(args, clienteMapFields))
  }

  const create: TCreate<TClienteDtoFields> = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, clienteMapFields))

    return response.map((record) =>
      clienteToDto(record as TData<TClienteDtoFields>)
    )
  }

  return {
    list,
    read,
    count,
    update,
    create,
    del,
    increment,
  }
}
