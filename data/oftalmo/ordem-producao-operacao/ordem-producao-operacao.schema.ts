import type { TSchema } from '@/schemas/schema.type.js'

export const ordemProducaoOperacaoSchema: TSchema = {
  table: 'tOperacaoOrdemProducao',
  primary: ['kOperacaoOP'],
  // relations: {
  //   operacao: {
  //     method: () =>
  //       import('../operacao-producao_controller.js').then(
  //         (m) => m.operacaoProducaoController.operacaoProducao_read
  //       ),
  //     where: [['kOperacao', 'fkOperacao']],
  //   },
  //   empregado: {
  //     method: () =>
  //       import('../../empregado_controller.js').then(
  //         (m) => m.empregadoController.empregado_read
  //       ),
  //     where: [['kEmpregado', 'fkEmpregado']],
  //   },
  // },
  fields: [
    'kOperacaoOP',
    'fkOp',
    'fkOperacaoLP',
    'fkOperacao',
    'fkFuncionario',
    'fkMaquina',
    'DataHoraInicio',
    'DataInicio',
    'HoraInicio',
    'DataHoraFim',
    'DataFim',
    'HoraFim',
    'QtdInicial',
    'QtdConforme',
    'QtdRetrabalho',
    'fkOperacaoRetrab',
    'Complemento',
    'fkOPFilha',
    'ViaFilhaAntiga',
    'IdPagina',
    'OPAntiga',
    'ClasseOP',
    'EspPriAlca',
    'EspSegAlca',
  ] as const,
}
