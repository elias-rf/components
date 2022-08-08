import { Connections } from "../../dal/connections";
import { Model } from "../model";

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

export class OrdemProducaoOperacaoModel extends Model<OrdemProducaoOperacaoRecord> {
  constructor(connections: Connections) {
    super(
      connections.oftalmo,
      "ordemProducaoOperacao",
      "tOperacaoOrdemProducao",
      ["kOperacaoOp"]
    );
  }
}
