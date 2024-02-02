import { dbPlano } from '@/core/db/db-plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { formatMoney } from '@/utils/format/format-money.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'
import * as v from 'valibot'

export const clienteSchema = {
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
    v.parse(
      v.object({
        inicio: v.nonOptional(
          v.string([v.isoDate('data inicial inválida')]),
          'inicio deve ser informado'
        ),
        fim: v.nonOptional(
          v.string([v.isoDate('data final inválida')]),
          'fim deve ser informado'
        ),
        cliente: v.nonOptional(
          v.union(
            [v.number(), v.string()],
            'cliente deve ser number ou string'
          ),
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
    v.parse(
      v.object({
        inicio: v.string([v.isoDate('data inicial inválida')]),
        fim: v.string([v.isoDate('data final inválida')]),
        cliente: v.union(
          [v.number(), v.string()],
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
    v.parse(
      v.object({
        inicio: v.string([v.isoDate('data inicial inválida')]),
        fim: v.string([v.isoDate('data final inválida')]),
        cliente: v.union(
          [v.number(), v.string()],
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
