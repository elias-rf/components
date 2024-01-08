import { dbPlano } from '@/core/db/db-plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { formatMoney } from '@/utils/format/format-money.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'
import {
  isoDate,
  nonOptional,
  number,
  object,
  parse,
  string,
  union,
} from 'valibot'

export const clienteSchema = {
  table: 'CadCli',
  primary: ['CdCliente'] as const,
  fields: [
    'CdCliente',
    'RzSocial',
    'Endereco',
    'Bairro',
    'Cidade',
    'Uf',
    'Cep',
    'EMail',
    'CGC',
    'NumIdentidade',
    'InscEst',
    'Telefone',
    'Fax',
    'CxPostal',
    'CdVendedor',
    'Classificacao',
    'Credito',
    'CidadeCob',
    'BairroCob',
    'UfCob',
    'CepCob',
    'BairroTrab',
    'CepTrab',
    'CapSocial',
    'Cargo1',
    'Cargo2',
    'Cargo3',
    'Cota1',
    'Cota2',
    'Cota3',
    'CartPro',
    'CdFilial',
    'CGCConjugue',
    'DiaLimiteFaturamento',
    'DtAdmissao',
    'DtConsulta',
    'DtFundacao',
    'DtMaiorCompra',
    'DtNascConjugue',
    'DtPriCompra',
    'DtResidencia',
    'DtUltAlteracao',
    'DtUltRetorno',
    'EnderecoCob',
    'EnderecoRef1',
    'EnderecoRef2',
    'EnderecoRef3',
    'EnderecoTrab',
    'EstadoCivil',
    'Experiencia',
    'FgBloqueio',
    'FgContribuinte',
    'FgFaturamento',
    'FgPropria',
    'Fidelidade',
    'FoneRec',
    'FoneRef1',
    'FoneRef2',
    'FoneRef3',
    'FoneTrabalho',
    'Funcao',
    'HabPgtoAnt',
    'HabPgtoAtu',
    'LocalTrabalho',
    'NmFantasia',
    'NomeRef1',
    'NomeRef2',
    'NomeRef3',
    'NumRetorno',
    'Observacao',
    'OutrosRen',
    'Pagto',
    'PercComissaoPrazo',
    'PercComissaoVista',
    'PrazoFaturamento',
    'RamalTrab',
    'Regiao',
    'RenFam',
    'Responsavel',
    'RG',
    'RGConjugue',
    'Salario',
    'Serasa',
    'SerieCartPro',
    'Sexo',
    'Socio1',
    'Socio2',
    'Socio3',
    'Spc',
    'TempoResposta',
    'TempoSolucao',
    'TipoFaturamento',
    'TipoPreco',
    'Unidade',
    'VideoCheque',
    'VlLimite',
    'VlMaiorCompra',
    'VlPriCompra',
    'VlUltCompra',
    'CdTipo',
    'CdBanco',
    'CdAgencia',
    'NmCobranca',
    'DtNasc',
    'FgAtivo',
    'DtUltAtraso',
    'VlMaiorAtraso',
    'QtdeAtraso',
    'NroDiasAtraso',
    'DtUltCompra',
    'TipoCobranca',
    'CidadeTrab',
    'UfTrab',
    'NumMatricula',
    'DtAprovacaoCadastro',
    'FgFichaCadastro',
    'Nacionalidade',
    'Profissao',
    'NumCartPlanoSaude',
    'LocalTrabalhoConjuge',
    'AcrescimoCusto',
    'FgBancoHoras',
    'Peso',
    'Altura',
    'Alergia',
    'NmContatoCliente',
    'CdRamoAtividade',
    'CdCidade',
    'PercAcrescimoAtacado',
    'DiaLimiteFaturamento2',
    'DiaVencimento',
    'DiaVencimento2',
    'VlCredito',
    'TelefoneAdicional',
    'NumCartaoFidelidade',
    'NumEndereco',
    'NmPaciente',
    'DtInicioFidelidade',
    'FgOptanteSimples',
    'Complemento',
    'FgAmiVida',
    'CdConvAssociado',
    'CdTipoContrato',
    'TempoLib',
    'DtValidade',
    'Tolerancia',
    'FgBloqueioCadastro',
    'CdTecnico',
    'EndBuscaReceita',
    'FgIsentoICMS',
    'CdTipoLiberacao',
    'DtMaiorAtraso',
    'PercComissaoVarejoVista',
    'PercComissaoAtacadoVista',
    'PercComissaoVarejoPrazo',
    'PercComissaoAtacadoPrazo',
    'NumLicencas',
    'CdVendedorExtra',
    'DtValidadeLicencaSanitaria',
    'DtValidadeBalanco',
    'CdAlternativo',
    'EmailCobranca',
    'DtMaiorAcumulo',
    'VlMaiorAcumulo',
    'FgObrigaNotaFiscal',
    'CdPais',
    'NmPais',
    'NumContaReceita',
    'InscMunicipal',
    'EmailProcNfe',
    'CdClienteAgrupador',
    'CNAE',
    'PercCargaTributariaMedia',
    'FgConsumidorFinal',
    'CPFAssociado',
    'CdEnderecoEntregaPadrao',
    'LocalEntregaAnterior',
    'ProximidadesAnterior',
    'FgInformarICMSSTAnterior',
    'FgTipoPessoa',
    'DtCadastro',
    'Proximidades',
    'IdentificacaoEstrangeiro',
    'CdTipoVenda',
    'FgDifalPorDentro',
    'TipoDocumento',
    'TipoTributacaoIPI',
    'IdWeb',
  ] as const,
}

export type TClienteFields = (typeof clienteSchema.fields)[number]
export type TClienteKeys = (typeof clienteSchema.primary)[number]
;(clienteSchema as TSchema).relations = {
  nfSaida: {
    method: () =>
      import('./nf-saida_controller.js').then(
        (m) => m.nfSaidaController.nfSaida_list
      ),
    where: [['CdProduto', 'CdProduto']],
  },
}

type TVendaMensal = {
  categoria: any
  [month: string]: any
}

function clienteControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TClienteFields, TClienteKeys>(db, schema)

  async function cliente_vendaMensalQuantidade(args: {
    inicio: string
    fim: string
    cliente: number
  }) {
    parse(
      object({
        inicio: nonOptional(
          string([isoDate('data inicial inválida')]),
          'inicio deve ser informado'
        ),
        fim: nonOptional(
          string([isoDate('data final inválida')]),
          'fim deve ser informado'
        ),
        cliente: nonOptional(
          union([number(), string()], 'cliente deve ser number ou string'),
          'cliente deve ser informado'
        ),
      }),
      args
    )

    const { nfSaidaController } = await import('./nf-saida_controller.js')
    const data = await nfSaidaController.nfSaida_vendaMensalCliente(args)

    const rsp = {} as {
      [category: string]: {
        [month: string]: number
      }
    }
    data.forEach(
      ({
        anoMes,
        NmCategoria,
        quantidade,
      }: {
        anoMes: string
        NmCategoria: string
        quantidade: number
        // valor: number
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {}
        rsp[NmCategoria][anoMes] = quantidade
      }
    )
    const resp = [] as TVendaMensal[]
    for (const item in rsp) {
      const it = {
        ...rsp[item],
        categoria: item,
      }
      resp.push(it)
    }
    return resp as TVendaMensal[]
  }

  const cliente_vendaMensalValorMedio = async (args: {
    inicio: string
    fim: string
    cliente: number
  }) => {
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
        cliente: union(
          [number(), string()],
          'cliente deve ser number ou string'
        ),
      }),
      args
    )
    const { nfSaidaController } = await import('./nf-saida_controller.js')
    const data = await nfSaidaController.nfSaida_vendaMensalCliente(args)
    const rsp: any = {}
    data.forEach(
      ({
        anoMes,
        NmCategoria,
        valor,
        quantidade,
      }: {
        anoMes: string
        NmCategoria: string
        quantidade: number
        valor: number
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {}
        rsp[NmCategoria][anoMes] =
          quantidade > 0 ? formatMoney(valor / quantidade, 2) : '0,00'
      }
    )
    const resp = []
    for (const item in rsp) {
      resp.push({ categoria: item, ...rsp[item] })
    }
    return resp as TVendaMensal[]
  }

  const cliente_vendaMensalValor = async (args: {
    inicio: string
    fim: string
    cliente: number
  }) => {
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
        cliente: union(
          [number(), string()],
          'cliente deve ser number ou string'
        ),
      }),
      args
    )
    const { nfSaidaController } = await import('./nf-saida_controller.js')
    const data = await nfSaidaController.nfSaida_vendaMensalCliente(args)
    const rsp: any = {}
    data.forEach(
      ({
        anoMes,
        NmCategoria,
        valor,
      }: {
        anoMes: string
        NmCategoria: string
        quantidade: number
        valor: number
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {}
        rsp[NmCategoria][anoMes] = formatMoney(valor, 0)
      }
    )
    const resp = []
    for (const item in rsp) {
      resp.push({ categoria: item, ...rsp[item] })
    }
    return resp as TVendaMensal[]
  }

  return {
    cliente_list: orm.rpc.list,
    cliente_read: orm.rpc.read,
    cliente_count: orm.rpc.count,
    cliente_update: orm.rpc.update,
    cliente_create: orm.rpc.create,
    cliente_del: orm.rpc.del,
    cliente_increment: orm.rpc.increment,
    cliente_vendaMensalQuantidade,
    cliente_vendaMensalValor,
    cliente_vendaMensalValorMedio,
  }
}

export const clienteController = clienteControllerFactory(
  dbPlano,
  clienteSchema
)