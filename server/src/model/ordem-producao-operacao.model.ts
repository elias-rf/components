import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type OrdemProducaoOperacaoRecord = {
  kOperacaoOp?: string;
  fkOp?: string;
  fkOperacaoLP?: string;
  fkOperacao?: string;
  fkFuncionario?: string;
  fkMaquina?: string;
  DataHoraInicio?: string;
  DataInicio?: string;
  HoraInicio?: string;
  DataHoraFim?: string;
  DataFim?: string;
  HoraFim?: string;
  QtdInicial?: string;
  QtdConforme?: string;
  QtdRetrabalho?: string;
  fkOperacaoRetrab?: string;
  Complemento?: string;
  fkOPFilha?: string;
  EspPriAlca?: string;
  EspSegAlca?: string;
};

export class OrdemProducaoOperacaoModel extends EntityModel<OrdemProducaoOperacaoRecord> {
  constructor(connections: TConnections) {
    super(connections, "ordemProducaoOperacao");
  }
}
