export type TOrdemProducaoOperacao = {
  tOperacaoOrdemProducao_id?: number;
  fkOp?: number;
  fkOperacaoLP?: number;
  fkOperacao?: number;
  fkFuncionario?: number;
  fkMaquina?: string;
  DataHoraInicio?: string;
  DataInicio?: string;
  HoraInicio?: string;
  DataHoraFim?: string;
  DataFim?: string;
  HoraFim?: string;
  QtdInicial?: number;
  QtdConforme?: number;
  QtdRetrabalho?: number;
  fkOperacaoRetrab?: number;
  Complemento?: string;
  fkOPFilha?: number;
  ViaFilhaAntiga?: number;
  IdPagina?: number;
  OPAntiga?: string;
  ClasseOP?: number;
  EspPriAlca?: string;
  EspSegAlca?: string;
}