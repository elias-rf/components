export const ordemProducaoOperacaoSchema = {
  table: 'tOperacaoOrdemProducao',
  primary: ['kOperacaoOP'],
  // relations: {
  //   operacao: {
  //     method: () =>
  //       import('../operacao-producao_controller.mjs').then(
  //         (m) => m.operacaoProducaoController.operacaoProducao_read
  //       ),
  //     where: [['kOperacao', 'fkOperacao']],
  //   },
  //   empregado: {
  //     method: () =>
  //       import('../../empregado_controller.mjs').then(
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
  ],
}
