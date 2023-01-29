import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TNfEntradaLogPk = {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
};
export type TNfEntradaLogCol = {
  fornecedor_id?: number;
  data?: string;
  usuario?: string;
  operacao?: string;
  modelo_id?: string;
};
export type TNfEntradaLog = TNfEntradaLogPk | TNfEntradaLogCol;

export type TNfEntradaLogFields =
  | keyof Required<TNfEntradaLogPk>
  | keyof Required<TNfEntradaLogCol>;

export type TNfEntradaLogIds = {
  [pk in keyof Required<TNfEntradaLogPk>]: any;
};
export type TNfEntradaLogSelect = TSelect<TNfEntradaLogFields>;
export type TNfEntradaLogWhere = TWhere<TNfEntradaLogFields>;
export type TNfEntradaLogOrder = TOrder<TNfEntradaLogFields>;

export type TNfEntradaLogSchema = () => Promise<TFieldClient[]>;
export type TNfEntradaLogClear = () => Promise<TNfEntradaLog>;
export type TNfEntradaLogList = (args: {
  where?: TWhere<TNfEntradaLogFields>[];
  order?: TOrder<TNfEntradaLogFields>[];
  limit?: number;
  select?: TSelect<TNfEntradaLogFields>;
}) => Promise<TNfEntradaLog[]>;
export type TNfEntradaLogRead = (args: {
  id: TNfEntradaLogIds;
  select?: TSelect<TNfEntradaLogFields>;
}) => Promise<TNfEntradaLog>;

export type TNfEntradaLogCreate = (args: {
  data: TNfEntradaLog;
}) => Promise<TNfEntradaLog>;
export type TNfEntradaLogUpdate = (args: {
  id: TNfEntradaLogIds;
  data: TNfEntradaLog;
}) => Promise<TNfEntradaLog>;
export type TNfEntradaLogDel = (args: {
  id: TNfEntradaLogIds;
}) => Promise<number>;

export type TNfEntradaLogRpc = {
  query: {
    nfEntradaLogSchema: TNfEntradaLogSchema;
    clear: TNfEntradaLogClear;
    list: TNfEntradaLogList;
    read: TNfEntradaLogRead;
  };
  mutation: {
    nfEntradaLogCreate: TNfEntradaLogCreate;
    update: TNfEntradaLogUpdate;
    del: TNfEntradaLogDel;
  };
};
