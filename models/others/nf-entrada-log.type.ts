import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TNfEntradaLogPk {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
}
export interface TNfEntradaLog extends TNfEntradaLogPk {
  fornecedor_id?: number;
  data?: string;
  usuario?: string;
  operacao?: string;
  modelo_id?: string;
}

export type TNfEntradaLogFields = keyof Required<TNfEntradaLog>;

export type TNfEntradaLogIds = {
  [pk in keyof Required<TNfEntradaLogPk>]: any;
};
export type TNfEntradaLogSelect = TSelect;
export type TNfEntradaLogWhere = TWhere;
export type TNfEntradaLogOrder = TOrder;

export type TNfEntradaLogSchema = () => Promise<TFieldDef[]>;
export type TNfEntradaLogClear = () => Promise<TNfEntradaLog>;
export type TNfEntradaLogList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TNfEntradaLog[]>;
export type TNfEntradaLogRead = (args: {
  id: TNfEntradaLogIds;
  select?: TSelect;
}) => Promise<TNfEntradaLog>;

export type TNfEntradaLogCreate = (args: {
  data: TNfEntradaLog;
  select?: TSelect;
}) => Promise<TNfEntradaLog>;
export type TNfEntradaLogUpdate = (args: {
  id: TNfEntradaLogIds;
  data: TNfEntradaLog;
  select?: TSelect;
}) => Promise<TNfEntradaLog>;
export type TNfEntradaLogDel = (args: {
  id: TNfEntradaLogIds;
}) => Promise<number>;

//#region def
//#endregion

export type TNfEntradaLogCrud = {
  query: {
    schema: TNfEntradaLogSchema;
    clear: TNfEntradaLogClear;
    list: TNfEntradaLogList;
    read: TNfEntradaLogRead;
  };
  mutation: {
    create: TNfEntradaLogCreate;
    update: TNfEntradaLogUpdate;
    del: TNfEntradaLogDel;
  };
};

export type TNfEntradaLogModel = TNfEntradaLogCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TNfEntradaLogRpc = TNfEntradaLogModel;
